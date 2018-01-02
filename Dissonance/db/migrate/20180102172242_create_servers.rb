class CreateServers < ActiveRecord::Migration[5.1]
  def change
    create_table :servers do |t|
      t.string :name, null: false
      t.integer :owner_id, null: false
      t.boolean :direct_message, null: false, default: false

      t.timestamps
    end
  end
end
