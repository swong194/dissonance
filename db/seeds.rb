# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Server.destroy_all
ServerMembership.destroy_all
TextChannel.destroy_all

a = User.create!(username: 'demo', password: 'password')
b = User.create!(username: 'demo2', password: 'password')
c = User.create!(username: 'demo3', password: 'password')

s1 = Server.create!(name: 'demo_server_1', owner_id: a.id)
s2 = Server.create!(name: 'demo_server_2', owner_id: b.id)
s3 = Server.create!(name: 'join_me', owner_id: c.id)

ServerMembership.create!(user_id: a.id, server_id: s1.id)
ServerMembership.create!(user_id: b.id, server_id: s1.id)
ServerMembership.create!(user_id: c.id, server_id: s2.id)

t1 = TextChannel.create!(server_id: s1.id, name: 'demo_text_channel_1')
t2 = TextChannel.create!(server_id: s1.id, name: 'demo_text_channel_2')
t3 = TextChannel.create!(server_id: s1.id, name: 'demo_text_channel_3')
t4 = TextChannel.create!(server_id: s2.id, name: 'demo_text_channel_4')

m1 = Message.create!(author_id: a.id, text_channel_id: t1.id, body:'hello everybody')
m2 = Message.create!(author_id: a.id, text_channel_id: t1.id, body:'sup everybody')
m3 = Message.create!(author_id: a.id, text_channel_id: t1.id, body:'moshi moshi everybody')
m4 = Message.create!(author_id: a.id, text_channel_id: t1.id, body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")

##Direct Message Seeding##

s4 = Server.create!(name: 'direct_message_1', owner_id: a.id, direct_message: true)
s5 = Server.create!(name: 'direct_message_2', owner_id: a.id, direct_message: true)
s6 = Server.create!(name: 'direct_message_3', owner_id: b.id, direct_message: true)

ServerMembership.create!(user_id: a.id, server_id: s4.id)
ServerMembership.create!(user_id: b.id, server_id: s4.id)
ServerMembership.create!(user_id: a.id, server_id: s5.id)
ServerMembership.create!(user_id: c.id, server_id: s5.id)
ServerMembership.create!(user_id: b.id, server_id: s6.id)
ServerMembership.create!(user_id: c.id, server_id: s6.id)

t5 = TextChannel.create!(server_id: s4.id, name: 'general')
t6 = TextChannel.create!(server_id: s5.id, name: 'general')
t7 = TextChannel.create!(server_id: s6.id, name: 'general')

m5 = Message.create!(author_id: a.id, text_channel_id: t5.id, body: 'hello direct message!')
m6 = Message.create!(author_id: b.id, text_channel_id: t5.id, body: 'hello demo!')
m7 = Message.create!(author_id: a.id, text_channel_id: t6.id, body: 'hello world!')
m8 = Message.create!(author_id: c.id, text_channel_id: t6.id, body: 'WHOA~!')
m9 = Message.create!(author_id: b.id, text_channel_id: t7.id, body: 'HEHEHE')


##Friendship Seeding##
