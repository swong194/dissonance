class ChangeUsersServerJoinTableToServerMemberships < ActiveRecord::Migration[5.1]
  def change
    rename_table :users_server_join_tables, :server_memberships
  end
end
