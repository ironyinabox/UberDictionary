class Defin < ActiveRecord::Base
  validates :word, :defin, :ex_sentence, :author_id, presence: true
  validates :defin, :ex_sentence, uniqueness: true

  belongs_to :author,
  class_name: "User",
  foreign_key: :author_id

  has_many :votes

  has_attached_file :image, default_url: "missing.png"

  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  include PgSearch
  pg_search_scope :search_full_text,
                  against: {word: 'A', defin: 'B', ex_sentence: 'C'},
                  using: { tsearch: { prefix: true} }

end
