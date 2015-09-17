class Vote < ActiveRecord::Base
  validates :user_id, :defin_id, presence: true
  validates :upvote, inclusion: { in: [true, false] }
  validates :user_id, uniqueness: { scope: :defin_id }

  belongs_to :user
  belongs_to :defin
end
