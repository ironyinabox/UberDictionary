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
  ex_sentence: "Ow, he hit me with that batarang!",
  img_url: "http://thingiverse-production-new.s3.amazonaws.com/renders/7d/7b/d1/be/9d/IMG_0725[1_display_large_preview_featured.jpg"
)

d2 = u1.defins.create(
  word: 'hammers of justice',
  defin: "My fists",
  ex_sentence: "Let me introduce you to my hammers of justice!",
  img_url: "http://www.stmaartenlibrary.org/sites/default/files/imagecache/view-850/blog-photos/my_first_batman_book.jpg"
)

d3 = u2.defins.create(
  word: 'HIlarious',
  defin: "A word used to describe the sounds of suffering innocents!",
  ex_sentence: "My plan to get Batman is hilarious!"
)
