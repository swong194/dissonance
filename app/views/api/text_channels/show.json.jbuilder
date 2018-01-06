json.owner_id @text_channel.owner.id
json.partial! 'api/text_channels/text_channel', text_channel: @text_channel
