class Message < ApplicationRecord
  validates :body, :author_id, :text_channel_id, presence: true
  validates :body, length: { minimum: 1 }
end
