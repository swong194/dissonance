class Server < ApplicationRecord
  validates :name, :owner_id, presence: true

  has_many :server_memberships,
  foreign_key: :server_id,
  class_name: 'ServerMembership'

  has_many :users,
  through: :server_memberships
end
