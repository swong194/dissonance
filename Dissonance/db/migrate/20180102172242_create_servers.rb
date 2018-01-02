class CreateServers < ActiveRecord::Migration[5.1]
  def change
    create_table :servers do |t|
      t.string :name
      t.integer :owner_id
      t.boolean :direct_message

      t.timestamps
    end
  end
end
