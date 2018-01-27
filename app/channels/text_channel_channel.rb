class TextChannelChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'text_channel_channel'
  end

  def unsubscribed; end

  def create(text_channel_params)
    TextChannel.create(text_channel_params)
  end

  def delete(id)
    TextChannel.destroy(id)
  end

  def update(text_channel_params)
    TextChannel.update(text_channel_params)
  end
end
