class Server < ApplicationRecord
  validates :name, :owner_id, presence: true
  validates :name, uniqueness: true

  has_many :server_memberships,
  foreign_key: :server_id,
  dependent: :destroy,
  class_name: 'ServerMembership'

  has_many :users,
  through: :server_memberships
end
