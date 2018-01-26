class TextChannelCreationEventBroadcastJob < ApplicationJob
  queue_as :default

  def perform(text_channel)
    ActionCable.server.broadcast('text_channel_channel',{id: text_channel.id, name: text_channel.name, server_id: text_channel.server_id})
  end
end
