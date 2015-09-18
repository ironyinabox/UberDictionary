class AddIndexToVotes < ActiveRecord::Migration
  def change
    add_index :votes, [:user_id, :defin_id], unique: true
  end
end
