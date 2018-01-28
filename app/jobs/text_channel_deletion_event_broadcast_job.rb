class TextChannelDeletionEventBroadcastJob < ApplicationJob
  queue_as :default

  def perform(text_channel)
    if(text_channel.id)
      ActionCable.server.broadcast('text_channel_channel', {id: text_channel.id})
    else
      ActionCable.server.broadcast('text_channel_channel', {error: text_channel})
    end
  end
end
