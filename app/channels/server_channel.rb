class ServerChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'server_channel'
  end

  def unsubscribed; end

end
