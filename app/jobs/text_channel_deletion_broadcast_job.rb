class TextChannelDeletionEventBroadcastJob < ApplicationJob
  queue_as :default

  def perform(text_channel)
  end
end
