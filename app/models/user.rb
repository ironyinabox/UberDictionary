class User < ActiveRecord::Base
  validates :user_name, :user_email, uniqueness: true
  validates :user_name, :user_email, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token

  has_many :defins,
  class_name: "Defin",
  foreign_key: :author_id

  has_many :votes

  attr_reader :password

  def self.find_or_create_by_auth_hash(auth_hash)
    user = User.find_by(
      provider: auth_hash[:provider],
      uid: auth_hash[:uid]
    )

    unless user
      if auth_hash[:provider] == "twitter"
        user = User.create!(
          provider: auth_hash[:provider],
          uid: auth_hash[:uid],
          user_email: auth_hash[:info][:nickname] + "@twitter.com",
          user_name: auth_hash[:info][:nickname],
          password: SecureRandom::urlsafe_base64
        )
      elsif auth_hash[:provider] == "facebook"
        user = User.create!(
          provider: auth_hash[:provider],
          uid: auth_hash[:uid],
          user_email: auth_hash[:info][:name] + "@facebook.com",
          user_name: auth_hash[:info][:name],
          password: SecureRandom::urlsafe_base64
        )
      end
    end

    user
  end

  def self.find_by_creds(email, password)
    user = User.find_by(user_email: email)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
