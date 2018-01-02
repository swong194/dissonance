class CreateUsersServerJoinTables < ActiveRecord::Migration[5.1]
  def change
    create_table :users_server_join_tables do |t|
      t.integer :user_id, null: false
      t.integer :server_id, null: false

      t.timestamps
    end
    add_index :users_server_join_tables, [:user_id, :server_id], unique: true
  end
end
