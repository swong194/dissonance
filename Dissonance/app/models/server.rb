class Server < ApplicationRecord
  validates :name, :owner_id

  has_many :users
end
