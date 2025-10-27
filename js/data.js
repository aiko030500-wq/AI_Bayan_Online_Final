const AI_BAYAN_DATA = {
  grammar: [
    {grade:1,title:"This is / These are",ex:["This is a cat.","These are apples."],ru:"Это / Эти"},
    {grade:1,title:"a/an & plurals",ex:["a dog → dogs","an apple → apples"],ru:"Артикли a/an и мн. число"},
    {grade:2,title:"Present Simple (to be)",ex:["I am a pupil.","They are friends."],ru:"Глагол to be"},
    {grade:2,title:"Have/Has got",ex:["She has got a bike.","We have got pens."],ru:"Иметь"},
    {grade:3,title:"Present Simple (do/does)",ex:["Do you like milk?","He does not play."],ru:"Настоящее простое"},
    {grade:3,title:"There is / There are",ex:["There is a book.","There are chairs."],ru:"Есть / имеется"},
    {grade:4,title:"Past Simple (regular)",ex:["I played football.","They visited granny."],ru:"Прошедшее простое"},
    {grade:4,title:"Past Simple (irregular)",ex:["He went home.","We saw a film."],ru:"Неправильные глаголы"},
    {grade:4,title:"Future with will",ex:["I will read tomorrow."],ru:"Будущее время (will)"}
  ],
  phonics: [
    {grade:1,title:"A–Z sounds",items:["a /æ/ apple","b /b/ ball","c /k/ cat","d /d/ dog"]},
    {grade:2,title:"Digraphs",items:["sh /ʃ/ ship","ch /tʃ/ chair","th /θ/ thumb, /ð/ this"]},
    {grade:3,title:"Long vowels",items:["a_e, i_e, o_e, u_e (cake, time, home, cube)"]},
    {grade:4,title:"R-controlled",items:["ar, er, ir, or, ur"]}
  ],
  vocabulary: {
    "1":["family","school","colors","numbers","toys","animals"],
    "2":["house","food","clothes","body","days and months"],
    "3":["hobbies","town places","transport","weather"],
    "4":["nature","technology","health","travel"]
  },
  reading: [
    {grade:1,title:"My Family",text:"I have a mum and a dad. We live in Aktau. I love my family."},
    {grade:2,title:"At School",text:"Our school is big. We have a library and a gym. I like English."},
    {grade:3,title:"A Rainy Day",text:"It is rainy today. I take an umbrella. We read books at home."},
    {grade:4,title:"Weekend Trip",text:"We will visit the sea on Saturday. I will take photos and write a diary."}
  ],
  listening: [
    {grade:1,text:"Hello! My name is Bayan. What is your name?"},
    {grade:2,text:"Listen and point to the correct picture: a cat, a dog, or a bird."},
    {grade:3,text:"Listen: I go to school at eight. What time do you go to school?"},
    {grade:4,text:"Listen: Yesterday I read a book about space. What did you read?"}
  ],
  speaking: [
    {grade:1,prompt:"Introduce yourself (name, age, class)."},
    {grade:2,prompt:"Describe your room (3–5 sentences)."},
    {grade:3,prompt:"Tell about your hobby (6–8 sentences)."},
    {grade:4,prompt:"Compare two seasons (8–10 sentences)."}
  ],
  writing: [
    {grade:1,prompt:"Write 3 sentences about your family."},
    {grade:2,prompt:"Write 5 sentences about your school day."},
    {grade:3,prompt:"Write a short email to a friend (40–60 words)."},
    {grade:4,prompt:"Write a diary entry about your weekend (70–90 words)."}
  ],
  irregularVerbs: [
    ["be","was/were","been","быть"],["have","had","had","иметь"],["go","went","gone","идти"],
    ["see","saw","seen","видеть"],["say","said","said","сказать"],["write","wrote","written","писать"]
  ],
  clockTasks: [
    {time:"03:15",q:"What time is it?",a:["quarter past three","three fifteen"]},
    {time:"07:45",q:"What time is it?",a:["quarter to eight","seven forty-five"]},
    {time:"12:30",q:"What time is it?",a:["half past twelve","twelve thirty"]},
    {time:"18:05",q:"What time is it?",a:["five past six","six oh five"]}
  ],
  dictionary: [
    {en:"apple",ru:"яблоко"}, {en:"book",ru:"книга"}, {en:"school",ru:"школа"},
    {en:"friend",ru:"друг"}, {en:"sea",ru:"море"}, {en:"teacher",ru:"учитель"},
    {en:"family",ru:"семья"}, {en:"game",ru:"игра"}, {en:"day",ru:"день"}
  ]
};
