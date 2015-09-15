class Def < ActiveRecord::Base
  validates :word, :def, :ex_sentence, :author_id, presence: true
  validates :def, :ex_sentence, uniqueness: true
end
