@text_channels.each do |text_channel|
  json.set! text_channel.id do
    json.owner_id text_channel.owner.id
    json.partial! 'api/text_channels/text_channel', text_channel: text_channel
  end
end
