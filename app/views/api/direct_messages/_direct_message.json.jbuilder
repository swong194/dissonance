json.extract! server, :id, :direct_message
json.textChannelId server.text_channels.ids[0]
json.user server.users.ids.reject {|id| id == current_user.id}[0]
