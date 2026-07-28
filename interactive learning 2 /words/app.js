// Vocabulary Database for Super Fun 8
const VOCABULARY = {
  "1": [
    { english: "last Sunday", chinese: "上個星期日" },
    { english: "an hour ago", chinese: "一個小時前" },
    { english: "yesterday", chinese: "昨天" },
    { english: "ten minutes ago", chinese: "十分鐘前" },
    { english: "this morning", chinese: "今天早上" }
  ],
  "2": [
    { english: "at home", chinese: "在家" },
    { english: "at the museum", chinese: "在博物館" },
    { english: "at school", chinese: "在學校" },
    { english: "at the restaurant", chinese: "在餐廳" },
    { english: "at the amusement park", chinese: "在遊樂園" },
    { english: "at the department store", chinese: "在百貨公司" }
  ],
  "3": [
    { english: "firefighter", chinese: "消防員" },
    { english: "singer", chinese: "歌手" },
    { english: "police officer", chinese: "警察" },
    { english: "YouTuber", chinese: "影片創作者" },
    { english: "baseball player", chinese: "棒球選手" },
    { english: "engineer", chinese: "工程師" },
    { english: "reporter", chinese: "記者" },
    { english: "be", chinese: "成為；是" },
    { english: "scientist", chinese: "科學家" }
  ],
  "4": [
    { english: "phone", chinese: "電話" },
    { english: "watch", chinese: "手錶" },
    { english: "jacket", chinese: "外套" },
    { english: "key", chinese: "鑰匙" },
    { english: "lunch bag", chinese: "午餐袋" },
    { english: "glasses", chinese: "眼鏡" },
    { english: "umbrella", chinese: "雨傘" },
    { english: "shoes", chinese: "鞋子（複數）" },
    { english: "whose", chinese: "誰的" }
  ]
};

// Game State Management
let currentLesson = "1";
let currentWord = null;
let isSpinning = false;
let audioCtx = null;
let synthesisVoice = null;

// DOM Element Selectors
const displayContainer = document.getElementById("display-container");
const leverAssembly = document.getElementById("lever-assembly");
const btnSpin = document.getElementById("btn-spin");
const btnSpeak = document.getElementById("btn-speak");
const btnTranslation = document.getElementById("btn-translation");
const audioOverlay = document.getElementById("audio-overlay");
const btnStartGame = document.getElementById("btn-start-game");

const lightsLeft = document.getElementById("lights-left");
const lightsRight = document.getElementById("lights-right");

// Initialize Bulbs on side panels
function initLights() {
  const lightColors = ["red", "yellow", "green"];
  for (let i = 0; i < 5; i++) {
    // Left bulb
    const bulbLeft = document.createElement("div");
    bulbLeft.className = `light-bulb ${lightColors[i % 3]}`;
    lightsLeft.appendChild(bulbLeft);

    // Right bulb
    const bulbRight = document.createElement("div");
    bulbRight.className = `light-bulb ${lightColors[(i + 1) % 3]}`;
    lightsRight.appendChild(bulbRight);
  }
}

// Audio Synthesizer (Web Audio API)
function initAudioContext() {
  if (audioCtx) return;
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
}

function playSynthSound(type, freqStart, freqEnd, duration, volume = 0.1) {
  if (!audioCtx) return;
  
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }

  const osc = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(freqStart, audioCtx.currentTime);
  if (freqEnd && freqEnd !== freqStart) {
    osc.frequency.exponentialRampToValueAtTime(freqEnd, audioCtx.currentTime + duration);
  }

  gainNode.gain.setValueAtTime(volume, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

  osc.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  osc.start();
  osc.stop(audioCtx.currentTime + duration);
}

// Sound FX Map
const SoundEffects = {
  playLeverPull() {
    playSynthSound("sawtooth", 120, 40, 0.2, 0.15);
  },
  playTick(frequency = 250) {
    playSynthSound("triangle", frequency, frequency - 50, 0.05, 0.1);
  },
  playStop() {
    playSynthSound("sine", 600, 600, 0.1, 0.15);
    setTimeout(() => {
      playSynthSound("sine", 800, 800, 0.12, 0.12);
    }, 70);
  },
  playWin() {
    const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        playSynthSound("triangle", freq, freq, 0.25, 0.08);
      }, idx * 75);
    });
  }
};

// Speech Synthesis Setup (Web Speech API)
function loadVoices() {
  const voices = window.speechSynthesis.getVoices();
  synthesisVoice = voices.find(v => v.lang.includes("en-US")) || 
                   voices.find(v => v.lang.includes("en-GB")) || 
                   voices.find(v => v.lang.startsWith("en")) || 
                   voices[0];
}

if (window.speechSynthesis.onvoiceschanged !== undefined) {
  window.speechSynthesis.onvoiceschanged = loadVoices;
}
loadVoices();

function speakWord(text) {
  if (!text) return;
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  if (synthesisVoice) {
    utterance.voice = synthesisVoice;
  }
  utterance.rate = 0.85;
  utterance.pitch = 1.05;

  window.speechSynthesis.speak(utterance);
}

// Particle Confetti Generator
function createConfetti() {
  const cabinet = document.querySelector(".spinner-cabinet");
  const container = document.createElement("div");
  container.className = "confetti-container";
  cabinet.appendChild(container);

  const colors = ["#f43f5e", "#3b82f6", "#10b981", "#f59e0b", "#a78bfa", "#ec4899"];

  for (let i = 0; i < 40; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.width = `${Math.random() * 6 + 6}px`;
    piece.style.height = `${Math.random() * 12 + 10}px`;
    piece.style.animationDelay = `${Math.random() * 0.3}s`;
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;

    container.appendChild(piece);
  }

  setTimeout(() => {
    container.remove();
  }, 2000);
}

function getWordPool() {
  if (currentLesson === "all") {
    return [
      ...VOCABULARY["1"],
      ...VOCABULARY["2"],
      ...VOCABULARY["3"],
      ...VOCABULARY["4"]
    ];
  }
  return VOCABULARY[currentLesson] || [];
}

// Reel Rolling Animation
function triggerSpin() {
  if (isSpinning) return;
  isSpinning = true;

  initAudioContext();
  SoundEffects.playLeverPull();

  // Trigger CSS lever pull
  leverAssembly.classList.add("pulled");
  setTimeout(() => {
    leverAssembly.classList.remove("pulled");
  }, 250);

  btnSpin.disabled = true;
  btnSpeak.disabled = true;
  btnTranslation.disabled = true;
  document.querySelectorAll(".lesson-btn").forEach(btn => btn.disabled = true);

  const pool = getWordPool();
  let target;
  if (pool.length > 1) {
    do {
      target = pool[Math.floor(Math.random() * pool.length)];
    } while (currentWord && target.english === currentWord.english);
  } else {
    target = pool[0];
  }

  const reelLength = 20;
  displayContainer.innerHTML = "";

  const itemHeight = 200;
  
  for (let i = 0; i < reelLength; i++) {
    const card = document.createElement("div");
    card.className = "word-card";
    
    let wordObj;
    if (i === 0) {
      wordObj = currentWord || { english: "🎯 Ready?", chinese: "準備好了嗎？" };
    } else if (i === reelLength - 1) {
      wordObj = target;
    } else {
      wordObj = pool[Math.floor(Math.random() * pool.length)];
    }

    card.innerHTML = `
      <span class="word-text spinning-blur">${wordObj.english}</span>
      <span class="translation-text hidden">${wordObj.chinese}</span>
    `;
    displayContainer.appendChild(card);
  }

  displayContainer.style.transition = "none";
  displayContainer.style.transform = `translateY(0)`;
  
  displayContainer.offsetHeight;

  const spinDuration = 2500;
  displayContainer.style.transition = `transform ${spinDuration}ms cubic-bezier(0.12, 0.65, 0.18, 1)`;
  displayContainer.style.transform = `translateY(-${(reelLength - 1) * itemHeight}px)`;

  const totalTicks = 22;
  let tickCount = 0;
  
  function triggerNextTick() {
    if (tickCount >= totalTicks) return;
    
    const progress = tickCount / totalTicks;
    const nextInterval = 35 + Math.pow(progress, 3) * 350;
    const tickFreq = 300 - progress * 120;
    
    SoundEffects.playTick(tickFreq);
    tickCount++;
    
    setTimeout(triggerNextTick, nextInterval);
  }
  
  setTimeout(triggerNextTick, 50);

  setTimeout(() => {
    displayContainer.style.transition = "none";
    displayContainer.style.transform = "translateY(0)";
    
    displayContainer.innerHTML = `
      <div class="word-card" id="word-card">
        <span class="word-text" id="display-word">${target.english}</span>
        <span class="translation-text hidden" id="display-translation">${target.chinese}</span>
      </div>
    `;

    currentWord = target;
    isSpinning = false;

    btnSpin.disabled = false;
    btnSpeak.disabled = false;
    btnTranslation.disabled = false;
    btnTranslation.innerHTML = `
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
      <span>Show Meaning</span>
    `;
    
    document.querySelectorAll(".lesson-btn").forEach(btn => btn.disabled = false);

    SoundEffects.playStop();
    setTimeout(() => {
      SoundEffects.playWin();
      createConfetti();
    }, 200);

  }, spinDuration);
}

// Events
function setupEventListeners() {
  document.querySelectorAll(".lesson-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      initAudioContext();
      
      const targetBtn = e.currentTarget;
      document.querySelectorAll(".lesson-btn").forEach(b => b.classList.remove("active"));
      targetBtn.classList.add("active");
      currentLesson = targetBtn.getAttribute("data-lesson");

      currentWord = null;
      btnSpeak.disabled = true;
      btnTranslation.disabled = true;
      displayContainer.innerHTML = `
        <div class="word-card initial" id="word-card">
          <span class="word-text" id="display-word">Lesson ${currentLesson.toUpperCase()} Ready!</span>
          <span class="translation-text hidden" id="display-translation">拉下搖桿開始！</span>
        </div>
      `;
      SoundEffects.playTick(400);
    });
  });

  leverAssembly.addEventListener("click", () => {
    if (!isSpinning) triggerSpin();
  });

  btnSpin.addEventListener("click", () => {
    if (!isSpinning) triggerSpin();
  });

  btnSpeak.addEventListener("click", () => {
    if (currentWord && !isSpinning) {
      speakWord(currentWord.english);
    }
  });

  btnTranslation.addEventListener("click", () => {
    if (!currentWord || isSpinning) return;

    const translationNode = document.getElementById("display-translation");
    if (translationNode) {
      const isHidden = translationNode.classList.contains("hidden");
      if (isHidden) {
        translationNode.classList.remove("hidden");
        btnTranslation.innerHTML = `
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/>
            <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/>
            <path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/>
            <line x1="2" y1="2" x2="22" y2="22"/>
          </svg>
          <span>Hide Meaning</span>
        `;
        SoundEffects.playTick(500);
      } else {
        translationNode.classList.add("hidden");
        btnTranslation.innerHTML = `
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
          <span>Show Meaning</span>
        `;
        SoundEffects.playTick(300);
      }
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.code === "Space" || e.keyCode === 32) {
      e.preventDefault();
      if (!isSpinning) {
        triggerSpin();
      }
    }
  });

  btnStartGame.addEventListener("click", () => {
    initAudioContext();
    audioOverlay.classList.add("hidden");
    setTimeout(() => {
      SoundEffects.playWin();
    }, 100);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  initLights();
  setupEventListeners();
});
