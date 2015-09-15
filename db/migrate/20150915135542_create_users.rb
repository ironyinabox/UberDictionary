class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :user_name 
      t.string :password_digest
      t.string :user_email
      t.string :session_token

      t.timestamps null: false
    end
  end
end
