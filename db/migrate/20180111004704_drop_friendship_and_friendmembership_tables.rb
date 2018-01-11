class DropFriendshipAndFriendmembershipTables < ActiveRecord::Migration[5.1]
  def change
    drop_table :friendships
    drop_table :friend_memberships
  end
end
