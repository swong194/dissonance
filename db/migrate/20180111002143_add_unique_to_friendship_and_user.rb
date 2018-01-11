class AddUniqueToFriendshipAndUser < ActiveRecord::Migration[5.1]
  def change
    add_index :friend_memberships, [:friendship_id, :user_id], unique: true
  end
end
