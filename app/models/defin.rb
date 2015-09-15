class Defin < ActiveRecord::Base
  validates :word, :defin, :ex_sentence, :author_id, presence: true
  validates :defin, :ex_sentence, uniqueness: true

  belongs_to :author,
  class_name: "User",
  foreign_key: :author_id

end
