// Unified Phonics Flashcard Application Data and Logic
// Consolidating Lessons 1, 2, 3, and 4 (8-1, 8-2, 8-3, 8-4)

const lessons = {
  1: {
    title: "Lesson 1: Time Expressions",
    subtitle: "跟著自然拼讀學時間副詞！",
    cards: [
      {
        word: "last Sunday",
        translation: "上個星期日",
        image: "assets/last_sunday.png",
        segmented: [
          { text: "l", type: "consonant" },
          { text: "a", type: "vowel" },
          { text: "st", type: "blend" },
          { text: " ", type: "space" },
          { text: "S", type: "consonant" },
          { text: "u", type: "vowel" },
          { text: "nd", type: "blend" },
          { text: "ay", type: "vowel" }
        ]
      },
      {
        word: "an hour ago",
        translation: "一個小時前",
        image: "assets/an_hour_ago.png",
        segmented: [
          { text: "a", type: "vowel" },
          { text: "n", type: "consonant" },
          { text: " ", type: "space" },
          { text: "h", type: "consonant" },
          { text: "ou", type: "vowel" },
          { text: "r", type: "consonant" },
          { text: " ", type: "space" },
          { text: "a", type: "vowel" },
          { text: "g", type: "consonant" },
          { text: "o", type: "vowel" }
        ]
      },
      {
        word: "yesterday",
        translation: "昨天",
        image: "assets/yesterday.png",
        segmented: [
          { text: "y", type: "consonant" },
          { text: "e", type: "vowel" },
          { text: "st", type: "blend" },
          { text: "er", type: "vowel" },
          { text: "d", type: "consonant" },
          { text: "ay", type: "vowel" }
        ]
      },
      {
        word: "ten minutes ago",
        translation: "十分鐘前",
        image: "assets/ten_minutes_ago.png",
        segmented: [
          { text: "t", type: "consonant" },
          { text: "e", type: "vowel" },
          { text: "n", type: "consonant" },
          { text: " ", type: "space" },
          { text: "m", type: "consonant" },
          { text: "i", type: "vowel" },
          { text: "n", type: "consonant" },
          { text: "u", type: "vowel" },
          { text: "t", type: "consonant" },
          { text: "e", type: "vowel" },
          { text: "s", type: "consonant" },
          { text: " ", type: "space" },
          { text: "a", type: "vowel" },
          { text: "g", type: "consonant" },
          { text: "o", type: "vowel" }
        ]
      },
      {
        word: "this morning",
        translation: "今天早上",
        image: "assets/this_morning.svg",
        segmented: [
          { text: "th", type: "digraph" },
          { text: "i", type: "vowel" },
          { text: "s", type: "consonant" },
          { text: " ", type: "space" },
          { text: "m", type: "consonant" },
          { text: "or", type: "vowel" },
          { text: "n", type: "consonant" },
          { text: "i", type: "vowel" },
          { text: "ng", type: "digraph" }
        ]
      }
    ]
  },
  2: {
    title: "Lesson 2: Places",
    subtitle: "跟著自然拼讀學場所單字！",
    cards: [
      {
        word: "at home",
        translation: "在家",
        image: "assets/at_home.svg",
        segmented: [
          { text: "a", type: "vowel" },
          { text: "t", type: "consonant" },
          { text: " ", type: "space" },
          { text: "h", type: "consonant" },
          { text: "o", type: "vowel" },
          { text: "m", type: "consonant" },
          { text: "e", type: "vowel" }
        ]
      },
      {
        word: "at the museum",
        translation: "在博物館",
        image: "assets/at_the_museum.svg",
        segmented: [
          { text: "a", type: "vowel" },
          { text: "t", type: "consonant" },
          { text: " ", type: "space" },
          { text: "th", type: "digraph" },
          { text: "e", type: "vowel" },
          { text: " ", type: "space" },
          { text: "m", type: "consonant" },
          { text: "u", type: "vowel" },
          { text: "s", type: "consonant" },
          { text: "e", type: "vowel" },
          { text: "u", type: "vowel" },
          { text: "m", type: "consonant" }
        ]
      },
      {
        word: "at school",
        translation: "在學校",
        image: "assets/at_school.svg",
        segmented: [
          { text: "a", type: "vowel" },
          { text: "t", type: "consonant" },
          { text: " ", type: "space" },
          { text: "s", type: "consonant" },
          { text: "ch", type: "digraph" },
          { text: "oo", type: "digraph" },
          { text: "l", type: "consonant" }
        ]
      },
      {
        word: "at the restaurant",
        translation: "在餐廳",
        image: "assets/at_the_restaurant.svg",
        segmented: [
          { text: "a", type: "vowel" },
          { text: "t", type: "consonant" },
          { text: " ", type: "space" },
          { text: "th", type: "digraph" },
          { text: "e", type: "vowel" },
          { text: " ", type: "space" },
          { text: "r", type: "consonant" },
          { text: "e", type: "vowel" },
          { text: "s", type: "consonant" },
          { text: "t", type: "consonant" },
          { text: "au", type: "digraph" },
          { text: "r", type: "consonant" },
          { text: "a", type: "vowel" },
          { text: "n", type: "consonant" },
          { text: "t", type: "consonant" }
        ]
      },
      {
        word: "at the amusement park",
        translation: "在遊樂園",
        image: "assets/at_the_amusement_park.svg",
        segmented: [
          { text: "a", type: "vowel" },
          { text: "t", type: "consonant" },
          { text: " ", type: "space" },
          { text: "th", type: "digraph" },
          { text: "e", type: "vowel" },
          { text: " ", type: "space" },
          { text: "a", type: "vowel" },
          { text: "m", type: "consonant" },
          { text: "u", type: "vowel" },
          { text: "s", type: "consonant" },
          { text: "e", type: "vowel" },
          { text: "m", type: "consonant" },
          { text: "e", type: "vowel" },
          { text: "n", type: "consonant" },
          { text: "t", type: "consonant" },
          { text: " ", type: "space" },
          { text: "p", type: "consonant" },
          { text: "ar", type: "digraph" },
          { text: "k", type: "consonant" }
        ]
      },
      {
        word: "at the department store",
        translation: "在百貨公司",
        image: "assets/at_the_department_store.svg",
        segmented: [
          { text: "a", type: "vowel" },
          { text: "t", type: "consonant" },
          { text: " ", type: "space" },
          { text: "th", type: "digraph" },
          { text: "e", type: "vowel" },
          { text: " ", type: "space" },
          { text: "d", type: "consonant" },
          { text: "e", type: "vowel" },
          { text: "p", type: "consonant" },
          { text: "ar", type: "digraph" },
          { text: "t", type: "consonant" },
          { text: "m", type: "consonant" },
          { text: "e", type: "vowel" },
          { text: "n", type: "consonant" },
          { text: "t", type: "consonant" },
          { text: " ", type: "space" },
          { text: "st", type: "blend" },
          { text: "o", type: "vowel" },
          { text: "r", type: "consonant" },
          { text: "e", type: "vowel" }
        ]
      }
    ]
  },
  3: {
    title: "Lesson 3: Jobs",
    subtitle: "跟著自然拼讀學職業單字！",
    cards: [
      {
        word: "firefighter",
        translation: "消防員",
        image: "assets/firefighter.svg",
        segmented: [
          { text: "f", type: "consonant" },
          { text: "i", type: "vowel" },
          { text: "r", type: "consonant" },
          { text: "e", type: "vowel" },
          { text: "f", type: "consonant" },
          { text: "i", type: "vowel" },
          { text: "gh", type: "digraph" },
          { text: "t", type: "consonant" },
          { text: "er", type: "vowel" }
        ]
      },
      {
        word: "singer",
        translation: "歌手",
        image: "assets/singer.svg",
        segmented: [
          { text: "s", type: "consonant" },
          { text: "i", type: "vowel" },
          { text: "ng", type: "digraph" },
          { text: "er", type: "vowel" }
        ]
      },
      {
        word: "police officer",
        translation: "警察",
        image: "assets/police_officer.svg",
        segmented: [
          { text: "p", type: "consonant" },
          { text: "o", type: "vowel" },
          { text: "l", type: "consonant" },
          { text: "i", type: "vowel" },
          { text: "c", type: "consonant" },
          { text: "e", type: "vowel" },
          { text: " ", type: "space" },
          { text: "o", type: "vowel" },
          { text: "ff", type: "blend" },
          { text: "i", type: "vowel" },
          { text: "c", type: "consonant" },
          { text: "er", type: "vowel" }
        ]
      },
      {
        word: "YouTuber",
        translation: "影片創作者",
        image: "assets/youtuber.svg",
        segmented: [
          { text: "Y", type: "consonant" },
          { text: "ou", type: "vowel" },
          { text: "T", type: "consonant" },
          { text: "u", type: "vowel" },
          { text: "b", type: "consonant" },
          { text: "er", type: "vowel" }
        ]
      },
      {
        word: "baseball player",
        translation: "棒球選手",
        image: "assets/baseball_player.svg",
        segmented: [
          { text: "b", type: "consonant" },
          { text: "a", type: "vowel" },
          { text: "s", type: "consonant" },
          { text: "e", type: "vowel" },
          { text: "b", type: "consonant" },
          { text: "a", type: "vowel" },
          { text: "ll", type: "blend" },
          { text: " ", type: "space" },
          { text: "pl", type: "blend" },
          { text: "ay", type: "vowel" },
          { text: "er", type: "vowel" }
        ]
      },
      {
        word: "engineer",
        translation: "工程師",
        image: "assets/engineer.svg",
        segmented: [
          { text: "e", type: "vowel" },
          { text: "n", type: "consonant" },
          { text: "g", type: "consonant" },
          { text: "i", type: "vowel" },
          { text: "n", type: "consonant" },
          { text: "ee", type: "vowel" },
          { text: "r", type: "consonant" }
        ]
      },
      {
        word: "reporter",
        translation: "記者",
        image: "assets/reporter.svg",
        segmented: [
          { text: "r", type: "consonant" },
          { text: "e", type: "vowel" },
          { text: "p", type: "consonant" },
          { text: "o", type: "vowel" },
          { text: "r", type: "consonant" },
          { text: "t", type: "consonant" },
          { text: "er", type: "vowel" }
        ]
      },
      {
        word: "be",
        translation: "成為；是",
        image: "assets/be.svg",
        segmented: [
          { text: "b", type: "consonant" },
          { text: "e", type: "vowel" }
        ]
      },
      {
        word: "scientist",
        translation: "科學家",
        image: "assets/scientist.svg",
        segmented: [
          { text: "sc", type: "blend" },
          { text: "i", type: "vowel" },
          { text: "e", type: "vowel" },
          { text: "n", type: "consonant" },
          { text: "t", type: "consonant" },
          { text: "i", type: "vowel" },
          { text: "st", type: "blend" }
        ]
      }
    ]
  },
  4: {
    title: "Lesson 4: Daily Items",
    subtitle: "跟著自然拼讀學生活用品！",
    cards: [
      {
        word: "phone",
        translation: "電話",
        svg: `<svg viewBox="0 0 220 220" width="220" height="220" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="phoneGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FF9EAF" />
          <stop offset="100%" stop-color="#FF6B8B" />
        </radialGradient>
      </defs>
      <!-- Background shadow -->
      <ellipse cx="110" cy="180" rx="60" ry="12" fill="#E2E8F0" opacity="0.8" />
      
      <!-- Phone Base -->
      <path d="M 60 170 C 50 170, 45 150, 50 130 C 55 110, 165 110, 170 130 C 175 150, 170 170, 160 170 Z" fill="url(#phoneGrad)" stroke="#C84B66" stroke-width="4" stroke-linejoin="round" />
      
      <!-- Dial screen / Buttons area -->
      <rect x="75" y="130" width="70" height="30" rx="8" fill="#FFF" stroke="#C84B66" stroke-width="3" />
      <circle cx="87" cy="140" r="4" fill="#FFD3B6" />
      <circle cx="100" cy="140" r="4" fill="#FFD3B6" />
      <circle cx="113" cy="140" r="4" fill="#FFD3B6" />
      <circle cx="126" cy="140" r="4" fill="#FFD3B6" />
      <circle cx="133" cy="140" r="4" fill="#FFD3B6" />
      <circle cx="87" cy="150" r="4" fill="#FFAAA6" />
      <circle cx="100" cy="150" r="4" fill="#FFAAA6" />
      <circle cx="113" cy="150" r="4" fill="#FFAAA6" />
      <circle cx="126" cy="150" r="4" fill="#FFAAA6" />
      <circle cx="133" cy="150" r="4" fill="#FFAAA6" />

      <!-- Cradle -->
      <path d="M 90 112 L 90 100 C 90 98, 100 98, 100 100 L 100 112 M 120 112 L 120 100 C 120 98, 130 98, 130 100 L 130 112" stroke="#C84B66" stroke-width="4" stroke-linecap="round" fill="none"/>

      <!-- Receiver -->
      <path d="M 45 90 C 70 65, 150 65, 175 90 C 185 100, 165 110, 155 100 C 145 90, 75 90, 65 100 C 55 110, 35 100, 45 90 Z" fill="url(#phoneGrad)" stroke="#C84B66" stroke-width="4" stroke-linejoin="round" />
      
      <!-- Curly Cord -->
      <path d="M 60 145 Q 35 150, 45 165 T 55 180" fill="none" stroke="#FF6B8B" stroke-width="4" stroke-linecap="round" />

      <!-- Cute Face details -->
      <circle cx="95" cy="120" r="5" fill="#2C3E50" />
      <circle cx="125" cy="120" r="5" fill="#2C3E50" />
      <path d="M 106 126 Q 110 131, 114 126" fill="none" stroke="#2C3E50" stroke-width="3" stroke-linecap="round" />
      <circle cx="87" cy="123" r="4" fill="#FF8EAF" opacity="0.6" />
      <circle cx="133" cy="123" r="4" fill="#FF8EAF" opacity="0.6" />
    </svg>`,
        segmented: [
          { text: "ph", type: "digraph" },
          { text: "o", type: "vowel" },
          { text: "n", type: "consonant" },
          { text: "e", type: "vowel" }
        ]
      },
      {
        word: "watch",
        translation: "手錶",
        svg: `<svg viewBox="0 0 220 220" width="220" height="220" xmlns="http://www.w3.org/2000/svg">
      <!-- Shadow -->
      <ellipse cx="110" cy="185" rx="55" ry="10" fill="#E2E8F0" opacity="0.8" />
      
      <!-- Watch Strap -->
      <rect x="90" y="30" width="40" height="160" rx="10" fill="#4D96FF" stroke="#2F72D6" stroke-width="4" />
      <!-- Strap patterns -->
      <line x1="90" y1="55" x2="130" y2="55" stroke="#FFFFFF" stroke-width="3" stroke-dasharray="4" />
      <line x1="90" y1="165" x2="130" y2="165" stroke="#FFFFFF" stroke-width="3" stroke-dasharray="4" />

      <!-- Watch Case -->
      <circle cx="110" cy="110" r="50" fill="#FFD369" stroke="#E5B23E" stroke-width="4" />
      <circle cx="110" cy="110" r="40" fill="#FFFFFF" />

      <!-- Cat Face Dial Design -->
      <path d="M 85 85 L 75 70 L 93 78 Z" fill="#FF8E9E" stroke="#E5B23E" stroke-width="2" /> <!-- Left Ear -->
      <path d="M 135 85 L 145 70 L 127 78 Z" fill="#FF8E9E" stroke="#E5B23E" stroke-width="2" /> <!-- Right Ear -->
      
      <!-- Clock Hands as cat nose/mouth center -->
      <circle cx="110" cy="110" r="4" fill="#2C3E50" />
      <line x1="110" y1="110" x2="110" y2="85" stroke="#2C3E50" stroke-width="4" stroke-linecap="round" /> <!-- Hour hand -->
      <line x1="110" y1="110" x2="132" y2="110" stroke="#FF6B6B" stroke-width="3" stroke-linecap="round" /> <!-- Minute hand -->

      <!-- Cat Eyes -->
      <circle cx="95" cy="105" r="4" fill="#2C3E50" />
      <circle cx="125" cy="105" r="4" fill="#2C3E50" />
      
      <!-- Whiskers -->
      <line x1="80" y1="115" x2="70" y2="113" stroke="#CBD5E0" stroke-width="2" />
      <line x1="80" y1="120" x2="68" y2="122" stroke="#CBD5E0" stroke-width="2" />
      <line x1="140" y1="115" x2="150" y2="113" stroke="#CBD5E0" stroke-width="2" />
      <line x1="140" y1="120" x2="152" y2="122" stroke="#CBD5E0" stroke-width="2" />

      <!-- Cute Blush -->
      <circle cx="87" cy="113" r="3" fill="#FF8EAF" opacity="0.6" />
      <circle cx="133" cy="113" r="3" fill="#FF8EAF" opacity="0.6" />
    </svg>`,
        segmented: [
          { text: "w", type: "consonant" },
          { text: "a", type: "vowel" },
          { text: "tch", type: "digraph" }
        ]
      },
      {
        word: "jacket",
        translation: "外套",
        svg: `<svg viewBox="0 0 220 220" width="220" height="220" xmlns="http://www.w3.org/2000/svg">
      <!-- Shadow -->
      <ellipse cx="110" cy="190" rx="65" ry="10" fill="#E2E8F0" opacity="0.8" />
      
      <!-- Hanger hook -->
      <path d="M 110 50 C 110 35, 120 35, 120 42 C 120 48, 110 48, 110 55" fill="none" stroke="#718096" stroke-width="3" stroke-linecap="round" />

      <!-- Jacket Body -->
      <path d="M 60 70 L 160 70 L 170 160 L 50 160 Z" fill="#FFD369" stroke="#E5B23E" stroke-width="4" stroke-linejoin="round" />
      
      <!-- Hood -->
      <path d="M 70 70 C 70 45, 150 45, 150 70 Z" fill="#FFE29A" stroke="#E5B23E" stroke-width="3" />
      
      <!-- Sleeves -->
      <path d="M 60 70 L 35 120 C 30 130, 45 135, 50 125 L 65 90" fill="#FFD369" stroke="#E5B23E" stroke-width="4" stroke-linejoin="round" />
      <path d="M 160 70 L 185 120 C 190 130, 175 135, 170 125 L 155 90" fill="#FFD369" stroke="#E5B23E" stroke-width="4" stroke-linejoin="round" />
      
      <!-- Cuffs -->
      <rect x="33" y="118" width="16" height="8" rx="3" fill="#6BCB77" />
      <rect x="171" y="118" width="16" height="8" rx="3" fill="#6BCB77" />
      <rect x="50" y="156" width="120" height="8" rx="3" fill="#6BCB77" />

      <!-- Zipper Line -->
      <line x1="110" y1="70" x2="110" y2="156" stroke="#FFFFFF" stroke-width="4" />
      <circle cx="110" cy="85" r="7" fill="#6BCB77" stroke="#489C53" stroke-width="2" />
      <line x1="110" y1="85" x2="110" y2="95" stroke="#6BCB77" stroke-width="3" />

      <!-- Pockets -->
      <rect x="70" y="120" width="25" height="22" rx="5" fill="#FFE29A" stroke="#E5B23E" stroke-width="2" />
      <rect x="125" y="120" width="25" height="22" rx="5" fill="#FFE29A" stroke="#E5B23E" stroke-width="2" />

      <!-- Cute smiling badges/face -->
      <circle cx="137" cy="131" r="2" fill="#2C3E50" />
      <circle cx="143" cy="131" r="2" fill="#2C3E50" />
      <path d="M 139 135 Q 140 137, 141 135" stroke="#2C3E50" stroke-width="1" fill="none" />
    </svg>`,
        segmented: [
          { text: "j", type: "consonant" },
          { text: "a", type: "vowel" },
          { text: "ck", type: "digraph" },
          { text: "e", type: "vowel" },
          { text: "t", type: "consonant" }
        ]
      },
      {
        word: "key",
        translation: "鑰匙",
        svg: `<svg viewBox="0 0 220 220" width="220" height="220" xmlns="http://www.w3.org/2000/svg">
      <!-- Shadow -->
      <ellipse cx="110" cy="190" rx="55" ry="8" fill="#E2E8F0" opacity="0.8" />
      
      <!-- Golden Key -->
      <!-- Key shaft -->
      <rect x="104" y="80" width="12" height="90" rx="4" fill="#FFC93C" stroke="#DCA215" stroke-width="4" />
      
      <!-- Key teeth -->
      <path d="M 116 130 L 132 130 L 132 142 L 116 142 Z" fill="#FFC93C" stroke="#DCA215" stroke-width="4" stroke-linejoin="round" />
      <path d="M 116 150 L 132 150 L 132 162 L 116 162 Z" fill="#FFC93C" stroke="#DCA215" stroke-width="4" stroke-linejoin="round" />

      <!-- Key head (Bow) - heart shaped/round -->
      <path d="M 110 90 C 85 90, 75 50, 110 50 C 145 50, 135 90, 110 90 Z" fill="#FFC93C" stroke="#DCA215" stroke-width="4" stroke-linejoin="round" />
      <circle cx="110" cy="70" r="14" fill="#FFFFFF" stroke="#DCA215" stroke-width="3" />

      <!-- Cute face on the key head -->
      <circle cx="102" cy="70" r="3" fill="#2C3E50" />
      <circle cx="118" cy="70" r="3" fill="#2C3E50" />
      <path d="M 108 75 Q 110 78, 112 75" fill="none" stroke="#2C3E50" stroke-width="2" stroke-linecap="round" />
      <circle cx="97" cy="72" r="2.5" fill="#FF8EAF" opacity="0.6" />
      <circle cx="123" cy="72" r="2.5" fill="#FF8EAF" opacity="0.6" />
    </svg>`,
        segmented: [
          { text: "k", type: "consonant" },
          { text: "ey", type: "vowel" }
        ]
      },
      {
        word: "lunch bag",
        translation: "午餐袋",
        svg: `<svg viewBox="0 0 220 220" width="220" height="220" xmlns="http://www.w3.org/2000/svg">
      <!-- Shadow -->
      <ellipse cx="110" cy="190" rx="60" ry="10" fill="#E2E8F0" opacity="0.8" />
      
      <!-- Handle -->
      <path d="M 85 70 C 85 50, 135 50, 135 70" fill="none" stroke="#A77B50" stroke-width="6" stroke-linecap="round" />

      <!-- Bag Base -->
      <path d="M 65 80 L 155 80 C 165 80, 170 85, 165 170 C 163 180, 155 180, 150 180 L 70 180 C 65 180, 57 180, 55 170 C 50 85, 55 80, 65 80 Z" fill="#6BCB77" stroke="#489C53" stroke-width="4" stroke-linejoin="round" />

      <!-- Bag Top Flap -->
      <path d="M 60 80 Q 110 100, 160 80" fill="none" stroke="#489C53" stroke-width="4" stroke-linecap="round" />
      
      <!-- Badge/Label: Cute Apple logo -->
      <rect x="85" y="115" width="50" height="45" rx="8" fill="#FFF" stroke="#489C53" stroke-width="2" />
      <!-- Apple -->
      <circle cx="104" cy="140" r="10" fill="#FF6B6B" />
      <circle cx="116" cy="140" r="10" fill="#FF6B6B" />
      <path d="M 110 128 Q 114 120, 116 122" fill="none" stroke="#489C53" stroke-width="2" stroke-linecap="round" />

      <!-- Cute face details on the bag -->
      <circle cx="80" cy="100" r="4.5" fill="#2C3E50" />
      <circle cx="140" cy="100" r="4.5" fill="#2C3E50" />
      <path d="M 106 104 Q 110 108, 114 104" fill="none" stroke="#2C3E50" stroke-width="3" stroke-linecap="round" />
      <circle cx="73" cy="103" r="3" fill="#FF8EAF" opacity="0.6" />
      <circle cx="147" cy="103" r="3" fill="#FF8EAF" opacity="0.6" />
    </svg>`,
        segmented: [
          { text: "l", type: "consonant" },
          { text: "u", type: "vowel" },
          { text: "n", type: "consonant" },
          { text: "ch", type: "digraph" },
          { text: " ", type: "space" },
          { text: "b", type: "consonant" },
          { text: "a", type: "vowel" },
          { text: "g", type: "consonant" }
        ]
      },
      {
        word: "glasses",
        translation: "眼鏡",
        svg: `<svg viewBox="0 0 220 220" width="220" height="220" xmlns="http://www.w3.org/2000/svg">
      <!-- Shadow -->
      <ellipse cx="110" cy="180" rx="70" ry="8" fill="#E2E8F0" opacity="0.8" />
      
      <!-- Temples/Sides (folded back slightly) -->
      <path d="M 30 110 L 45 90" stroke="#FF6B6B" stroke-width="6" stroke-linecap="round" />
      <path d="M 190 110 L 175 90" stroke="#FF6B6B" stroke-width="6" stroke-linecap="round" />

      <!-- Eyeglass Frames -->
      <circle cx="75" cy="110" r="35" fill="none" stroke="#FF6B6B" stroke-width="8" />
      <circle cx="145" cy="110" r="35" fill="none" stroke="#FF6B6B" stroke-width="8" />
      
      <!-- Bridge -->
      <path d="M 100 106 Q 110 98, 120 106" fill="none" stroke="#FF6B6B" stroke-width="6" />

      <!-- Glass reflections -->
      <path d="M 60 90 L 75 105" stroke="#E2E8F0" stroke-width="3" stroke-linecap="round" opacity="0.7" />
      <path d="M 130 90 L 145 105" stroke="#E2E8F0" stroke-width="3" stroke-linecap="round" opacity="0.7" />

      <!-- Cute sparkling eyes behind the glasses -->
      <circle cx="75" cy="110" r="6" fill="#2C3E50" />
      <circle cx="73" cy="108" r="2" fill="#FFFFFF" />
      <circle cx="145" cy="110" r="6" fill="#2C3E50" />
      <circle cx="143" cy="108" r="2" fill="#FFFFFF" />
      
      <!-- Smiling mouth -->
      <path d="M 106 126 Q 110 131, 114 126" fill="none" stroke="#2C3E50" stroke-width="3" stroke-linecap="round" />
      
      <!-- Cheek blushes -->
      <circle cx="75" cy="120" r="4.5" fill="#FF8EAF" opacity="0.6" />
      <circle cx="145" cy="120" r="4.5" fill="#FF8EAF" opacity="0.6" />
    </svg>`,
        segmented: [
          { text: "gl", type: "blend" },
          { text: "a", type: "vowel" },
          { text: "ss", type: "blend" },
          { text: "e", type: "vowel" },
          { text: "s", type: "consonant" }
        ]
      },
      {
        word: "umbrella",
        translation: "雨傘",
        svg: `<svg viewBox="0 0 220 220" width="220" height="220" xmlns="http://www.w3.org/2000/svg">
      <!-- Shadow -->
      <ellipse cx="110" cy="195" rx="55" ry="7" fill="#E2E8F0" opacity="0.8" />
      
      <!-- Raindrops -->
      <path d="M 50 30 Q 48 38, 50 42 A 3 3 0 0 0 55 40 Q 52 35, 50 30" fill="#4D96FF" opacity="0.7" />
      <path d="M 170 35 Q 168 43, 170 47 A 3 3 0 0 0 175 45 Q 172 40, 170 35" fill="#4D96FF" opacity="0.7" />
      <path d="M 90 20 Q 88 28, 90 32 A 3 3 0 0 0 95 30 Q 92 25, 90 20" fill="#4D96FF" opacity="0.7" />

      <!-- Umbrella Handle (J stick) -->
      <rect x="107" y="110" width="6" height="60" fill="#A77B50" />
      <path d="M 113 170 C 113 182, 128 182, 128 170" fill="none" stroke="#A77B50" stroke-width="6" stroke-linecap="round" />

      <!-- Umbrella Dome -->
      <path d="M 40 120 C 40 60, 180 60, 180 120 C 160 115, 140 115, 133 120 C 120 115, 100 115, 90 120 C 80 115, 60 115, 40 120 Z" fill="#FFD369" stroke="#E5B23E" stroke-width="4" stroke-linejoin="round" />
      
      <!-- Tip -->
      <rect x="107" y="52" width="6" height="10" rx="2" fill="#A77B50" />

      <!-- Cute face details -->
      <circle cx="95" cy="95" r="4.5" fill="#2C3E50" />
      <circle cx="125" cy="95" r="4.5" fill="#2C3E50" />
      <path d="M 106 102 Q 110 106, 114 102" fill="none" stroke="#2C3E50" stroke-width="3" stroke-linecap="round" />
      <circle cx="87" cy="98" r="3" fill="#FF8EAF" opacity="0.6" />
      <circle cx="133" cy="98" r="3" fill="#FF8EAF" opacity="0.6" />
    </svg>`,
        segmented: [
          { text: "u", type: "vowel" },
          { text: "m", type: "consonant" },
          { text: "br", type: "blend" },
          { text: "e", type: "vowel" },
          { text: "ll", type: "blend" },
          { text: "a", type: "vowel" }
        ]
      },
      {
        word: "shoes",
        translation: "鞋子（複數）",
        svg: `<svg viewBox="0 0 220 220" width="220" height="220" xmlns="http://www.w3.org/2000/svg">
      <!-- Shadow -->
      <ellipse cx="110" cy="185" rx="75" ry="10" fill="#E2E8F0" opacity="0.8" />
      
      <!-- Left Shoe -->
      <g transform="translate(-10, -5) rotate(-5, 75, 140)">
        <!-- Sole -->
        <path d="M 40 155 Q 80 160, 110 150 C 112 142, 108 135, 100 135 L 50 135 C 40 135, 38 145, 40 155 Z" fill="#E2E8F0" stroke="#CBD5E0" stroke-width="2" />
        <!-- Body -->
        <path d="M 45 135 C 45 110, 80 100, 95 115 C 105 125, 105 135, 100 145 L 45 145 Z" fill="#4D96FF" stroke="#2F72D6" stroke-width="3" />
        <!-- Toe cap -->
        <path d="M 45 135 C 50 130, 58 132, 60 145 L 45 145 Z" fill="#FFF" stroke="#2F72D6" stroke-width="2" />
        <!-- Laces -->
        <line x1="75" y1="118" x2="85" y2="128" stroke="#FF6B6B" stroke-width="3" stroke-linecap="round" />
        <line x1="85" y1="118" x2="75" y2="128" stroke="#FF6B6B" stroke-width="3" stroke-linecap="round" />
        <!-- Face details -->
        <circle cx="53" cy="138" r="2" fill="#2C3E50" />
      </g>

      <!-- Right Shoe -->
      <g transform="translate(45, 15) rotate(5, 125, 140)">
        <!-- Sole -->
        <path d="M 40 155 Q 80 160, 110 150 C 112 142, 108 135, 100 135 L 50 135 C 40 135, 38 145, 40 155 Z" fill="#E2E8F0" stroke="#CBD5E0" stroke-width="2" />
        <!-- Body -->
        <path d="M 45 135 C 45 110, 80 100, 95 115 C 105 125, 105 135, 100 145 L 45 145 Z" fill="#FF8E9E" stroke="#C84B66" stroke-width="3" />
        <!-- Toe cap -->
        <path d="M 45 135 C 50 130, 58 132, 60 145 L 45 145 Z" fill="#FFF" stroke="#C84B66" stroke-width="2" />
        <!-- Laces -->
        <line x1="75" y1="118" x2="85" y2="128" stroke="#4D96FF" stroke-width="3" stroke-linecap="round" />
        <line x1="85" y1="118" x2="75" y2="128" stroke="#4D96FF" stroke-width="3" stroke-linecap="round" />
        <!-- Face details -->
        <circle cx="53" cy="138" r="2" fill="#2C3E50" />
      </g>
    </svg>`,
        segmented: [
          { text: "sh", type: "digraph" },
          { text: "oe", type: "vowel" },
          { text: "s", type: "consonant" }
        ]
      },
      {
        word: "whose",
        translation: "誰的",
        svg: `<svg viewBox="0 0 220 220" width="220" height="220" xmlns="http://www.w3.org/2000/svg">
      <!-- Shadow -->
      <ellipse cx="110" cy="190" rx="50" ry="8" fill="#E2E8F0" opacity="0.8" />
      
      <!-- Big Question Mark ? -->
      <text x="95" y="140" font-family="'Fredoka', sans-serif" font-weight="900" font-size="110" fill="#FF8E53" opacity="0.25">?</text>
      
      <!-- Detective Puppy -->
      <g transform="translate(45, 55)">
        <!-- Puppy head -->
        <rect x="25" y="30" width="70" height="60" rx="25" fill="#C29B78" stroke="#9A724F" stroke-width="4" />
        <!-- Puppy ears -->
        <path d="M 25 35 C 10 35, 10 70, 25 70 Z" fill="#9A724F" stroke="#9A724F" stroke-width="2" />
        <path d="M 95 35 C 110 35, 110 70, 95 70 Z" fill="#9A724F" stroke="#9A724F" stroke-width="2" />
        <!-- Eyes -->
        <ellipse cx="45" cy="55" rx="5" ry="7" fill="#2C3E50" />
        <ellipse cx="75" cy="55" rx="5" ry="7" fill="#2C3E50" />
        <circle cx="43" cy="52" r="2" fill="#FFF" />
        <circle cx="73" cy="52" r="2" fill="#FFF" />
        <!-- Muzzle -->
        <ellipse cx="60" cy="68" rx="14" ry="10" fill="#FFF" stroke="#9A724F" stroke-width="2" />
        <polygon points="56,64 64,64 60,70" fill="#2C3E50" />
        <path d="M 57 72 Q 60 75, 63 72" fill="none" stroke="#2C3E50" stroke-width="2" stroke-linecap="round" />
        
        <!-- Sherlock Detective Hat -->
        <path d="M 20 30 C 20 5, 100 5, 100 30 Z" fill="#4B6584" stroke="#2D3A4A" stroke-width="3" />
        <ellipse cx="60" cy="30" rx="45" ry="5" fill="#4B6584" stroke="#2D3A4A" stroke-width="3" />
      </g>

      <!-- Magnifying Glass -->
      <g transform="translate(15, 110) rotate(-15)">
        <!-- Handle -->
        <rect x="42" y="55" width="10" height="35" rx="4" fill="#A77B50" stroke="#7E5630" stroke-width="3" />
        <!-- Frame -->
        <circle cx="47" cy="30" r="28" fill="#FFF" fill-opacity="0.8" stroke="#4D96FF" stroke-width="6" />
        <!-- Lens reflection -->
        <path d="M 32 15 Q 47 10, 62 25" fill="none" stroke="#E2E8F0" stroke-width="3" stroke-linecap="round" />
        <!-- A tiny question mark inside the glass -->
        <text x="38" y="42" font-family="'Fredoka', sans-serif" font-weight="bold" font-size="32" fill="#FF6B6B">?</text>
      </g>
    </svg>`,
        segmented: [
          { text: "wh", type: "digraph" },
          { text: "o", type: "vowel" },
          { text: "s", type: "consonant" },
          { text: "e", type: "vowel" }
        ]
      }
    ]
  }
};

// Application State
let currentLesson = 1;
let currentIndex = 0;
let isAutoplayActive = false;
let autoplayTimer = null;
let voices = [];

// DOM Elements
const cardEl = document.getElementById("flashcard");
const cardImageContainer = document.getElementById("card-image-container");
const wordContainerEl = document.getElementById("word-container");
const translationTextEl = document.getElementById("translation-text");
const dotsContainerEl = document.getElementById("dots-indicators");
const lessonTitleEl = document.getElementById("lesson-title");
const lessonSubtitleEl = document.getElementById("lesson-subtitle");

const btnPrev = document.getElementById("btn-prev");
const btnSpeak = document.getElementById("btn-speak");
const btnAutoplay = document.getElementById("btn-autoplay");
const btnNext = document.getElementById("btn-next");
const autoplayTextEl = document.getElementById("autoplay-text");
const autoplayIconEl = document.getElementById("autoplay-icon");

// Lesson Tab Buttons
const lessonTabs = {
  1: document.getElementById("tab-lesson-1"),
  2: document.getElementById("tab-lesson-2"),
  3: document.getElementById("tab-lesson-3"),
  4: document.getElementById("tab-lesson-4")
};

// Initialize Application
function init() {
  initVoices();
  setupLessonTabs();
  setupEventListeners();
  loadLesson(1);
}

// Speech voices setup
function initVoices() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    voices = window.speechSynthesis.getVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = () => {
        voices = window.speechSynthesis.getVoices();
      };
    }
  }
}

// Setup Lesson Tabs
function setupLessonTabs() {
  Object.keys(lessonTabs).forEach((num) => {
    const lessonNum = parseInt(num);
    const tabEl = lessonTabs[lessonNum];
    if (tabEl) {
      tabEl.addEventListener("click", () => {
        if (currentLesson !== lessonNum) {
          loadLesson(lessonNum);
        }
      });
    }
  });
}

// Load Selected Lesson
function loadLesson(lessonNum) {
  if (isAutoplayActive) stopAutoplay();
  
  // Update Active Tab UI
  Object.keys(lessonTabs).forEach((num) => {
    const tabEl = lessonTabs[num];
    if (tabEl) {
      if (parseInt(num) === lessonNum) {
        tabEl.classList.add("active");
      } else {
        tabEl.classList.remove("active");
      }
    }
  });

  currentLesson = lessonNum;
  currentIndex = 0;

  // Set titles
  const lessonData = lessons[currentLesson];
  lessonTitleEl.textContent = lessonData.title;
  lessonSubtitleEl.textContent = lessonData.subtitle;

  // Render first card and recreate dots
  createIndicators();
  renderCard(currentIndex);
}

// Render Card Content
function renderCard(index) {
  const lessonData = lessons[currentLesson];
  const cardData = lessonData.cards[index];
  
  // Apply a clean fade/transition
  cardEl.classList.remove("fade-in");
  cardEl.classList.add("fade-out");
  
  setTimeout(() => {
    // Render image or inline SVG
    if (cardData.svg) {
      cardImageContainer.innerHTML = cardData.svg;
    } else if (cardData.image) {
      cardImageContainer.innerHTML = `<img src="${cardData.image}" alt="${cardData.word} illustration" class="card-image">`;
    } else {
      cardImageContainer.innerHTML = "";
    }
    
    // Render phonics segmented word
    wordContainerEl.innerHTML = "";
    cardData.segmented.forEach((segment) => {
      const span = document.createElement("span");
      
      if (segment.type === "space") {
        span.className = "word-letter space";
        span.innerHTML = "&nbsp;";
      } else {
        span.className = `word-letter ${segment.type}`;
        
        // Split text into characters to style 'J' with a top-bar (Comic Neue style)
        const chars = Array.from(segment.text);
        chars.forEach((char) => {
          const charSpan = document.createElement("span");
          charSpan.textContent = char;
          if (char === 'J') {
            charSpan.style.fontFamily = "'Comic Neue', 'Comic Sans MS', 'Georgia', serif";
            charSpan.style.display = "inline-block";
          }
          span.appendChild(charSpan);
        });
        
        // Children click individual letter segments to hear phoneme sounds
        span.title = `點擊發音 "${segment.text}"`;
        span.addEventListener("click", (e) => {
          e.stopPropagation(); // Prevent card body click from reading full word
          // Speak segment slightly slower and higher pitch for phonetics
          speakWord(segment.text, 1.25, 0.7);
        });
      }
      
      wordContainerEl.appendChild(span);
    });
    
    // Render translation
    translationTextEl.textContent = cardData.translation;
    
    // Update active dot indicator
    updateDots(index);
    
    // Trigger fade in
    cardEl.classList.remove("fade-out");
    cardEl.classList.add("fade-in");
    
    // Speak current word automatically on load, unless autoplay handles it
    if (!isAutoplayActive) {
      speakCurrentWord();
    }
  }, 200);
}

// Create Dot Indicators
function createIndicators() {
  dotsContainerEl.innerHTML = "";
  const lessonData = lessons[currentLesson];
  lessonData.cards.forEach((_, idx) => {
    const dot = document.createElement("button");
    dot.className = `dot ${idx === currentIndex ? 'active' : ''}`;
    dot.setAttribute("aria-label", `移至第 ${idx + 1} 張字卡`);
    dot.addEventListener("click", () => {
      if (isAutoplayActive) stopAutoplay();
      currentIndex = idx;
      renderCard(currentIndex);
    });
    dotsContainerEl.appendChild(dot);
  });
}

// Update Dots
function updateDots(index) {
  const dots = dotsContainerEl.querySelectorAll(".dot");
  dots.forEach((dot, idx) => {
    if (idx === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

// Speak Voice Synthesis (Web Speech API)
function speakWord(text, pitch = 1.15, rate = 0.85) {
  if (!('speechSynthesis' in window)) return;
  
  // Cancel current speech
  window.speechSynthesis.cancel();
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = rate; // Kid-friendly: slightly slower
  utterance.pitch = pitch; // Kid-friendly: slightly higher pitch
  
  // Attempt to select a high quality natural US English voice
  let selectedVoice = voices.find(voice => voice.lang.includes("en-US") && (voice.name.includes("Google") || voice.name.includes("Natural") || voice.name.includes("Zira")));
  if (!selectedVoice) {
    selectedVoice = voices.find(voice => voice.lang.includes("en-US"));
  }
  if (!selectedVoice) {
    selectedVoice = voices.find(voice => voice.lang.includes("en"));
  }
  if (selectedVoice) {
    utterance.voice = selectedVoice;
  }
  
  window.speechSynthesis.speak(utterance);
}

// Speak the current card's full word
// When spelling out initialisms like "USA" or "UK", insert spaces if desired. All lesson 8 words are standard.
function speakCurrentWord() {
  const lessonData = lessons[currentLesson];
  const cardData = lessonData.cards[currentIndex];
  speakWord(cardData.word);
}

// Navigation Functions
function nextCard() {
  const lessonData = lessons[currentLesson];
  currentIndex = (currentIndex + 1) % lessonData.cards.length;
  renderCard(currentIndex);
}

// Prev Card
function prevCard() {
  const lessonData = lessons[currentLesson];
  currentIndex = (currentIndex - 1 + lessonData.cards.length) % lessonData.cards.length;
  renderCard(currentIndex);
}

// Autoplay Slideshow
function startAutoplay() {
  isAutoplayActive = true;
  btnAutoplay.classList.add("active");
  autoplayTextEl.textContent = "停止播放";
  autoplayIconEl.innerHTML = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`;
  
  speakCurrentWord();
  
  autoplayTimer = setInterval(() => {
    nextCard();
  }, 4000);
}

// Stop Autoplay
function stopAutoplay() {
  isAutoplayActive = false;
  btnAutoplay.classList.remove("active");
  autoplayTextEl.textContent = "自動播放";
  autoplayIconEl.innerHTML = `<path d="M8 5v14l11-7z"/>`;
  
  if (autoplayTimer) {
    clearInterval(autoplayTimer);
    autoplayTimer = null;
  }
}

// Toggle Autoplay
function toggleAutoplay() {
  if (isAutoplayActive) {
    stopAutoplay();
  } else {
    startAutoplay();
  }
}

// Event Listeners Setup
function setupEventListeners() {
  btnNext.addEventListener("click", () => {
    if (isAutoplayActive) stopAutoplay();
    nextCard();
  });
  
  btnPrev.addEventListener("click", () => {
    if (isAutoplayActive) stopAutoplay();
    prevCard();
  });
  
  btnSpeak.addEventListener("click", () => {
    speakCurrentWord();
  });
  
  btnAutoplay.addEventListener("click", () => {
    toggleAutoplay();
  });
  
  cardEl.addEventListener("click", (e) => {
    // Avoid triggering full speech if a child span (phoneme) was clicked
    if (e.target.closest('.word-letter') && !e.target.closest('.space')) return;
    speakCurrentWord();
  });
  
  // Keyboard Navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      if (isAutoplayActive) stopAutoplay();
      nextCard();
    } else if (e.key === "ArrowLeft") {
      if (isAutoplayActive) stopAutoplay();
      prevCard();
    } else if (e.key === " " || e.code === "Space") {
      e.preventDefault(); // Stop page scrolling
      speakCurrentWord();
    } else if (e.key === "Enter") {
      e.preventDefault();
      speakCurrentWord();
    }
  });
}

// Initialize on page load
window.addEventListener("DOMContentLoaded", init);
