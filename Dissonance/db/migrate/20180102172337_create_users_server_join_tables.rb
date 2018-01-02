class CreateUsersServerJoinTables < ActiveRecord::Migration[5.1]
  def change
    create_table :users_server_join_tables do |t|
      t.integer :user_id
      t.integer :server_id

      t.timestamps
    end
  end
end
