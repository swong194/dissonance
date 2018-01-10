class ServerDeletionEventBroadcastJob < ApplicationJob
  queue_as :default
  def perform(server)
    ActionCable.server.broadcast('server_channel', serverId: server.id)
  end
end
