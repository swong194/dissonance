class CreateFriends < ActiveRecord::Migration[5.1]
  def change
    create_table :friends do |t|
      t.integer :user_one, null: false
      t.integer :user_two, null: false
      t.timestamps
    end
    add_index :friends, [:user_one, :user_two], unique: true
  end
end
