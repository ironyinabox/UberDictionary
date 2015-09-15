class Def < ActiveRecord::Base
  validates :word, :def, :ex_sentence, presence: true
  validates :def, :ex_sentence, uniqueness: true
end
