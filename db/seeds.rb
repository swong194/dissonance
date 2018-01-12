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

m20 = Message.create!(author_id: a.id, text_channel_id: t4.id, body: 'is anyone here? HELLO PLEASE TALK TO ME')
m21 = Message.create!(author_id: c.id, text_channel_id: t4.id, body: 'hello~! ^__^')

m22 = Message.create!(author_id: a7.id, text_channel_id: t7.id, body: 'hi everyone')
m23 = Message.create!(author_id: a8.id, text_channel_id: t7.id, body: 'trains never work in brookyln... ;[')
m24 = Message.create!(author_id: a4.id, text_channel_id: t7.id, body: 'im still solo on recursion day OTL')
m25 = Message.create!(author_id: c.id, text_channel_id: t7.id, body: 'but brooklyn4lyfe tho')

m26 = Message.create!(author_id: a6.id, text_channel_id: t8.id, body: 'wanna get bubble tea?')
m27 = Message.create!(author_id: a7.id, text_channel_id: t8.id, body: 'always')
m28 = Message.create!(author_id: a4.id, text_channel_id: t8.id, body: 'can i come through? Im solo for recursion day and I need something to cheer me up ;[')

m29 = Message.create!(author_id: a.id, text_channel_id: t9.id, body: 'jobs 404 not found')

###Really Long Names###

s1 = Server.create!(name: 'Recursion occurs when a thing is defined in terms of itself or of its type. Recursion is used in a variety of disciplines ranging from linguistics to logic. The most common application of recursion is in mathematics and computer science, where a function being defined is applied within its own definition. While this apparently defines an infinite number of instances (function values), it is often done in such a way that no loop or infinite chain of references can occur.', owner_id: a.id)
ServerMembership.create!(user_id: a.id, server_id: s1.id)
t77 = TextChannel.create!(name: 'Recursion is the process a procedure goes through when one of the steps of the procedure involves invoking the procedure itself. A procedure that goes through recursion is said to be recursive.', server_id: s1.id)
Message.create!(author_id: a.id, text_channel_id: t77.id, body: "Recursion is the process a procedure goes through when one of the steps of the procedure involves invoking the procedure itself. A procedure that goes through recursion is said to be 'recursive'.

To understand recursion, one must recognize the distinction between a procedure and the running of a procedure. A procedure is a set of steps based on a set of rules. The running of a procedure involves actually following the rules and performing the steps. An analogy: a procedure is like a written recipe; running a procedure is like actually preparing the meal.

Recursion is related to, but not the same as, a reference within the specification of a procedure to the execution of some other procedure. For instance, a recipe might refer to cooking vegetables, which is another procedure that in turn requires heating water, and so forth. However, a recursive procedure is where (at least) one of its steps calls for a new instance of the very same procedure, like a sourdough recipe calling for some dough left over from the last time the same recipe was made. This of course immediately creates the possibility of an endless loop; recursion can only be properly used in a definition if the step in question is skipped in certain cases so that the procedure can complete, like a sourdough recipe that also tells you how to get some starter dough in case you've never made it before. Even if properly defined, a recursive procedure is not easy for humans to perform, as it requires distinguishing the new from the old (partially executed) invocation of the procedure; this requires some administration of how far various simultaneous instances of the procedures have progressed. For this reason recursive definitions are very rare in everyday situations. An example could be the following procedure to find a way through a maze. Proceed forward until reaching either an exit or a branching point (a dead end is considered a branching point with 0 branches). If the point reached is an exit, terminate. Otherwise try each branch in turn, using the procedure recursively; if every trial fails by reaching only dead ends, return on the path that led to this branching point and report failure. Whether this actually defines a terminating procedure depends on the nature of the maze: it must not allow loops. In any case, executing the procedure requires carefully recording all currently explored branching points, and which of their branches have already been exhaustively tried.

Linguist Noam Chomsky among many others has argued that the lack of an upper bound on the number of grammatical sentences in a language, and the lack of an upper bound on grammatical sentence length (beyond practical constraints such as the time available to utter one), can be explained as the consequence of recursion in natural language.[1][2] This can be understood in terms of a recursive definition of a syntactic category, such as a sentence. A sentence can have a structure in which what follows the verb is another sentence: Dorothy thinks witches are dangerous, in which the sentence witches are dangerous occurs in the larger one. So a sentence can be defined recursively (very roughly) as something with a structure that includes a noun phrase, a verb, and optionally another sentence. This is really just a special case of the mathematical definition of recursion.

This provides a way of understanding the creativity of language—the unbounded number of grammatical sentences—because it immediately predicts that sentences can be of arbitrary length: Dorothy thinks that Toto suspects that Tin Man said that.... Of course, there are many structures apart from sentences that can be defined recursively, and therefore many ways in which a sentence can embed instances of one category inside another. Over the years, languages in general have proved amenable to this kind of analysis.

Recently, however, the generally accepted idea that recursion is an essential property of human language has been challenged by Daniel Everett on the basis of his claims about the Pirahã language. Andrew Nevins, David Pesetsky and Cilene Rodrigues are among many who have argued against this.[3] Literary self-reference can in any case be argued to be different in kind from mathematical or logical recursion.[4]

Recursion plays a crucial role not only in syntax, but also in natural language semantics. The word and, for example, can be construed as a function that can apply to sentence meanings to create new sentences, and likewise for noun phrase meanings, verb phrase meanings, and others. It can also apply to intransitive verbs, transitive verbs, or ditransitive verbs. In order to provide a single denotation for it that is suitably flexible, and is typically defined so that it can take any of these different types of meanings as arguments. This can be done by defining it for a simple case in which it combines sentences, and then defining the other cases recursively in terms of the simple one.[5]
  Traditional San Francisco sourdough is a Type I sourdough.[61] Type I sourdoughs are generally firm doughs,[60] have a pH range of 3.8 to 4.5, and are fermented in a temperature range of 20 to 30 °C (68 to 86 °F). Lactobacillus sanfranciscensis was named for its discovery in San Francisco sourdough starters, though it is not endemic to San Francisco. Lactobacillus sanfranciscensis and L. pontis often highlight a lactic-acid bacterial flora that includes L. fermentum, L. fructivorans, L. brevis, and L. paralimentarius.[47][61][62] The yeasts Saccharomyces exiguus, Candida milleri, or Candida holmii[61] usually populate sourdough cultures symbiotically with Lactobacillus sanfranciscensis.[34] The perfect yeast S. exiguus is related to the imperfect yeasts C. milleri and C. holmii. Torulopsis holmii, Torula holmii, and S. rosei are synonyms used prior to 1978. C. milleri and C. holmii are physiologically similar, but DNA testing established them as distinct. Other yeasts reported found include C. humilis, C. krusei, Pichia anomaola, C. peliculosa, P. membranifaciens, and C. valida.[59][63] There have been changes in the taxonomy of yeasts in recent decades.[59][63] L. sanfranciscensis requires maltose,[64] while C. milleri is maltase negative and thus cannot consume maltose.[16][17][18][19][20] C. milleri can grow under conditions of low pH and relatively high acetate levels, a factor contributing to sourdough flora's stability.[56]

In order to produce acetic acid, L. sanfrancisensis needs maltose and fructose.[65] Wheat dough contains abundant starch and some polyfructosanes, which enzymes degrade to 'maltose, fructose and little glucose.'[66] The terms 'fructosan, glucofructan, sucrosyl fructan, polyfructan, and polyfructosan' are all used to describe a class of compounds that are 'structurally and metabolically' related to sucrose, where 'carbon is stored as sucrose and polymers of fructose (fructans).'[67] Yeasts have the ability to free fructose from glucofructans which compose about 1–2% of the dough. Glucofructans are long strings of fructose molecules attached to a single glucose molecule. Sucrose can be considered the shortest glucofructan, with only a single fructose molecule attached.[56] When L. sanfrancisensis reduces all available fructose, it stops producing acetic acid and begins producing ethanol. If the fermenting dough gets too warm, the yeasts slow down, producing less fructose. Fructose depletion is more of a concern in doughs with lower enzymatic activities.[6]

A Belgian study of wheat and spelt doughs refreshed once every 24 hours and fermented at 30 °C (86 °F) in a laboratory environment provides insight into the three-phase evolution of first-generation-to-stable sourdough ecosystems. In the first two days of refreshment, atypical genera Enterococcus and Lactococcus bacteria highlighted the doughs. During days 2–5, sourdough-specific bacteria belonging to the genera Lactobacillus, Pediococcus, and Weissella outcompete earlier strains. Yeasts grew more slowly and reached population peaks near days 4–5. By days 5–7, 'well-adapted' Lactobacillus strains such as L. fermentum and L. plantarum had emerged. At their peaks, yeast populations were in the range of about 1–10% of the lactobacilli populations or 1:10–1:100. One characteristic of a stable dough is that the heterofermentative have outcompeted homofermentative lactobacilli.[15]

Investigations of wheat sourdough found that S. cerevisiae died off after two refreshment cycles.[56] S. cerevisiae has less tolerance to acetic acid than other sourdough yeasts.[59] Continuously maintained, stable sourdough cannot be unintentionally contaminated by S. cerevisiae.[21]

")
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
