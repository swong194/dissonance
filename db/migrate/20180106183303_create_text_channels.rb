class CreateTextChannels < ActiveRecord::Migration[5.1]
  def change
    create_table :text_channels do |t|
      t.string :name, null: false
      t.integer :server_id, null: false

      t.timestamps
    end
    add_index :text_channels, :name, unique: true
  end
end
