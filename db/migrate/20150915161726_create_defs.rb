class CreateDefs < ActiveRecord::Migration
  def change
    create_table :defs do |t|
      t.string :word
      t.text :def
      t.string :ex_sentence
      t.integer :author_id
      t.string :img_url

      t.timestamps null: false
    end
  end
end
