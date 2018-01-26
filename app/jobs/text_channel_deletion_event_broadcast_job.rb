class TextChannelDeletionEventBroadcastJob < ApplicationJob
  queue_as :default

  def perform(text_channel)
    ActionCable.server.broadcast('text_channel_channel',{id: text_channel.id})
  end
end
