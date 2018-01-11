class CreateFriendMemberships < ActiveRecord::Migration[5.1]
  def change
    create_table :friend_memberships do |t|
      t.integer :friendship_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
  end
end
