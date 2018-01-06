class TextChannel < ApplicationRecord
  validates :name, :server_id, presence: true
  validates :name, length: { in: 3..20 }, uniqueness: true

  has_many :messages,
  class_name: 'Message',
  foreign_key: :text_channel_id,
  dependent: :destroy

  belongs_to :server,
  class_namy: 'Server',
  foreign_key: :server_id
end
