class RemoveUniqueOnNameAddIndexOnForeignKey < ActiveRecord::Migration[5.1]
  def change
    remove_index :text_channels, :name
    add_index :text_channels, :server_id
    add_index :servers, :owner_id
    add_index :server_memberships, :server_id
  end
end
