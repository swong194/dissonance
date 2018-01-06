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
