class Server < ApplicationRecord
  validates :name, :owner_id, presence: true
  validates :name, length: { in: 3..20 }, uniqueness: true

  has_many :server_memberships,
  foreign_key: :server_id,
  dependent: :destroy,
  class_name: 'ServerMembership'

  has_many :users,
  through: :server_memberships

  has_many :text_channels,
  class_name: 'TextChannel',
  foreign_key: :server_id,
  dependent: :destroy

  belongs_to :owner,
  class_name: 'User',
  foreign_key: :owner_id
end
