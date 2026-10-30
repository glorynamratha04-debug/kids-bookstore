import React, { useEffect, useMemo, useState } from "react";

const stories = [
  {
    id: 1, title: "The Little Sunflower", author: "Mia Willow",
    genre: "Nature", emoji: "🌻", color: "#dca83f",
    description: "A little sunflower learns that everyone has their own time to shine.",
    story: [
      "In a sunny meadow lived a tiny sunflower named Sunny. All the other flowers had opened their petals, but Sunny was still a little green bud.",
      "“Why am I so slow?” Sunny asked a friendly butterfly. “Perhaps I will never be beautiful.” The butterfly smiled and told Sunny to enjoy the sunshine, drink the rain, and be patient.",
      "Sunny listened. Every morning, she stretched towards the golden sun. One beautiful day, her petals opened wide, bright as a little piece of sunshine.",
      "The butterfly danced around her. Sunny finally understood that everyone blooms in their own time. From then on, she helped other little flowers remember to be patient, too.",
      "Moral: Be patient. Your time to shine will come."
    ]
  },
  {
    id: 2, title: "The Rabbit and the Moon", author: "Ella Fern",
    genre: "Fairytale", emoji: "🌙", color: "#8174b7",
    description: "A small rabbit tries to bring a piece of moonlight to his forest friends.",
    story: [
      "One quiet evening, a little rabbit named Pip looked up at the moon. It looked like a glowing silver cookie in the sky.",
      "“I wish my friends could have a little moonlight in their homes,” he said. Pip collected shiny pebbles, polished them with water, and placed them beside every rabbit's door.",
      "But the pebbles did not glow. Pip felt sad until a firefly landed on his nose. Soon, hundreds of fireflies gathered around the little houses, filling the forest with golden light.",
      "All the rabbits came outside to watch the magical glow. Pip laughed happily. He had not brought down the moon, but he had helped his friends make their own little stars.",
      "Moral: A little kindness can brighten many lives."
    ]
  },
  {
    id: 3, title: "The Fairy Who Lost Her Wings", author: "Lily Moon",
    genre: "Magic", emoji: "🧚", color: "#bd8bb5",
    description: "A tiny fairy discovers that magic comes from her heart, not her wings.",
    story: [
      "In a garden of bluebells lived a fairy named Fia. One windy morning, a strong gust carried her beautiful wings into the rose bushes.",
      "Without her wings, Fia could not fly. She sat beneath a daisy and cried. Then she heard a tiny voice. A ladybird was trapped beneath a fallen leaf.",
      "Fia lifted the leaf and helped the ladybird escape. Next, she guided a lost bee back to its hive and watered a thirsty little flower.",
      "As she helped the garden, golden sparkles began dancing around her. Her wings returned, brighter than ever. The garden had shown her that the kindest magic comes from within.",
      "Moral: Kindness is the most beautiful kind of magic."
    ]
  },
  {
    id: 4, title: "The Cloud That Wanted to Help", author: "Noah Skye",
    genre: "Nature", emoji: "☁️", color: "#79b8c5",
    description: "A fluffy cloud discovers how wonderful it feels to help a thirsty garden.",
    story: [
      "High above a little village floated a fluffy cloud named Coco. Coco wanted to be useful, but the other clouds were much bigger and carried more rain.",
      "One afternoon, Coco noticed a garden full of drooping flowers. The little plants were thirsty, and the ground had become dry.",
      "Coco gathered every tiny drop of water inside herself. She floated over the garden and let a gentle shower fall. Drip, drop, drip! The flowers lifted their heads and the grass turned green.",
      "A rainbow appeared across the sky. The flowers waved in the breeze, and Coco felt happier than she had ever felt. She learned that even a small cloud could make a big difference.",
      "Moral: You don't have to be big to do something wonderful."
    ]
  },
  {
    id: 5, title: "The Dragon Who Was Afraid of Fire", author: "Oliver Ember",
    genre: "Adventure", emoji: "🐉", color: "#d77f55",
    description: "A gentle little dragon finds courage in an unexpected way.",
    story: [
      "Dandy was a tiny green dragon who lived in a cave beside a waterfall. Unlike the other dragons, he was frightened of fire.",
      "One chilly evening, Dandy's friend Robin shivered beneath a tree. Dandy wanted to help but worried that his fire might be too small.",
      "He took a deep breath and blew a little puff of warmth onto some dry twigs. A tiny flame appeared. Soon, a cosy fire crackled, and Robin was warm again.",
      "Dandy smiled. He did not need to breathe huge flames like the other dragons. His little flame was enough to help someone he loved.",
      "Moral: Courage means trying even when you feel afraid."
    ]
  },
  {
    id: 6, title: "The Secret Garden Door", author: "Rose Meadow",
    genre: "Fairytale", emoji: "🌷", color: "#c9829a",
    description: "A curious child finds a magical garden hidden behind an old wooden door.",
    story: [
      "Lena found a tiny golden key beneath a pile of autumn leaves. It had a little flower carved into its handle.",
      "She followed a winding path until she reached an old wooden door covered in ivy. The key fitted perfectly. Creak! The door opened into a garden full of glowing flowers and butterflies with rainbow wings.",
      "In the middle stood a thirsty rose bush. Lena filled her little cup at the fountain and watered its roots. At once, the roses opened, releasing tiny golden lights into the air.",
      "From that day on, Lena visited the garden every morning. She cared for its plants, and the garden rewarded her with a new flower whenever she did something kind.",
      "Moral: Care and kindness help beautiful things grow."
    ]
  },
  {
    id: 7, title: "The Star in the Teacup", author: "Ivy Starlight",
    genre: "Magic", emoji: "⭐", color: "#b9a05d",
    description: "A child helps a little fallen star find its way home.",
    story: [
      "One night, Nia heard a tiny plink outside her window. In a teacup beside the roses lay a little golden star.",
      "“I fell from the sky,” whispered the star. “Now I cannot find my way home.” Nia wrapped it in a soft scarf and carried it to the highest hill.",
      "She asked the owl for help, and the owl called the fireflies. Together, they formed a sparkling path through the night.",
      "The little star floated higher and higher until it reached the sky. Before disappearing, it winked at Nia and left one tiny golden sparkle on her windowsill.",
      "Moral: Helping someone find their way is a special gift."
    ]
  },
  {
    id: 8, title: "Milo and the Magic Paintbrush", author: "Finn Applewood",
    genre: "Adventure", emoji: "🎨", color: "#d58c4e",
    description: "A little artist discovers that his paintings can bring happiness.",
    story: [
      "Milo loved painting pictures, but he thought his drawings were not as beautiful as everyone else's.",
      "One morning, he found a golden paintbrush near the old oak tree. When he painted a butterfly, it fluttered off the paper. When he painted a flower, it bloomed in the grass!",
      "Milo could have painted mountains of sweets and castles of gold. Instead, he painted fruit for hungry birds, flowers for a lonely neighbour, and colourful umbrellas for people walking in the rain.",
      "Soon, the whole village was full of colour and smiles. Milo finally understood that his best creation was not the magic painting. It was the happiness he shared.",
      "Moral: Your talents become more wonderful when you use them to help others."
    ]
  },
  {
    id: 9, title: "The Little Fox's Lantern", author: "Hazel Foxglove",
    genre: "Adventure", emoji: "🦊", color: "#ce7948",
    description: "A little fox lights the way home for friends lost in the woods.",
    story: [
      "Felix the fox found a small lantern hanging from a branch. Inside it glowed a warm golden light.",
      "That evening, a thick mist covered the forest. A family of hedgehogs could not find their burrow, and two baby rabbits had lost their way.",
      "Felix lifted his lantern and walked slowly through the trees. He guided the hedgehogs to their home and showed the rabbits the path beside the stream.",
      "When the mist finally lifted, all the animals gathered beneath the old oak tree. They gave Felix a crown made of leaves and tiny flowers. He wore it proudly, but he loved their grateful smiles even more.",
      "Moral: Be a light for someone who needs help."
    ]
  },
  {
    id: 10, title: "The Mermaid's Garden", author: "Marina Blue",
    genre: "Fairytale", emoji: "🧜‍♀️", color: "#59a9ad",
    description: "A young mermaid learns to care for a garden beneath the sea.",
    story: [
      "Coral was a young mermaid who loved collecting seashells. One day, she discovered a garden where the sea flowers had lost their colours.",
      "An old turtle told her that the garden needed clean water and gentle care. Coral invited the fish to help. They cleared away the rubbish and moved the heavy stones.",
      "Soon, the sea flowers began to glow pink, purple, and blue. Little seahorses danced between the leaves, and the water shimmered like a rainbow.",
      "Coral planted a tiny pearl beside the garden path. It became a glowing lamp, reminding everyone to keep their beautiful ocean home clean.",
      "Moral: Protect nature, and nature will continue to amaze you."
    ]
  },
  {
    id: 11, title: "The Sleepy Little Dragon", author: "Poppy Pine",
    genre: "Fantasy", emoji: "💤", color: "#8a9e76",
    description: "A sleepy dragon learns that rest is part of growing strong.",
    story: [
      "Doodle was a little dragon who wanted to fly to the top of the tallest mountain. Every morning, he flapped his wings as hard as he could, but he always grew tired.",
      "He watched the birds fly easily and wondered what he was doing wrong. A wise old owl told him to practise a little, eat well, and get enough sleep.",
      "Doodle followed the advice. He rested beneath a warm blanket of leaves, ate sweet berries, and practised flying each day.",
      "One bright morning, he rose above the treetops and glided all the way to the mountain meadow. He discovered that looking after himself had helped him reach his dream.",
      "Moral: Rest, patience, and practice help you grow."
    ]
  },
  {
    id: 12, title: "The Brave Little Seed", author: "Willow Green",
    genre: "Nature", emoji: "🌱", color: "#78a56b",
    description: "A tiny seed finds the courage to grow through the earth.",
    story: [
      "Deep beneath the soil lay a little seed named Pip. Above him, the world sounded enormous. He was afraid to leave his safe, dark home.",
      "One day, warm sunshine touched the earth. A gentle rain followed. Pip felt something inside him begin to change. Slowly, he pushed a tiny green shoot towards the light.",
      "The soil was heavy, but Pip kept growing. At last, his little leaves appeared above the ground. A child passing by smiled and watered him.",
      "Months later, Pip had become a strong apple tree. Birds rested on his branches, children played in his shade, and sweet apples grew in the sunshine.",
      "Moral: Small beginnings can lead to wonderful things."
    ]
  },
  {
    id: 13, title: "The Butterfly's Wish", author: "Bella Bloom",
    genre: "Fairytale", emoji: "🦋", color: "#b68ac1",
    description: "A butterfly wishes to make the whole meadow smile.",
    story: [
      "Bella was a butterfly with bright purple wings. Every morning, she wished for one thing: to make someone smile.",
      "She visited a lonely snail and sat beside him while he watched the sunrise. She showed a baby bird where to find juicy berries. Then she helped a tired bee find a field of flowers.",
      "By evening, Bella felt sleepy. She landed on a daisy and wondered whether she had done enough.",
      "Suddenly, the animals gathered around her. The snail brought a dewdrop, the bird sang a song, and the bee gave her a flower. Bella's own wish had made her the happiest butterfly in the meadow.",
      "Moral: Happiness grows when we share it."
    ]
  },
  {
    id: 14, title: "The Moon's Little Gardener", author: "Luna Petal",
    genre: "Magic", emoji: "🌙", color: "#777db1",
    description: "A child plants a garden that blooms only beneath moonlight.",
    story: [
      "Every night, a little girl named Mira watched the moon from her bedroom window. One evening, a silver seed landed on her windowsill.",
      "Mira planted it in a pot and watered it carefully. Under the moonlight, a tiny silver stem appeared. Each night, it grew a little taller until it became a beautiful plant with glowing flowers.",
      "Mira noticed that the flowers brightened whenever someone felt sad. She placed the pot near her grandmother's chair, and its soft glow made the room feel warm and peaceful.",
      "Soon, Mira grew more moon flowers and shared them with her neighbours. Their homes glimmered gently beneath the night sky.",
      "Moral: Even a small act of care can bring comfort."
    ]
  },
  {
    id: 15, title: "The Deer and the Rainbow", author: "Robin Meadow",
    genre: "Nature", emoji: "🦌", color: "#a8a76a",
    description: "A young deer follows a rainbow to help a friend.",
    story: [
      "A young deer named Daisy saw a rainbow stretching across the forest. She had heard that a rainbow led to wonderful places, so she followed its colours.",
      "Along the path, she found a little bird whose wing had become tangled in a vine. Daisy carefully called a passing rabbit, and together they freed the bird.",
      "The bird chirped happily and flew up to a branch. When Daisy looked again, the rainbow seemed to lead towards a sunny clearing filled with wildflowers.",
      "Daisy sat among the flowers and watched the colours fade into the sky. She had not found a pot of gold, but she had found something even better: a new friend.",
      "Moral: The best treasures are often the friends we make."
    ]
  },
  {
    id: 16, title: "The Little Owl's Big Question", author: "Oliver Nightingale",
    genre: "Adventure", emoji: "🦉", color: "#8c795b",
    description: "A curious owl discovers that asking questions is a wonderful way to learn.",
    story: [
      "Ollie the owl had one hundred questions. Why did the river sparkle? Why did leaves fall? Where did the sun go at night?",
      "Some animals told him to stop asking so many questions. But Ollie's grandmother said, “A curious mind is a wonderful thing. Keep looking, listening, and learning.”",
      "Ollie watched the river and discovered that sunlight made it glitter. He observed the trees through autumn and learned why their leaves fell. He watched the sunset and understood that the sun was still shining somewhere else.",
      "Soon, all the young animals came to Ollie whenever they wanted to discover something new. And Ollie? He still had a hundred questions—and loved every one of them.",
      "Moral: Never stop being curious and learning."
    ]
  },
  {
    id: 17, title: "The Cup of Golden Rain", author: "Amelia Sunbeam",
    genre: "Fantasy", emoji: "🌦️", color: "#d4a45b",
    description: "A magical cup teaches a little girl that sharing brings joy.",
    story: [
      "Anya found a tiny golden cup beside a garden fountain. An old fairy told her that it could catch one special drop of sunshine every morning.",
      "Each time Anya filled the cup, it glowed warmly. At first, she kept it beside her bed and admired its light all by herself.",
      "One cold morning, her neighbour's little kitten shivered outside. Anya carried the cup to the kitten. Its warm glow made a cosy spot in the sunshine.",
      "Then Anya shared the cup's light with a tired gardener and a little bird with a wet wing. The cup never became empty. The more kindness she shared, the brighter it seemed to shine.",
      "Moral: Sharing makes happiness grow."
    ]
  },
  {
    id: 18, title: "The Castle in the Clouds", author: "Evelyn Skye",
    genre: "Fairytale", emoji: "🏰", color: "#8f9fc3",
    description: "A little girl discovers a castle where forgotten dreams are kept safe.",
    story: [
      "One sunny afternoon, Emma watched the clouds drift across the sky. One cloud looked exactly like a castle, complete with towers and tiny windows.",
      "A golden bird appeared at her window and invited her to follow it. Emma climbed a hill, stepped into a swirl of mist, and found herself at the castle gates.",
      "Inside, shelves held little glowing bubbles. Each bubble contained a dream someone had forgotten: learning to paint, planting a garden, or making a new friend.",
      "Emma carried a glowing bubble home. It reminded her of the garden she had always wanted to grow. The next morning, she planted her first seeds.",
      "Moral: It is never too late to begin a dream."
    ]
  },
  {
    id: 19, title: "The Hedgehog's Little Gift", author: "Hazel Bramble",
    genre: "Friendship", emoji: "🦔", color: "#b58b68",
    description: "A shy hedgehog learns that a thoughtful gift can say a thousand words.",
    story: [
      "Henry the hedgehog was shy. He wanted to make friends with the other forest animals, but he never knew what to say.",
      "One autumn day, he collected the prettiest fallen leaves. He arranged them into a little heart and left it beside the rabbit family's burrow.",
      "The next morning, a tiny carrot lay outside Henry's home. A note beside it read, “Thank you for making our day brighter.” Henry smiled.",
      "He began leaving little leaf pictures for his neighbours. Soon, the animals invited him to their autumn picnic. Henry discovered that he did not need to be the loudest animal in the forest to make wonderful friends.",
      "Moral: Thoughtful little gestures can build beautiful friendships."
    ]
  },
  {
    id: 20, title: "The Forest's Birthday Party", author: "Mia Willow",
    genre: "Friendship", emoji: "🎂", color: "#b99b52",
    description: "Forest friends work together to give their oldest tree a special birthday.",
    story: [
      "In the middle of the forest stood an enormous oak tree. Its branches had sheltered animals for hundreds of years, but nobody knew its birthday.",
      "A squirrel suggested a party. The rabbits gathered berries, the birds decorated the branches with flowers, and the bees made sweet honey cakes. Even the shy hedgehog brought a little leaf crown.",
      "When the sun began to set, all the animals gathered around the oak. They sang a happy birthday song, and fireflies lit the branches like tiny golden candles.",
      "The old tree rustled its leaves in the breeze. A shower of acorns fell gently to the ground. The animals planted them together, knowing that new trees would grow for future forest friends.",
      "Moral: Working together makes special moments even more beautiful."
    ]
  }
];

const genres = ["All", ...new Set(stories.map(s => s.genre))];

const css = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&family=Great+Vibes&display=swap');

:root {
  --cream: #fffdf3;
  --green: #35583a;
  --gold: #c99b3d;
  --text: #52674a;
  --muted: #899078;
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: 'DM Sans', sans-serif;
  color: var(--text);
  background: var(--cream);
}
button, input { font: inherit; }
button { cursor: pointer; }
button:focus-visible, input:focus-visible {
  outline: 2px solid #c99b3d;
  outline-offset: 3px;
}
button:disabled { opacity: .4; cursor: not-allowed; }

.app {
  min-height: 100vh;
  overflow: hidden;
  background: linear-gradient(180deg,#fffef7,#fff8e6 55%,#fffdf3);
}
.header {
  position: sticky;
  top: 0;
  z-index: 30;
  min-height: 74px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 12px 6%;
  background: #fffdf0ed;
  border-bottom: 1px solid #ead8a4;
  box-shadow: 0 4px 20px #79602b0b;
  backdrop-filter: blur(15px);
}
.brand {
  border: 0;
  background: none;
  display: flex;
  align-items: center;
  gap: 10px;
  font: 600 30px 'Cormorant Garamond',serif;
  color: #826021;
  white-space: nowrap;
}
.brand-mark {
  font-size: 34px;
  color: #d4a638;
  text-shadow: 0 0 18px #f1d46d;
  animation: twinkle 3s infinite;
}
.nav { display:flex; gap:24px; align-items:center; }
.nav button {
  border: 0;
  background: none;
  padding: 10px 0;
  color: #777459;
  font-size: 12px;
  transition: color .2s;
}
.nav button:hover,.nav button.active {
  color: #986c1d;
  border-bottom: 2px solid #d7ae4c;
}
.gold-btn,.outline-btn {
  border-radius: 5px;
  padding: 12px 18px;
  font-size: 12px;
  font-weight: 600;
  transition: transform .25s,box-shadow .25s;
}
.gold-btn {
  border: 1px solid #d6b35f;
  color: #57451f;
  background: linear-gradient(130deg,#fff1b6,#e5c064,#fff0b2);
  box-shadow: 0 5px 18px #ad812326;
}
.gold-btn:hover,.outline-btn:hover { transform: translateY(-2px); }
.gold-btn:hover { box-shadow: 0 8px 24px #ad81234a; }
.outline-btn {
  border: 1px solid #d6bd7a;
  color: #79632e;
  background: #fffdf6;
}
.hero {
  position: relative;
  isolation: isolate;
  min-height: 600px;
  padding: 66px 8%;
  display: grid;
  grid-template-columns: 1.05fr .95fr;
  align-items: center;
  gap: 35px;
  overflow: hidden;
  background:
    radial-gradient(ellipse at 75% 12%,#fff5b9 0%,transparent 37%),
    linear-gradient(115deg,#fff9e9,#f9edc9 53%,#dce8c6);
}
.hero:before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(180deg,transparent 60%,#7a9b4b18);
}
.sunbeam {
  position: absolute;
  inset: -30%;
  z-index: -1;
  pointer-events: none;
  background: repeating-conic-gradient(from 210deg at 73% 26%,#fff6c900 0deg,#fff9d650 3deg,#fff4c200 9deg);
  animation: beams 42s linear infinite;
  opacity: .8;
}
.hero-copy { max-width: 540px; }
.eyebrow {
  color: #a78338;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
}
.hero h1 {
  font: 500 clamp(45px,5.5vw,77px)/1 'Cormorant Garamond',serif;
  color: #31573a;
  margin: 22px 0;
}
.hero h1 em {
  display: inline-block;
  font: 400 1.15em 'Great Vibes',cursive;
  color: #bc9137;
}
.hero-copy>p {
  max-width: 450px;
  font-size: 13px;
  line-height: 2;
  color: #727d62;
}
.hero-actions { display:flex; gap:12px; flex-wrap:wrap; margin-top:25px; }
.hero-foot {
  font-size: 9px!important;
  letter-spacing: 1.4px;
  color: #a48a52!important;
  margin-top: 25px;
}
.landscape {
  min-height: 370px;
  position: relative;
  display:flex;
  align-items:center;
  justify-content:center;
}
.landscape-glow {
  position:absolute;
  width:330px;
  height:330px;
  border-radius:50%;
  background:#fff1b9;
  filter:blur(30px);
  animation: glow 5s ease-in-out infinite alternate;
}
.landscape-art {
  position:relative;
  width:min(100%,450px);
  height:355px;
  border-radius:48% 48% 9px 9px;
  overflow:hidden;
  background:linear-gradient(#b7d9dc 0%,#f4e8a8 42%,#a4c48d 72%,#527e4d 100%);
  border:2px solid #d8b967;
  box-shadow:0 15px 35px #80601c22,inset 0 0 40px #fff5d0;
}
.landscape-art:before {
  content:"";
  position:absolute;
  left:-15%;
  right:-15%;
  bottom:-16%;
  height:55%;
  border-radius:50% 50% 0 0;
  background:linear-gradient(145deg,#8fb66d,#356643 80%);
  box-shadow:0 -25px 50px #dce7a788;
}
.sun-disc {
  position:absolute;
  top:11%;
  left:44%;
  width:76px;
  height:76px;
  border-radius:50%;
  background:#fff5b1;
  box-shadow:0 0 35px 15px #ffed9b8a,0 0 85px #ffeda277;
  animation: glow 4s ease-in-out infinite alternate;
}
.mountain {
  position:absolute;
  bottom:25%;
  width:0;height:0;
  border-left:120px solid transparent;
  border-right:120px solid transparent;
  border-bottom:190px solid #8eaf94;
}
.mountain.one { left:-5%; transform:scale(.8); }
.mountain.two { right:-10%; transform:scale(.95); border-bottom-color:#709a79; }
.mountain.three { left:24%; transform:scale(.7); border-bottom-color:#b4c9a4; }
.mountain:after {
  content:"";
  position:absolute;
  left:-25px;top:30px;
  border-left:25px solid transparent;
  border-right:25px solid transparent;
  border-bottom:45px solid #fff9dd;
}
.castle {
  position:absolute;
  z-index:2;
  bottom:35%;
  left:50%;
  transform:translateX(-50%);
  font-size:90px;
  filter:drop-shadow(0 7px 5px #534b2c35);
  animation: float 6s ease-in-out infinite;
}
.tree {
  position:absolute;
  z-index:3;
  bottom:12%;
  font-size:65px;
  filter:drop-shadow(0 5px 4px #284b2944);
}
.tree.left { left:2%; }
.tree.right { right:0; font-size:80px; }
.water {
  position:absolute;
  z-index:1;
  bottom:8%;
  left:22%;
  width:18px;
  height:85px;
  border-radius:50%;
  background:linear-gradient(90deg,#bce5e8,#fff,#b4dbdf);
  filter:blur(1px);
}
.floating {
  position:absolute;
  z-index:5;
  animation: float 5s ease-in-out infinite;
  filter:drop-shadow(0 0 7px #fff4b8);
}
.f1 { top:13%; left:14%; }
.f2 { right:13%; top:21%; animation-delay:-2s; }
.f3 { left:28%; bottom:25%; animation-delay:-1s; }
.f4 { right:24%; bottom:19%; animation-delay:-3s; }
.f5 { left:47%; top:42%; animation-delay:-2.5s; }
.sign {
  position:absolute;
  z-index:6;
  right:-1%;
  top:10%;
  background:linear-gradient(140deg,#fff8d7,#e8c36c,#fff0b8);
  border:2px solid #fff1b1;
  outline:1px solid #b78d3c;
  outline-offset:-7px;
  border-radius:48% 48% 8px 8px;
  padding:27px 17px 19px;
  box-shadow:0 0 25px #ffe9a288;
  color:#79591e;
  text-align:center;
  font:500 17px/1.35 'Cormorant Garamond',serif;
}
.sign span { display:block;font-size:25px;margin-top:8px; }
.sparkle {
  position:absolute;
  color:#e3b442;
  text-shadow:0 0 12px #f8df7d;
  pointer-events:none;
  animation:twinkle 2.4s infinite;
}
.sparkle-field {
  position:absolute;
  inset:0;
  pointer-events:none;
  overflow:hidden;
}
.sparkle-dot {
  position:absolute;
  color:#cda342;
  text-shadow:0 0 12px #ffdf70;
  animation: rise 5s ease-in-out infinite,twinkle 2.5s infinite;
}
.genre-strip {
  display:flex;
  gap:9px;
  overflow-x:auto;
  padding:17px 6%;
  background:linear-gradient(90deg,#fff5d2,#fffdf3,#f7e9c1);
  border-top:1px solid #e9d18a;
  border-bottom:1px solid #e5cc81;
  scrollbar-width:thin;
}
.genre-chip {
  white-space:nowrap;
  border:1px solid #e3cd91;
  border-radius:25px;
  background:#fffdf6;
  padding:10px 16px;
  color:#90702e;
  font-size:11px;
  transition:all .2s;
}
.genre-chip:hover { background:#fff2c6; }
.genre-chip.selected {
  background:linear-gradient(135deg,#dfbd67,#ad8134);
  color:#fff9e8;
  border-color:#c49a43;
}
.section { padding:65px 7%; }
.section-heading {
  display:flex;
  justify-content:space-between;
  align-items:end;
  gap:15px;
  margin-bottom:30px;
}
.section-heading h2 {
  font:500 clamp(30px,4vw,46px)/1.08 'Cormorant Garamond',serif;
  color:#31573a;
  margin:9px 0;
}
.section-heading p { font-size:12px;line-height:1.8;color:#818974;margin:0; }
.book-grid {
  display:grid;
  grid-template-columns:repeat(4,minmax(0,1fr));
  gap:28px 21px;
}
.book-card { min-width:0;cursor:pointer;position:relative;transition:transform .3s; }
.book-card:hover { transform:translateY(-6px); }
.cover {
  position:relative;
  height:250px;
  border-radius:5px 9px 9px 5px;
  border:1px solid #d3b365;
  box-shadow:inset 5px 0 #ffffff45,5px 8px 15px #49391c1b;
  display:flex;
  align-items:center;
  justify-content:center;
  overflow:hidden;
  isolation:isolate;
}
.cover:before {
  content:"";
  position:absolute;
  inset:9px;
  border:1px solid #f7e8b8b8;
  border-radius:3px;
  z-index:-1;
}
.cover:after {
  content:"✧  ❋  ✧";
  position:absolute;
  bottom:17px;
  color:#fff0c0;
  font-size:12px;
  letter-spacing:5px;
}
.cover::selection { background:transparent; }
.cover-icon {
  font-size:67px;
  filter:drop-shadow(0 8px 6px #17231940);
  z-index:1;
  transition:transform .35s;
}
.book-card:hover .cover-icon { transform:scale(1.13) rotate(-5deg); }
.cover-title {
  position:absolute;
  z-index:2;
  top:30px;
  left:12px;
  right:12px;
  text-align:center;
  font:600 20px/1.12 'Cormorant Garamond',serif;
  color:#fff3c8;
  text-shadow:0 2px 8px #0006;
}
.cover-genre {
  position:absolute;
  bottom:44px;
  z-index:2;
  color:#f9e8bd;
  font-size:8px;
  letter-spacing:2px;
  text-transform:uppercase;
}
.save-btn {
  position:absolute;
  top:12px;
  right:12px;
  z-index:5;
  border:1px solid #e8d394;
  border-radius:50%;
  width:34px;
  height:34px;
  background:#fff9e9ee;
  color:#9a7029;
  font-size:17px;
  transition:transform .2s;
}
.save-btn:hover { transform:scale(1.1); }
.book-info { padding:14px 2px; }
.book-info h3 {
  font:600 23px/1.1 'Cormorant Garamond',serif;
  color:#31573a;
  margin:0 0 7px;
}
.author {
  font-size:9px;
  letter-spacing:1px;
  color:#aa8744;
  text-transform:uppercase;
}
.book-info p { font-size:11px;line-height:1.8;color:#838a78;margin:10px 0; }
.read-link {
  background:none;
  border:0;
  color:#99752f;
  padding:5px 0;
  font-size:11px;
}
.read-link:hover { text-decoration:underline; }
.shelf-section {
  padding:62px 7% 78px;
  background:linear-gradient(180deg,#faf0d5,#ebd49f 70%,#d8b975);
  position:relative;
}
.shelf-section:before {
  content:"✧ · ✦ · ✧ · ✦ · ✧";
  display:block;
  text-align:center;
  color:#bd9140;
  letter-spacing:12px;
  margin-bottom:25px;
}
.wood-shelf {
  position:relative;
  display:grid;
  grid-template-columns:repeat(10,minmax(0,1fr));
  gap:8px;
  align-items:end;
  padding:0 13px 16px;
  background:linear-gradient(180deg,transparent 91%,#8b5c2b 91%,#e1bd6b 95%,#8d602d 100%);
  border-bottom:12px solid #b1803d;
  box-shadow:0 13px 18px #6e461c30;
}
.spine {
  min-width:0;
  height:170px;
  border:1px solid #dfbd70;
  border-radius:3px 5px 0 0;
  color:#f7e9b8;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;
  padding:13px 4px 10px;
  box-shadow:inset 4px 0 #fff2b71c,3px 0 5px #38230e26;
  overflow:hidden;
  transition:transform .25s;
}
.spine:hover { transform:translateY(-8px); }
.spine:nth-child(3n) { height:195px; }
.spine:nth-child(4n) { height:150px; }
.spine span { font-size:25px; }
.spine strong {
  font:500 14px 'Cormorant Garamond',serif;
  writing-mode:vertical-rl;
  max-height:115px;
  overflow:hidden;
}
.quote-band {
  position:relative;
  text-align:center;
  padding:68px 8%;
  background:radial-gradient(ellipse at center,#71905c,#36583a 80%);
  color:#f9e9b6;
  overflow:hidden;
}
.quote-band blockquote {
  max-width:720px;
  margin:20px auto;
  font:italic 31px/1.4 'Cormorant Garamond',serif;
}
.quote-band p { font-size:9px;letter-spacing:3px;color:#e2cc8b; }
.footer {
  display:flex;
  justify-content:space-between;
  gap:12px;
  flex-wrap:wrap;
  padding:27px 6%;
  font-size:10px;
  color:#918768;
  background:#fffbed;
  border-top:1px solid #ead9a5;
}
.inner {
  min-height:75vh;
  padding:60px 7%;
  background:
    radial-gradient(ellipse at top right,#f5e6bc,transparent 43%),
    linear-gradient(#fffdf4,#fff9e8);
}
.inner h1 {
  font:500 clamp(38px,5vw,58px) 'Cormorant Garamond',serif;
  color:#31573a;
  margin:12px 0;
}
.inner>p { font-size:13px;line-height:1.9;color:#7a836c; }
.search-box {
  display:flex;
  align-items:center;
  gap:10px;
  max-width:500px;
  background:#fffdf8;
  border:1px solid #dfc57d;
  border-radius:28px;
  padding:0 18px;
  margin:25px 0;
  box-shadow:0 4px 15px #94712a0d;
}
.search-box input {
  width:100%;
  padding:14px 0;
  border:0;
  outline:0;
  background:transparent;
  font-size:12px;
  color:#39533b;
}
.empty { text-align:center;padding:75px 20px;color:#808975; }
.empty span { font-size:48px; }
.empty h3 { font:32px 'Cormorant Garamond',serif;color:#31543a; }
.about-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:35px; }
.about-card {
  padding:28px;
  background:#fffdf6;
  border:1px solid #e6d39c;
  border-radius:8px;
  box-shadow:0 7px 20px #84631a0a;
  transition:transform .3s;
}
.about-card:hover { transform:translateY(-5px); }
.about-card span { font-size:35px; }
.about-card h3 { font:26px 'Cormorant Garamond',serif;color:#31543a; }
.about-card p { font-size:12px;line-height:1.9;color:#7d8775; }
.reader {
  position:fixed;
  inset:0;
  z-index:100;
  overflow-y:auto;
  color:#51482e;
  background:
    radial-gradient(ellipse at 50% 0%,#fff1bd,#fffdf1 65%),
    #fffdf4;
}
.reader-glow {
  position:fixed;
  inset:0;
  pointer-events:none;
  background:repeating-conic-gradient(from 210deg at 50% 0%,#fff4c200 0deg,#f8df9d25 4deg,#fff4c200 10deg);
  animation:beams 50s linear infinite;
}
.reader-close {
  position:fixed;
  z-index:4;
  top:18px;
  left:20px;
  border:1px solid #d4b45f;
  background:#fff9e9e8;
  color:#78602a;
  border-radius:25px;
  padding:11px 16px;
  font-size:11px;
}
.reader-top {
  position:relative;
  z-index:2;
  text-align:center;
  padding:28px 110px 20px;
  color:#b08b3d;
  letter-spacing:3px;
  font-size:9px;
}
.reader-content {
  position:relative;
  z-index:2;
  max-width:780px;
  padding:20px 28px 70px;
  margin:auto;
  display:flex;
  flex-direction:column;
  align-items:center;
}
.reader-ornament { color:#d8b75c;font-size:29px;margin:18px; }
.reader-content h1 {
  text-align:center;
  font:500 clamp(40px,6vw,68px)/1.05 'Cormorant Garamond',serif;
  color:#31573a;
  margin:4px 0 10px;
}
.reader-byline {
  font-size:10px;
  color:#a78a4e;
  letter-spacing:2px;
  text-transform:uppercase;
  text-align:center;
}
.reader-rule {
  width:100%;
  display:flex;
  align-items:center;
  gap:15px;
  margin:27px 0;
  color:#d8b65d;
}
.reader-rule:before,.reader-rule:after {
  content:"";
  height:1px;
  background:#d0b05c70;
  flex:1;
}
.story-text { width:100%; }
.story-text p {
  font:400 clamp(20px,2.3vw,25px)/1.9 'Cormorant Garamond',serif;
  color:#526348;
  margin:0 0 23px;
}
.story-text p:first-child:first-letter {
  font-size:56px;
  float:left;
  line-height:.8;
  padding:10px 9px 0 0;
  color:#c59a43;
}
.story-end {
  text-align:center;
  font:italic 23px 'Cormorant Garamond',serif;
  color:#b08b3d;
  margin:15px 0 30px;
}
.toast {
  position:fixed;
  z-index:120;
  bottom:22px;
  left:50%;
  transform:translateX(-50%);
  background:#35583a;
  color:#fff1c6;
  padding:13px 22px;
  border:1px solid #d4b258;
  border-radius:6px;
  font-size:12px;
  box-shadow:0 8px 25px #0002;
  max-width:90vw;
  text-align:center;
}
@keyframes float {
  0%,100% { transform:translateY(0) rotate(-5deg); }
  50% { transform:translateY(-13px) rotate(5deg); }
}
@keyframes twinkle {
  0%,100% { opacity:.45;transform:scale(.8); }
  50% { opacity:1;transform:scale(1.18); }
}
@keyframes beams { to { transform:rotate(360deg); } }
@keyframes glow {
  from { opacity:.65;transform:scale(.96); }
  to { opacity:1;transform:scale(1.05); }
}
@keyframes rise {
  0%,100% { transform:translateY(5px); }
  50% { transform:translateY(-17px); }
}
@media(max-width:1000px) {
  .book-grid { grid-template-columns:repeat(3,minmax(0,1fr)); }
  .wood-shelf { grid-template-columns:repeat(5,minmax(0,1fr)); }
  .hero { padding:55px 6%; }
  .nav { gap:14px; }
}
@media(max-width:680px) {
  .header { padding:10px 4%;gap:8px;flex-wrap:wrap; }
  .brand { font-size:25px; }
  .nav { order:3;width:100%;justify-content:center;gap:20px; }
  .nav button { font-size:11px; }
  .header>.gold-btn { padding:10px 12px; }
  .hero {
    grid-template-columns:1fr;
    text-align:center;
    padding:43px 5% 22px;
    gap:5px;
  }
  .hero-copy { margin:auto; }
  .hero-copy>p { margin-left:auto;margin-right:auto; }
  .hero-actions { justify-content:center; }
  .landscape { min-height:300px; }
  .landscape-art { height:290px;max-width:370px; }
  .landscape-glow { width:260px;height:260px; }
  .sign { right:0;top:7%;padding:20px 12px 15px;font-size:14px; }
  .castle { font-size:72px; }
  .section,.shelf-section { padding:43px 5%; }
  .book-grid { grid-template-columns:repeat(2,minmax(0,1fr));gap:18px 13px; }
  .cover { height:195px; }
  .cover-icon { font-size:52px; }
  .cover-title { font-size:17px;top:25px; }
  .book-info h3 { font-size:21px; }
  .wood-shelf { grid-template-columns:repeat(4,minmax(0,1fr)); }
  .spine { height:150px; }
  .spine:nth-child(3n) { height:170px; }
  .about-grid { grid-template-columns:1fr; }
  .section-heading { align-items:start; }
  .section-heading>.outline-btn { flex-shrink:0; }
  .quote-band blockquote { font-size:25px; }
  .inner { padding:45px 5%; }
  .reader-content { padding:18px 22px 45px; }
  .reader-top { padding:24px 15px 20px 100px;text-align:right;font-size:8px; }
  .reader-close { top:12px;left:10px;padding:9px 11px; }
  .footer { padding:23px 5%; }
}
@media(prefers-reduced-motion:reduce) {
  *,*::before,*::after {
    animation-duration:.01ms!important;
    animation-iteration-count:1!important;
    scroll-behavior:auto!important;
    transition-duration:.01ms!important;
  }
}
  html,
body,
#root,
.app,
.app * {
  cursor: none !important;
}
`;

function App() {
  const [page, setPage] = useState("Home");
  const [genre, setGenre] = useState("All");
  const [search, setSearch] = useState("");
  const [saved, setSaved] = useState(() => {
    try {
      const value = JSON.parse(localStorage.getItem("everafter-shelf") || "[]");
      return Array.isArray(value) ? value : [];
    } catch {
      return [];
    }
  });
  const [activeBook, setActiveBook] = useState(null);
  const [toast, setToast] = useState("");
  
  useEffect(() => {
  const style = document.createElement("style");

  style.textContent = `
    .golden-cursor {
      position: fixed;
      z-index: 100000;
      pointer-events: none;
      color: #f8cd58;
      font-size: 34px;
      line-height: 1;
      transform: translate(-50%, -50%);
      text-shadow:
        0 0 5px #fff8cf,
        0 0 12px #f5d66d,
        0 0 25px #e6b943,
        0 0 40px #ffdf70;
      filter: drop-shadow(0 0 5px #ffe89b);
    }

    .golden-trail {
      position: fixed;
      z-index: 99999;
      pointer-events: none;
      color: #f8cd58;
      font-size: 22px;
      text-shadow:
        0 0 5px #fff8cf,
        0 0 12px #f5d66d,
        0 0 35px #e6b943,
        0 0 35px #ffdf70;
      animation: goldenFade 850ms ease-out forwards;
      user-select: none;
    }

    @keyframes goldenFade {
      0% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.3) rotate(0deg);
      }

      20% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1.2) rotate(45deg);
      }

      100% {
        opacity: 0;
        transform: translate(-50%, -100%) scale(0.2) rotate(180deg);
      }
    }

    @media (hover: none), (prefers-reduced-motion: reduce) {
      .golden-trail,
      .golden-cursor {
        display: none !important;
      }
    }
  `;

  document.head.appendChild(style);

  // Main golden star cursor
  const cursor = document.createElement("span");
  cursor.className = "golden-cursor";
  cursor.textContent = "✦";
  document.body.appendChild(cursor);

  let lastTrail = 0;

  const moveCursor = (event) => {
    // Move the main star
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;

    const now = performance.now();

    if (now - lastTrail < 55) return;

    lastTrail = now;

    // Create smaller stars behind the main cursor
    const sparkle = document.createElement("span");

    sparkle.className = "golden-trail";
    sparkle.textContent = Math.random() > 0.5 ? "✦" : "✧";

    sparkle.style.left =
      `${event.clientX + (Math.random() * 30 - 15)}px`;

    sparkle.style.top =
      `${event.clientY + (Math.random() * 30 - 15)}px`;

    sparkle.style.fontSize =
      `${10 + Math.random() * 14}px`;

    document.body.appendChild(sparkle);

    sparkle.addEventListener(
      "animationend",
      () => sparkle.remove(),
      { once: true }
    );
  };

  window.addEventListener("mousemove", moveCursor);

  return () => {
    window.removeEventListener("mousemove", moveCursor);
    style.remove();
    cursor.remove();

    document.querySelectorAll(".golden-trail").forEach((item) => {
      item.remove();
    });
  };
}, []);

  useEffect(() => {
    try {
      localStorage.setItem("everafter-shelf", JSON.stringify(saved));
    } catch {
      // The shelf still works for the current session if storage is unavailable.
    }
  }, [saved]);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(""), 2400);
    return () => clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setActiveBook(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const filtered = useMemo(() => {
    return stories.filter((book) => {
      const matchesSearch =
        `${book.title} ${book.author} ${book.genre} ${book.description}`
          .toLowerCase().includes(search.toLowerCase());
      const matchesGenre = genre === "All" || book.genre === genre;
      const matchesShelf = page !== "My Shelf" || saved.includes(book.id);
      return matchesSearch && matchesGenre && matchesShelf;
    });
  }, [search, genre, page, saved]);

  const navigate = (next) => {
    setPage(next);
    setSearch("");
    setGenre("All");
    setActiveBook(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleSave = (id) => {
    const isSaved = saved.includes(id);
    setSaved((previous) =>
      isSaved ? previous.filter((bookId) => bookId !== id) : [...previous, id]
    );
    setToast(
      isSaved
        ? "Removed from your enchanted shelf."
        : "✧ A little magic saved to My Shelf!"
    );
  };

  const openBook = (book) => {
    setActiveBook(book);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderCard = (book) => (
    <article className="book-card" key={book.id}>
      <div
        className="cover"
        style={{
          background: `radial-gradient(circle at 50% 35%, ${book.color}dd, ${book.color} 57%, #526447)`,
        }}
        role="button"
        tabIndex={0}
        onClick={() => openBook(book)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openBook(book);
          }
        }}
        aria-label={`Read ${book.title}`}
      >
        <span className="cover-title">{book.title}</span>
        <span className="cover-icon">{book.emoji}</span>
        <span className="cover-genre">{book.genre}</span>
        <span className="sparkle" style={{ top: "18%", left: "19%" }}>✦</span>
        <span className="sparkle" style={{ bottom: "22%", right: "17%", animationDelay: "1s" }}>✧</span>
        <button
          className="save-btn"
          aria-label={saved.includes(book.id) ? "Remove from My Shelf" : "Save to My Shelf"}
          title={saved.includes(book.id) ? "Remove from My Shelf" : "Save to My Shelf"}
          onClick={(event) => {
            event.stopPropagation();
            toggleSave(book.id);
          }}
        >
          {saved.includes(book.id) ? "♥" : "♡"}
        </button>
      </div>
      <div className="book-info">
        <h3>{book.title}</h3>
        <div className="author">A story by {book.author}</div>
        <p>{book.description}</p>
        <button className="read-link" onClick={() => openBook(book)}>
          Read this story ↗
        </button>
      </div>
    </article>
  );

  return (
    <div className="app">
      <style>{css}</style>

      <header className="header">
        <button className="brand" onClick={() => navigate("Home")} aria-label="EverAfter Home">
          <span className="brand-mark">✧</span>
          EverAfter
        </button>

        <nav className="nav" aria-label="Main navigation">
          {["Home", "Library", "My Shelf", "Explore", "About"].map((item) => (
            <button
              key={item}
              className={page === item ? "active" : ""}
              onClick={() => navigate(item)}
            >
              {item}
            </button>
          ))}
        </nav>

        <button className="gold-btn" onClick={() => navigate("Library")}>
          Explore ✧
        </button>
      </header>

      {page === "Home" && (
        <>
          <section className="hero">
            <div className="sunbeam" />
            <div className="sparkle-field" aria-hidden="true">
              {Array.from({ length: 16 }, (_, i) => (
                <span
                  className="sparkle-dot"
                  key={i}
                  style={{
                    left: `${4 + ((i * 29) % 92)}%`,
                    top: `${8 + ((i * 37) % 83)}%`,
                    animationDelay: `${(i % 7) * -0.7}s`,
                    fontSize: `${9 + (i % 4) * 4}px`,
                  }}
                >
                  {i % 3 === 0 ? "✦" : "✧"}
                </span>
              ))}
            </div>

            <div className="hero-copy">
              <div className="eyebrow">✧ A LITTLE WORLD OF WONDER ✧</div>
              <h1>
                Where stories bloom in the light of <em>magic.</em>
              </h1>
              <p>
                Step into a sunlit garden where butterflies carry wishes,
                little dragons learn to be brave, and every story holds a
                sprinkle of golden magic. Find a cosy corner and let your
                imagination wander.
              </p>
              <div className="hero-actions">
                <button className="gold-btn" onClick={() => navigate("Library")}>
                  Open the Storybook &nbsp; ✧
                </button>
                <button className="outline-btn" onClick={() => navigate("My Shelf")}>
                  ♡ &nbsp; My Shelf
                </button>
              </div>
              <p className="hero-foot">
                ✦ &nbsp; 20 ORIGINAL STORIES &nbsp; · &nbsp; ENDLESS LITTLE WONDERS &nbsp; ✦
              </p>
            </div>

            <div className="landscape">
              <div className="landscape-glow" />
              <div className="landscape-art">
                <div className="sun-disc" />
                <div className="mountain one" />
                <div className="mountain two" />
                <div className="mountain three" />
                <div className="water" />
                <span className="castle">🏰</span>
                <span className="tree left">🌳</span>
                <span className="tree right">🌲</span>
                <span className="floating f1">✨</span>
                <span className="floating f2">🦋</span>
                <span className="floating f3">🌸</span>
                <span className="floating f4">🧚</span>
                <span className="floating f5">✧</span>
              </div>
              <div className="sign">
                Read
                <br />
                Dream
                <br />
                Believe
                <br />
                Forever
                <span>📖</span>
              </div>
            </div>
          </section>

          <div className="genre-strip">
            {genres.map((item) => (
              <button
                key={item}
                className={`genre-chip ${genre === item ? "selected" : ""}`}
                onClick={() => {
                  setGenre(item);
                  setPage("Library");
                  setSearch("");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                {item === "All" ? "✧" : item === "Nature" ? "🌿" : item === "Magic" ? "✨" : "❀"}
                &nbsp; {item}
              </button>
            ))}
          </div>

          <section className="section">
            <div className="section-heading">
              <div>
                <div className="eyebrow">✧ HANDPICKED LITTLE WONDERS ✧</div>
                <h2>Stories kissed by sunshine</h2>
                <p>Beautiful little tales for curious hearts and dreamy minds.</p>
              </div>
              <button className="outline-btn" onClick={() => navigate("Library")}>
                All 20 stories →
              </button>
            </div>
            <div className="book-grid">
              {stories.slice(0, 8).map(renderCard)}
            </div>
          </section>

          <section className="shelf-section">
            <div className="section-heading">
              <div>
                <div className="eyebrow">✧ THE GOLDEN BOOKSHELF ✧</div>
                <h2>Choose a door to a new world</h2>
                <p>Every little book has a new adventure waiting inside.</p>
              </div>
              <button className="outline-btn" onClick={() => navigate("Library")}>
                Explore all →
              </button>
            </div>
            <div className="wood-shelf">
              {stories.map((book) => (
                <button
                  className="spine"
                  key={book.id}
                  style={{
                    background: `linear-gradient(90deg,#4c4930,${book.color},#7a653b)`,
                  }}
                  title={`Read ${book.title}`}
                  aria-label={`Read ${book.title}`}
                  onClick={() => openBook(book)}
                >
                  <span>{book.emoji}</span>
                  <strong>{book.title}</strong>
                  <small>✧</small>
                </button>
              ))}
            </div>
          </section>

          <section className="quote-band">
            <div>✧ ❋ ✧</div>
            <blockquote>
              “Somewhere between a golden ray of sunshine and the turning of
              a page, a little bit of magic finds its way into your heart.”
            </blockquote>
            <p>EVERAFTER · A LITTLE MAGIC FOR EVERY READER</p>
          </section>
        </>
      )}

      {page === "Library" && (
        <main className="inner">
          <div className="eyebrow">✧ YOUR NEXT LITTLE ADVENTURE ✧</div>
          <h1>The Enchanted Library</h1>
          <p>
            Explore 20 gentle stories filled with nature, friendship, courage,
            and a little golden magic.
          </p>

          <label className="search-box">
            <span>⌕</span>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search stories, authors, or themes..."
              aria-label="Search stories"
            />
          </label>

          <div
            className="genre-strip"
            style={{
              padding: "12px 0",
              background: "transparent",
              border: 0,
              flexWrap: "wrap",
            }}
          >
            {genres.map((item) => (
              <button
                key={item}
                className={`genre-chip ${genre === item ? "selected" : ""}`}
                onClick={() => setGenre(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="section-heading" style={{ marginTop: 25 }}>
            <p>
              {filtered.length} {filtered.length === 1 ? "story" : "stories"} waiting for you
            </p>
          </div>

          {filtered.length ? (
            <div className="book-grid">{filtered.map(renderCard)}</div>
          ) : (
            <div className="empty">
              <span>🪄</span>
              <h3>No little stories found</h3>
              <p>Try a different word or choose another theme.</p>
              <button
                className="gold-btn"
                onClick={() => {
                  setSearch("");
                  setGenre("All");
                }}
              >
                Show all stories
              </button>
            </div>
          )}
        </main>
      )}

      {page === "My Shelf" && (
        <main className="inner">
          <div className="eyebrow">✧ YOUR VERY OWN STORY CORNER ✧</div>
          <h1>My Enchanted Shelf</h1>
          <p>
            Keep your favourite little adventures close and return to them
            whenever you like.
          </p>

          <div style={{ marginTop: 35 }}>
            {filtered.length ? (
              <div className="book-grid">{filtered.map(renderCard)}</div>
            ) : (
              <div className="empty">
                <span>📚</span>
                <h3>Your shelf is waiting for magic</h3>
                <p>
                  Tap the little heart on any story to keep it here.
                </p>
                <button className="gold-btn" onClick={() => navigate("Library")}>
                  Find your first story ✧
                </button>
              </div>
            )}
          </div>
        </main>
      )}

      {page === "Explore" && (
        <main className="inner">
          <div className="eyebrow">✧ FOLLOW YOUR CURIOSITY ✧</div>
          <h1>Where shall we wander?</h1>
          <p>
            Every path leads somewhere lovely. Pick a little world and begin
            your next adventure.
          </p>

          <div className="about-grid">
            {[
              { name: "Nature", icon: "🌿", text: "Sunflowers, gardens, forests, and tiny seeds." },
              { name: "Fairytale", icon: "🏰", text: "Secret doors, moonlit gardens, and cloud castles." },
              { name: "Magic", icon: "✨", text: "Fairies, glowing stars, and enchanted gifts." },
              { name: "Adventure", icon: "🦊", text: "Brave little friends finding their way." },
              { name: "Fantasy", icon: "🐉", text: "Dragons, dreams, and extraordinary discoveries." },
              { name: "Friendship", icon: "💛", text: "Little acts of kindness and hearts growing closer." },
            ].map((item) => (
              <article className="about-card" key={item.name}>
                <span>{item.icon}</span>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
                <button
                  className="read-link"
                  onClick={() => {
                    setGenre(item.name);
                    setPage("Library");
                    setSearch("");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Find these stories ↗
                </button>
              </article>
            ))}
          </div>

          <section style={{ marginTop: 55 }}>
            <div className="section-heading">
              <div>
                <div className="eyebrow">✧ A LITTLE RECOMMENDATION ✧</div>
                <h2>Today's sunshine story</h2>
                <p>A gentle reminder that small things can make a big difference.</p>
              </div>
            </div>
            <div className="book-grid">
              {renderCard(stories[0])}
              {renderCard(stories[6])}
              {renderCard(stories[11])}
              {renderCard(stories[18])}
            </div>
          </section>
        </main>
      )}

      {page === "About" && (
        <main className="inner">
          <div className="eyebrow">✧ A LITTLE WORLD MADE OF WONDER ✧</div>
          <h1>More than a library.</h1>
          <p style={{ maxWidth: 680, lineHeight: 2 }}>
            EverAfter is a little digital storybook inspired by sunlit
            meadows, magical forests, golden fairytales, and the joy of
            reading. Wander through the library, discover gentle original
            stories, and build your own collection of favourites.
          </p>

          <div className="about-grid">
            <article className="about-card">
              <span>🌿</span>
              <h3>Nature's embrace</h3>
              <p>
                Botanical colours, soft landscapes, floating butterflies,
                flowers, and warm morning sunshine.
              </p>
            </article>
            <article className="about-card">
              <span>✨</span>
              <h3>Golden magic</h3>
              <p>
                Twinkling sparkles, glowing sunlight, animated scenes, and
                enchanting book covers.
              </p>
            </article>
            <article className="about-card">
              <span>📖</span>
              <h3>Stories for little hearts</h3>
              <p>
                Twenty original short stories about kindness, courage,
                friendship, nature, and imagination.
              </p>
            </article>
          </div>

          <section style={{ marginTop: 55 }}>
            <div className="eyebrow">✧ MADE FOR DREAMERS ✧</div>
            <h2 style={{ font: "500 38px 'Cormorant Garamond',serif", color: "#31573a" }}>
              A cosy corner to read, save, and imagine.
            </h2>
            <p style={{ maxWidth: 650, lineHeight: 2 }}>
              This version works entirely in your browser. There is no login
              and no backend. Your saved stories are kept in local browser
              storage when available, so you can return to your shelf on the
              same browser.
            </p>
            <button className="gold-btn" onClick={() => navigate("Library")}>
              Discover a story ✧
            </button>
          </section>
        </main>
      )}

      <footer className="footer">
        <span>✧ EverAfter Digital Library</span>
        <span>Made with sunshine, nature, and a little gold.</span>
        <button className="read-link" onClick={() => navigate("About")}>
          Our little world ↗
        </button>
      </footer>

      {activeBook && (
        <section className="reader" aria-label={`Reading ${activeBook.title}`}>
          <div className="reader-glow" />
          <button className="reader-close" onClick={() => setActiveBook(null)}>
            ← &nbsp; Back to the library
          </button>

          <div className="reader-top">
            ✧ &nbsp; EVERAFTER · THE SUNLIT READING GARDEN
          </div>

          <div className="reader-content">
            <div className="reader-ornament">✧ ❋ ✧</div>
            <div style={{ fontSize: 65, marginBottom: 12 }}>{activeBook.emoji}</div>
            <h1>{activeBook.title}</h1>
            <p className="reader-byline">A little tale by {activeBook.author}</p>
            <div className="reader-rule"><span>❦</span></div>

            <div className="story-text">
              {activeBook.story.map((paragraph, index) => (
                <p key={`${activeBook.id}-${index}`}>{paragraph}</p>
              ))}
            </div>

            <div className="reader-rule"><span>✧</span></div>
            <p className="story-end">
              And they lived a little happier ever after. ✨
            </p>

            <button
              className="gold-btn"
              onClick={() => toggleSave(activeBook.id)}
            >
              {saved.includes(activeBook.id)
                ? "♥ Saved to My Shelf"
                : "♡ Keep this story on My Shelf"}
            </button>

            <div className="hero-actions" style={{ justifyContent: "center", marginTop: 24 }}>
              <button
                className="outline-btn"
                onClick={() => {
                  const index = stories.findIndex((s) => s.id === activeBook.id);
                  const previous = stories[(index - 1 + stories.length) % stories.length];
                  openBook(previous);
                }}
              >
                ← Previous story
              </button>
              <button
                className="outline-btn"
                onClick={() => {
                  const index = stories.findIndex((s) => s.id === activeBook.id);
                  const next = stories[(index + 1) % stories.length];
                  openBook(next);
                }}
              >
                Next story →
              </button>
            </div>
          </div>
        </section>
      )}

      {toast && <div className="toast" role="status">{toast}</div>}
    </div>
  );
}

export default App;