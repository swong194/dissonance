class CreateMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
      t.text :body, null: false
      t.integer :author_id, null: false
      t.integer :text_channel_id, null: false

      t.timestamps
    end
    add_index :messages, :author_id
    add_index :messages, :text_channel_id
  end
end