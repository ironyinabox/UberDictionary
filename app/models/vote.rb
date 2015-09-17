class Vote < ActiveRecord::Base
  validates :user_id, :upvote, :defin_id, presence: true
  validates :user_id, uniqueness: { scope: :defin_id }

  belongs_to :user
  belongs_to :defin
end
