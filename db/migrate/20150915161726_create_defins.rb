class CreateDefins < ActiveRecord::Migration
  def change
    create_table :defins do |t|
      t.string :word
      t.text :defin
      t.string :ex_sentence
      t.integer :author_id
      t.string :img_url

      t.timestamps null: false
    end
  end
end
