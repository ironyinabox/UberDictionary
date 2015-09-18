# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

u1 = User.create(
  user_name: 'Batman',
  user_email: 'batman@gmail.com',
  password: 'alfred'
)
u2 = User.create(
  user_name: 'Joker',
  user_email: 'joker@gmail.com',
  password: 'batman'
)

d1 = u1.defins.create(
  word: 'batarang',
  defin: "It's like a boomerang, except with 100% more bat",
  ex_sentence: "Ow, he hit me with that batarang!"
)

d2 = u1.defins.create(
  word: 'hammers of justice',
  defin: "My fists",
  ex_sentence: "Let me introduce you to my hammers of justice!"
)

d3 = u2.defins.create(
  word: 'HIlarious',
  defin: "A word used to describe the sounds of suffering innocents!",
  ex_sentence: "My plan to get Batman is hilarious!"
)
