class AddUniqueToServerName < ActiveRecord::Migration[5.1]
  def change
    add_index :servers, :name, unique: true
  end
end
