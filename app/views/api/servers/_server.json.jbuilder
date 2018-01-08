json.extract! server, :id, :name, :owner_id, :direct_message

json.text_channels server.text_channels.ids
