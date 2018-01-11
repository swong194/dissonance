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
Message.destroy_all
Friend.destroy_all

a = User.create!(username: 'demo', password: 'password')
b = User.create!(username: 'demo2', password: 'password')
c = User.create!(username: 'demo3', password: 'password')
a1 = User.create!(username: 'Bob', password: 'password')
a2 = User.create!(username: 'Kevin', password: 'password')
a3 = User.create!(username: 'Stuart', password: 'password')
a4 = User.create!(username: 'Gru', password: 'password')
a5 = User.create!(username: 'Sophia', password: 'password')
a6 = User.create!(username: 'Jackson', password: 'password')
a7 = User.create!(username: 'apple', password: 'password')
a8 = User.create!(username: 'pho_warrior', password: 'password')
a9 = User.create!(username: 'theMuffinsTop', password: 'password')
a10 = User.create!(username: 'the_day_we_had_no_water', password: 'password')

s1 = Server.create!(name: 'demo_server_1', owner_id: a.id)
s2 = Server.create!(name: 'demo_server_2', owner_id: b.id)
s3 = Server.create!(name: 'join_me', owner_id: c.id)
s4 = Server.create!(name: 'App Academy', owner_id: a.id)

ServerMembership.create!(user_id: a.id, server_id: s1.id)
ServerMembership.create!(user_id: a.id, server_id: s2.id)
ServerMembership.create!(user_id: a.id, server_id: s3.id)
ServerMembership.create!(user_id: a.id, server_id: s4.id)
ServerMembership.create!(user_id: b.id, server_id: s1.id)
ServerMembership.create!(user_id: c.id, server_id: s2.id)
ServerMembership.create!(user_id: a1.id, server_id: s1.id)
ServerMembership.create!(user_id: a2.id, server_id: s1.id)
ServerMembership.create!(user_id: a3.id, server_id: s1.id)
ServerMembership.create!(user_id: a4.id, server_id: s1.id)
ServerMembership.create!(user_id: a5.id, server_id: s1.id)
ServerMembership.create!(user_id: a6.id, server_id: s1.id)
ServerMembership.create!(user_id: a7.id, server_id: s1.id)
ServerMembership.create!(user_id: a8.id, server_id: s1.id)
ServerMembership.create!(user_id: a9.id, server_id: s1.id)
ServerMembership.create!(user_id: a10.id, server_id: s1.id)

ServerMembership.create!(user_id: a1.id, server_id: s4.id)
ServerMembership.create!(user_id: a2.id, server_id: s4.id)
ServerMembership.create!(user_id: a3.id, server_id: s4.id)
ServerMembership.create!(user_id: a4.id, server_id: s4.id)
ServerMembership.create!(user_id: a5.id, server_id: s4.id)
ServerMembership.create!(user_id: a6.id, server_id: s4.id)
ServerMembership.create!(user_id: a7.id, server_id: s4.id)
ServerMembership.create!(user_id: a8.id, server_id: s4.id)

t1 = TextChannel.create!(server_id: s1.id, name: 'demo_text_channel_1')
t2 = TextChannel.create!(server_id: s1.id, name: 'demo_text_channel_2')
t3 = TextChannel.create!(server_id: s1.id, name: 'demo_text_channel_3')
t4 = TextChannel.create!(server_id: s2.id, name: 'demo_text_channel_4')
t5 = TextChannel.create!(server_id: s4.id, name: 'code_talk')
t6 = TextChannel.create!(server_id: s3.id, name: 'general')
t7 = TextChannel.create!(server_id: s4.id, name: 'brooklyn4Lyfe')
t8 = TextChannel.create!(server_id: s4.id, name: 'bubble tea')
t9 = TextChannel.create!(server_id: s4.id, name: 'job search')

m1 = Message.create!(author_id: a.id, text_channel_id: t1.id, body:'hello everybody')
m2 = Message.create!(author_id: a.id, text_channel_id: t1.id, body:'sup everybody')
m3 = Message.create!(author_id: a.id, text_channel_id: t1.id, body:'moshi moshi everybody')
m4 = Message.create!(author_id: a.id, text_channel_id: t1.id, body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")
m5 = Message.create!(author_id: a1.id, text_channel_id: t1.id, body: 'Banana?')
m6 = Message.create!(author_id: a2.id, text_channel_id: t1.id, body: 'Banana!')
m7 = Message.create!(author_id: a3.id, text_channel_id: t1.id, body: 'Banana?!')
m8 = Message.create!(author_id: a1.id, text_channel_id: t1.id, body: 'Banana!!!')
m9 = Message.create!(author_id: a2.id, text_channel_id: t1.id, body: 'Banana!!!')
m9 = Message.create!(author_id: a3.id, text_channel_id: t1.id, body: 'Banana!!!')
m10 = Message.create!(author_id: a4.id, text_channel_id: t1.id, body: 'what? nonononononononononononono')

m11 = Message.create!(author_id: a1.id, text_channel_id: t5.id, body: 'CHECK IN!')
m12 = Message.create!(author_id: a2.id, text_channel_id: t5.id, body: 'THANKS')
m13 = Message.create!(author_id: a3.id, text_channel_id: t5.id, body: 'I missed morning check in')
m14 = Message.create!(author_id: a4.id, text_channel_id: t5.id, body: 'I have solo day tomorrow ;[')
m15 = Message.create!(author_id: a4.id, text_channel_id: t5.id, body: "I'm solo for recursion day")
m16 = Message.create!(author_id: a7.id, text_channel_id: t5.id, body: 'what? nonononononononononononono')
m17 = Message.create!(author_id: a2.id, text_channel_id: t5.id, body: 'what? nonononononononononononono')
m18 = Message.create!(author_id: a3.id, text_channel_id: t5.id, body: 'what? nonononononononononononono')
m19 = Message.create!(author_id: a8.id, text_channel_id: t5.id, body: 'LOL')

##Direct Message Seeding##

s4 = Server.create!(name: 'direct_message_1', owner_id: a.id, direct_message: true)
s5 = Server.create!(name: 'direct_message_2', owner_id: a.id, direct_message: true)
s6 = Server.create!(name: 'direct_message_3', owner_id: a.id, direct_message: true)

s7 = Server.create!(name: 'direct_message_4', owner_id: a.id, direct_message: true)
s8 = Server.create!(name: 'direct_message_5', owner_id: a.id, direct_message: true)
s9 = Server.create!(name: 'direct_message_6', owner_id: a.id, direct_message: true)
s10 = Server.create!(name: 'direct_message_7', owner_id: a.id, direct_message: true)
s11 = Server.create!(name: 'direct_message_8', owner_id: a.id, direct_message: true)
s12 = Server.create!(name: 'direct_message_9', owner_id: a.id, direct_message: true)

ServerMembership.create!(user_id: a.id, server_id: s4.id)
ServerMembership.create!(user_id: b.id, server_id: s4.id)
ServerMembership.create!(user_id: a.id, server_id: s5.id)
ServerMembership.create!(user_id: c.id, server_id: s5.id)
ServerMembership.create!(user_id: b.id, server_id: s6.id)
ServerMembership.create!(user_id: c.id, server_id: s6.id)

ServerMembership.create!(user_id: a1.id, server_id: s7.id)
ServerMembership.create!(user_id: a2.id, server_id: s8.id)
ServerMembership.create!(user_id: a3.id, server_id: s9.id)
ServerMembership.create!(user_id: a4.id, server_id: s10.id)
ServerMembership.create!(user_id: a5.id, server_id: s11.id)
ServerMembership.create!(user_id: a6.id, server_id: s12.id)

ServerMembership.create!(user_id: a.id, server_id: s7.id)
ServerMembership.create!(user_id: a.id, server_id: s8.id)
ServerMembership.create!(user_id: a.id, server_id: s9.id)
ServerMembership.create!(user_id: a.id, server_id: s10.id)
ServerMembership.create!(user_id: a.id, server_id: s11.id)
ServerMembership.create!(user_id: a.id, server_id: s12.id)

t5 = TextChannel.create!(server_id: s4.id, name: 'general')
t6 = TextChannel.create!(server_id: s5.id, name: 'general')
t7 = TextChannel.create!(server_id: s6.id, name: 'general')

t8 = TextChannel.create!(server_id: s7.id, name: 'general')
t9 = TextChannel.create!(server_id: s8.id, name: 'general')
t10 = TextChannel.create!(server_id: s9.id, name: 'general')
t11 = TextChannel.create!(server_id: s10.id, name: 'general')
t12 = TextChannel.create!(server_id: s11.id, name: 'general')
t13 = TextChannel.create!(server_id: s12.id, name: 'general')

m5 = Message.create!(author_id: a.id, text_channel_id: t5.id, body: 'hello direct message!')
m6 = Message.create!(author_id: b.id, text_channel_id: t5.id, body: 'hello demo!')
m7 = Message.create!(author_id: a.id, text_channel_id: t6.id, body: 'hello world!')
m8 = Message.create!(author_id: c.id, text_channel_id: t6.id, body: 'WHOA~!')
m9 = Message.create!(author_id: b.id, text_channel_id: t7.id, body: 'HEHEHE')

m10 =  Message.create!(author_id: a.id, text_channel_id: t8.id, body: 'OMGOD HELLO IM SUCH A BIG FAN')
m11 =  Message.create!(author_id: a1.id, text_channel_id: t8.id, body: 'beedo')
m12 = Message.create!(author_id: a.id, text_channel_id: t8.id, body: 'swoon~')
m13 = Message.create!(author_id: a1.id, text_channel_id: t8.id, body: 'banana?')
m14 = Message.create!(author_id: a.id, text_channel_id: t8.id, body: '-faints-')

##Friend Seeding##

f1 = Friend.create!(user_one: a.id, user_two: b.id)
f2 = Friend.create!(user_one: b.id, user_two: a.id)
f3 = Friend.create!(user_one: a.id, user_two: c.id)
f4 = Friend.create!(user_one: c.id, user_two: a.id)
f5 = Friend.create!(user_one: b.id, user_two: c.id)
f6 = Friend.create!(user_one: c.id, user_two: b.id)

f7 = Friend.create!(user_one: a.id, user_two: a1.id)
f8 = Friend.create!(user_one: a1.id, user_two: a.id)
f7 = Friend.create!(user_one: a.id, user_two: a2.id)
f7 = Friend.create!(user_one: a2.id, user_two: a.id)
f7 = Friend.create!(user_one: a.id, user_two: a3.id)
f7 = Friend.create!(user_one: a3.id, user_two: a.id)
f7 = Friend.create!(user_one: a.id, user_two: a4.id)
f7 = Friend.create!(user_one: a4.id, user_two: a.id)
f7 = Friend.create!(user_one: a.id, user_two: a7.id)
f7 = Friend.create!(user_one: a7.id, user_two: a.id)
