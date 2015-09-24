class AddAttachmentImageToDefins < ActiveRecord::Migration
  def self.up
    change_table :defins do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :defins, :image
  end
end
