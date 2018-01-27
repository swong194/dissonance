class TextChannel < ApplicationRecord
  validates :name, :server_id, presence: true
  validates :name, length: { minimum: 3 }

  has_many :messages,
  class_name: 'Message',
  foreign_key: :text_channel_id,
  dependent: :destroy

  belongs_to :server,
  class_name: 'Server',
  foreign_key: :server_id

  has_one :owner,
  through: :server,
  source: :owner

  after_destroy do
    TextChannelDeletionEventBroadcastJob.perform_later(self)
  end

  after_create_commit do
    TextChannelCreationEventBroadcastJob.perform_later(self)
  end

  after_update_commit do
    TextChannelCreationEventBroadcastJob.perform_later(self)
  end
end
