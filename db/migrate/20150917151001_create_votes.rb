class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.boolean :upvote
      t.integer :user_id
      t.integer :defin_id

      t.timestamps null: false
    end
  end
end
