# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Server.destroy_all
UsersServerJoinTable.destroy_all

a = User.create!(username: 'demo', password: 'password')
b = User.create!(username: 'demo2', password: 'password')
c = User.create!(username: 'demo3', password: 'password')

s1 = Server.create!(name: 'demo_server_1', owner: a.id)
s2 = Server.create1(name: 'demo_server_2', owner: b.id)

UsersServerJoinTable.create!(user_id: a.id, server_id: s1.id)
UsersServerJoinTable.create!(user_id: b.id, server_id: s1.id)
UsersServerJoinTable.create!(user_id: c.id, server_id: s2.id)
