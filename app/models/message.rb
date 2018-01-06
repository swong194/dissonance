class Message < ApplicationRecord
  validates :body, :author_id, :text_channel_id, presence: true
  validates :body, length: { minimum: 1 }

  belongs_to :author,
  class_name: 'User',
  foreign_key: :author_id

  belongs_to :text_channel,
  class_name: 'TextChannel',
  foreign_key: :text_channel_id
end
