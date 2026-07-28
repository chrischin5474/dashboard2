// Super Fun 8 Quiz Questions Database with Explanations
const questionsData = {
    1: [
        {
            id: "t1_q1",
            questionEn: "What physical feature of the T-Rex is mentioned in the story?",
            questionZh: "故事中提到了暴龍的什麼身體特徵？",
            options: [
                "It has long arms and thirty teeth.",
                "It has sixty teeth and short arms.",
                "It has no teeth and long legs.",
                "It has a long tail and big eyes."
            ],
            correctIndex: 1,
            explanation: "暴龍有六十顆牙齒和短手臂 (sixty teeth and short arms)。這在故事第三行 Mike 剛出場時有明確提及。"
        },
        {
            id: "t1_q2",
            questionEn: "Who was making a robot in the science lab?",
            questionZh: "誰在科學實驗室裡做機器人？",
            options: [
                "Mike",
                "Ken",
                "Tess",
                "Alan"
            ],
            correctIndex: 2,
            explanation: "Tess 正在製作機器人 (making a robot)。故事中 Mike 去科學實驗室時問 Tess 在做什麼，Tess 如此回答。"
        },
        {
            id: "t1_q3",
            questionEn: "What does Tess suggest Mike should do?",
            questionZh: "Tess 建議 Mike 應該要做什麼？",
            options: [
                "Eat some hot food.",
                "Ride a bike.",
                "Wear glasses like her.",
                "Wash his hands with soap."
            ],
            correctIndex: 2,
            explanation: "Tess 建議 Mike 應該要像她一樣戴眼鏡 (wear glasses like me)。"
        },
        {
            id: "t1_q4",
            questionEn: "Where was Mike this morning before going to the restaurant?",
            questionZh: "Mike 今天早上在去餐廳之前在哪裡？",
            options: [
                "At the Science Lab",
                "At the farm",
                "At his house",
                "At the park"
            ],
            correctIndex: 0,
            explanation: "Mike 在回想行程時提到：「我今天早上在科學實驗室 (Science Lab)」，隨後才去了餐廳。"
        },
        {
            id: "t1_q5",
            questionEn: "Who else was at the restaurant besides Mike?",
            questionZh: "除了 Mike 以外，還有誰也在餐廳？",
            options: [
                "Tess",
                "Alan",
                "Ken",
                "Wendy"
            ],
            correctIndex: 2,
            explanation: "Mike 說他當時在餐廳，且 Ken 也在那裡 (Ken was there, too)。"
        },
        {
            id: "t1_q6",
            questionEn: "How does Mike keep his glasses clear when eating hot food?",
            questionZh: "Mike 如何在吃熱食時保持眼鏡清晰？",
            options: [
                "By wiping them with a paper towel",
                "By washing them with some soap",
                "By putting them in cold water",
                "By taking them off"
            ],
            correctIndex: 1,
            explanation: "Mike 說他會用一些肥皂 (some soap) 來清洗眼鏡，這樣在吃熱食時就不會起霧，能看得清楚。"
        },
        {
            id: "t1_q7",
            questionEn: "Where did Mike go after lunch?",
            questionZh: "吃完午餐後 Mike 在哪裡？",
            options: [
                "At the science lab",
                "At the restaurant",
                "At the park",
                "At Alan's town"
            ],
            correctIndex: 1,
            explanation: "當被問到午餐後 Ken 是否還跟他在一起時，Mike 說 Ken 不在，但他自己吃完午餐後仍然在餐廳 (But I was there after lunch)。"
        },
        {
            id: "t1_q8",
            questionEn: "Who returned the glasses to Mike at the restaurant?",
            questionZh: "誰在餐廳裡把眼鏡還給 Mike？",
            options: [
                "Ken",
                "Tess",
                "The girl who was at the restaurant after lunch",
                "Alan"
            ],
            correctIndex: 2,
            explanation: "在餐廳吃完午餐後，留在餐廳的女孩對 Mike 說：「我想這是你的眼鏡 (I think they're your glasses)」，並還給了他。"
        },
        {
            id: "t1_q9",
            questionEn: "Based on the story, when was Mike at the restaurant with the glasses?",
            questionZh: "根據故事，Mike 大約是在多久前把眼鏡留在那裡的？",
            options: [
                "Two hours ago",
                "This morning",
                "Yesterday",
                "In the evening"
            ],
            correctIndex: 0,
            explanation: "女孩詢問 Mike：「你兩小時前是在這裡嗎？(Were you here two hours ago?)」，Mike 回答是的，這說明他是兩小時前丟失眼鏡的。"
        },
        {
            id: "t1_q10",
            questionEn: "Why did Mike need to take off his glasses in the dark place?",
            questionZh: "為什麼 Mike 在黑暗的地方需要拿下來眼鏡？",
            options: [
                "Because they were dirty.",
                "Because he wanted to sleep.",
                "Because it was dark and he wanted to see the beautiful view.",
                "Because he lost them."
            ],
            correctIndex: 2,
            explanation: "Mike 說：「這裡好暗 (It's dark here)。我需要將我的眼鏡拿下來。」，雖然拿下後什麼都看不見，但看到夜空時驚呼這真美 (It's beautiful!)。"
        },
        {
            id: "t1_q11",
            questionEn: "What happened after Mike took off his glasses in the dark?",
            questionZh: "Mike 在黑暗中拿下眼鏡後發生了什麼事？",
            options: [
                "He could see everything clearly.",
                "He couldn't see anything.",
                "He found his bike.",
                "He fell asleep."
            ],
            correctIndex: 1,
            explanation: "Mike 拿下眼鏡後表示：「但我看不見任何東西 (But I can't see anything)。」"
        },
        {
            id: "t1_q12",
            questionEn: "What did Mike realize was missing at the end of Topic 1?",
            questionZh: "在 Topic 1 的最後，Mike 發現什麼東西不見了？",
            options: [
                "His glasses",
                "His robot",
                "His bike",
                "His shoes"
            ],
            correctIndex: 2,
            explanation: "Mike 在最後大喊：「等等！我的自行車在哪裡？(Wait! Where's my bike?)」，發現自行車不見了。"
        }
    ],
    2: [
        {
            id: "t2_q1",
            questionEn: "What is Ken good at doing?",
            questionZh: "Ken 擅長做什麼？",
            options: [
                "Singing songs",
                "Shooting videos",
                "Playing baseball",
                "Riding a bike"
            ],
            correctIndex: 2,
            explanation: "故事第二章開頭就提到：Ken 擅長打棒球 (Ken is good at playing baseball)。"
        },
        {
            id: "t2_q2",
            questionEn: "What does Ken want to be in the future?",
            questionZh: "Ken 未來想成為什麼？",
            options: [
                "A YouTuber",
                "A baseball player",
                "A farmer",
                "A singer"
            ],
            correctIndex: 1,
            explanation: "Ken 自己說他想成為一名棒球選手 (He wants to be a baseball player)。"
        },
        {
            id: "t2_q3",
            questionEn: "What does Alan want to be?",
            questionZh: "Alan 想成為什麼？",
            options: [
                "A YouTuber",
                "A baseball player",
                "A teacher",
                "A warrior"
            ],
            correctIndex: 0,
            explanation: "當被問到想從事什麼職業時，Alan 回答說：「我想成為一個 YouTuber (I want to be a YouTuber)。」"
        },
        {
            id: "t2_q4",
            questionEn: "Where does Alan invite others to shoot a video?",
            questionZh: "Alan 邀請其他人去哪裡拍攝影片？",
            options: [
                "To his school",
                "To his town",
                "To a restaurant",
                "To a science lab"
            ],
            correctIndex: 1,
            explanation: "Alan 邀請大家：「你可以到我住的鎮上 (my town) 拍攝一部影片。」"
        },
        {
            id: "t2_q5",
            questionEn: "Whose shoes are found during the warrior activity?",
            questionZh: "在勇士體驗活動中發現了誰的鞋子？",
            options: [
                "Alan's",
                "Ken's",
                "Mike's",
                "Emma's"
            ],
            correctIndex: 2,
            explanation: "在小勇士活動中，有人問「這些鞋子是誰的呢？」，大家回答是 Mike 的鞋子 (Mike's shoes)。"
        },
        {
            id: "t2_q6",
            questionEn: "Whose dress is described as beautiful in the story?",
            questionZh: "故事中誰的洋裝被形容為很美麗？",
            options: [
                "Emma's",
                "Tess's",
                "The girl who says 'It's my dress'",
                "Wendy's"
            ],
            correctIndex: 2,
            explanation: "有人稱讚洋裝很美麗並問這是誰的，女孩回答：「這是我的洋裝 (It's my dress)。」"
        },
        {
            id: "t2_q7",
            questionEn: "What do they need to do before making bamboo rice for lunch?",
            questionZh: "在做竹筒飯當午餐之前，他們需要做什麼？",
            options: [
                "Clean the kitchen",
                "Cut the bamboo first",
                "Catch a fish",
                "Wash the rice"
            ],
            correctIndex: 1,
            explanation: "當被問到是否要做竹筒飯當午餐時，回答是：「是的，但我們要先砍竹子 (we need to cut the bamboo first)。」"
        },
        {
            id: "t2_q8",
            questionEn: "Who does the guide praise with 'Good job!' while preparing the lunch?",
            questionZh: "在準備午餐時，引導者對誰說了「做得好！」？",
            options: [
                "Emma",
                "Mike",
                "Wendy",
                "Alan"
            ],
            correctIndex: 2,
            explanation: "在準備午餐時，引導者對 Wendy 砍竹子的表現讚許道：「做得好，Wendy！ (Good job, Wendy!)」"
        },
        {
            id: "t2_q9",
            questionEn: "What career does Emma want to pursue because she sings so well?",
            questionZh: "因為歌唱得很好，Emma 想要從事什麼職業？",
            options: [
                "A YouTuber",
                "A baseball player",
                "A farmer",
                "A singer"
            ],
            correctIndex: 3,
            explanation: "故事中對 Emma 說「妳歌唱得很好，妳想當一個歌手嗎？」，Emma 回答是的 (Yes, I do)。"
        },
        {
            id: "t2_q10",
            questionEn: "How do they describe Alan's video?",
            questionZh: "他們如何形容 Alan 的影片？",
            options: [
                "It is very boring.",
                "It is super fun.",
                "It is too long.",
                "It is very scary."
            ],
            correctIndex: 1,
            explanation: "當 Alan 問大家喜不喜歡他的影片時，大家回答說：「當然！它真的超級有趣的 (Yes! It's super fun)。」"
        },
        {
            id: "t2_q11",
            questionEn: "Why are Emma and others gathered in the 'Culture & Festivals' section?",
            questionZh: "在「文化與節慶」部分，Emma 和其他人聚在一起是為了什麼？",
            options: [
                "For World Bicycle Day",
                "For a baseball game",
                "For a singing competition",
                "For a farming festival"
            ],
            correctIndex: 0,
            explanation: "Emma 對 Mike 說他們聚在這裡是為了世界自行車日 (World Bicycle Day)。"
        },
        {
            id: "t2_q12",
            questionEn: "How long does it take for crops to grow into rice?",
            questionZh: "作物生長大約需要多久才能變成稻米？",
            options: [
                "About six weeks",
                "About six months",
                "About a year",
                "About two months"
            ],
            correctIndex: 1,
            explanation: "農夫在介紹時說：「稻米生長大約需要六個月 (It takes about six months to grow into rice)。」"
        }
    ]
};

// Quiz Application State
let currentTopic = null;
let currentQuestionIndex = 0;
let userAnswers = []; // Stores the index of chosen option for each question

// DOM Elements
const homeView = document.getElementById('home-view');
const quizView = document.getElementById('quiz-view');
const resultsView = document.getElementById('results-view');

const topic1Card = document.getElementById('topic-1-card');
const topic2Card = document.getElementById('topic-2-card');

const quizTopicTitle = document.getElementById('quiz-topic-title');
const quizProgressText = document.getElementById('quiz-progress-text');
const progressBar = document.getElementById('progress-bar');
const questionEnEl = document.getElementById('question-en');
const questionZhEl = document.getElementById('question-zh');
const optionsContainer = document.getElementById('options-container');

// Explanation elements
const explanationBox = document.getElementById('explanation-box');
const explanationIcon = document.getElementById('explanation-icon');
const explanationStatusText = document.getElementById('explanation-status-text');
const explanationText = document.getElementById('explanation-text');
const explanationTitle = document.getElementById('explanation-title');

const btnExit = document.getElementById('btn-exit');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

const exitModal = document.getElementById('exit-modal');
const btnConfirmExit = document.getElementById('btn-confirm-exit');
const btnCancelExit = document.getElementById('btn-cancel-exit');

const scoreValEl = document.getElementById('score-val');
const scoreTotalEl = document.getElementById('score-total');
const resultHeadlineEl = document.getElementById('result-headline');
const resultFeedbackEl = document.getElementById('result-feedback');
const btnRestart = document.getElementById('btn-restart');
const btnHome = document.getElementById('btn-home');
const reviewListEl = document.getElementById('review-list');

// Initialize App
function init() {
    // Topic card clicks
    topic1Card.addEventListener('click', () => startQuiz(1));
    topic2Card.addEventListener('click', () => startQuiz(2));
    
    // Quiz controls
    btnExit.addEventListener('click', confirmExitQuiz);
    btnPrev.addEventListener('click', prevQuestion);
    btnNext.addEventListener('click', nextQuestion);
    
    // Modal buttons
    btnConfirmExit.addEventListener('click', executeExit);
    btnCancelExit.addEventListener('click', () => exitModal.classList.remove('active'));
    
    // Result actions
    btnRestart.addEventListener('click', restartQuiz);
    btnHome.addEventListener('click', showHome);
}

// Start Quiz Session
function startQuiz(topicId) {
    currentTopic = topicId;
    currentQuestionIndex = 0;
    const questions = questionsData[currentTopic];
    userAnswers = new Array(questions.length).fill(null);
    
    // Update view state
    homeView.classList.add('hidden');
    resultsView.classList.add('hidden');
    quizView.classList.remove('hidden');
    
    // Update Header Topic text
    quizTopicTitle.innerText = `Topic ${currentTopic} : ${currentTopic === 1 ? 'Story Time' : 'Careers & Warriors'}`;
    
    // Render first question
    showQuestion(0);
}

// Render Active Question
function showQuestion(index) {
    currentQuestionIndex = index;
    const questions = questionsData[currentTopic];
    const question = questions[currentQuestionIndex];
    const answeredOption = userAnswers[currentQuestionIndex];
    const isAnswered = answeredOption !== null;
    
    // Progress update
    const totalQ = questions.length;
    quizProgressText.innerText = `Question ${currentQuestionIndex + 1} of ${totalQ}`;
    const progressPercent = ((currentQuestionIndex + 1) / totalQ) * 100;
    progressBar.style.width = `${progressPercent}%`;
    
    // Set Question Text
    questionEnEl.innerText = question.questionEn;
    questionZhEl.innerText = question.questionZh;
    
    // Render Options
    optionsContainer.innerHTML = '';
    question.options.forEach((option, optIdx) => {
        const optionCard = document.createElement('div');
        optionCard.className = 'option-card';
        
        // Define styling classes based on whether the question has been answered
        if (isAnswered) {
            if (optIdx === question.correctIndex) {
                // Correct answer is highlighted in green
                optionCard.classList.add('correct');
            } else if (optIdx === answeredOption) {
                // User's wrong pick is highlighted in red
                optionCard.classList.add('incorrect');
            } else {
                // Other options are dimmed
                optionCard.classList.add('disabled');
            }
        }
        
        // Option Marker (A, B, C, D)
        const marker = String.fromCharCode(65 + optIdx);
        
        optionCard.innerHTML = `
            <div class="option-marker">${marker}</div>
            <div class="option-text">${option}</div>
        `;
        
        // If not answered yet, attach click handler
        if (!isAnswered) {
            optionCard.addEventListener('click', () => selectOption(optIdx));
        }
        
        optionsContainer.appendChild(optionCard);
    });
    
    // Manage explanation box display
    if (isAnswered) {
        showExplanation(answeredOption === question.correctIndex, question.correctIndex, question.explanation);
    } else {
        explanationBox.classList.add('hidden');
    }
    
    // Manage controls navigation state
    btnPrev.disabled = currentQuestionIndex === 0;
    
    // Next button is disabled until answered
    btnNext.disabled = !isAnswered;
    
    // Update button text and class
    if (currentQuestionIndex === totalQ - 1) {
        btnNext.innerHTML = `Submit <span class="btn-icon-right">➔</span>`;
        if (isAnswered) {
            btnNext.className = "btn btn-primary";
        } else {
            btnNext.className = "btn btn-outline";
        }
    } else {
        btnNext.innerHTML = `後一題 <span class="btn-icon-right">➔</span>`;
        if (isAnswered) {
            btnNext.className = "btn btn-primary";
        } else {
            btnNext.className = "btn btn-outline";
        }
    }
}

// Select Option & Handle instant feedback
function selectOption(optionIndex) {
    const question = questionsData[currentTopic][currentQuestionIndex];
    userAnswers[currentQuestionIndex] = optionIndex;
    const isCorrect = optionIndex === question.correctIndex;
    
    // Disable clicks and render feedback styles immediately
    const optionCards = optionsContainer.querySelectorAll('.option-card');
    optionCards.forEach((card, idx) => {
        if (idx === question.correctIndex) {
            card.className = 'option-card correct'; // Highlight correct green
        } else if (idx === optionIndex) {
            card.className = 'option-card incorrect'; // Highlight wrong pick red
        } else {
            card.className = 'option-card disabled'; // Disable other choices
        }
        // Remove event listener behavior implicitly since we rebuild on state or just lock them
    });
    
    // Render Explanation Box
    showExplanation(isCorrect, question.correctIndex, question.explanation);
    
    // Enable Next/Submit control button
    btnNext.disabled = false;
    btnNext.className = "btn btn-primary";
}

// Render the explanation box
function showExplanation(isCorrect, correctIndex, explanationTextStr) {
    explanationBox.classList.remove('hidden');
    
    // Reset classes
    explanationBox.className = 'explanation-box';
    explanationTitle.className = 'explanation-title';
    
    const correctLetter = String.fromCharCode(65 + correctIndex);
    
    if (isCorrect) {
        explanationBox.classList.add('correct');
        explanationTitle.classList.add('correct');
        explanationIcon.innerHTML = '✔';
        explanationStatusText.innerText = '答對了！答得很好！';
    } else {
        explanationBox.classList.add('incorrect');
        explanationTitle.classList.add('incorrect');
        explanationIcon.innerHTML = '✘';
        explanationStatusText.innerText = `答錯了！正確答案是 (${correctLetter})`;
    }
    
    explanationText.innerText = explanationTextStr;
}

// Go to Previous Question
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        showQuestion(currentQuestionIndex - 1);
    }
}

// Go to Next Question or Submit
function nextQuestion() {
    const questions = questionsData[currentTopic];
    
    // Safety check - button should be disabled, but just in case
    if (userAnswers[currentQuestionIndex] === null) {
        alert("每一題都必須作答後，才能進行下一題！");
        return;
    }
    
    if (currentQuestionIndex < questions.length - 1) {
        showQuestion(currentQuestionIndex + 1);
    } else {
        submitQuiz();
    }
}

// Exit Quiz Confirm
function confirmExitQuiz() {
    exitModal.classList.add('active');
}

// Execute Quiz Exit
function executeExit() {
    exitModal.classList.remove('active');
    showHome();
}

// Submit Quiz & Show Results
function submitQuiz() {
    const questions = questionsData[currentTopic];
    let score = 0;
    
    questions.forEach((q, idx) => {
        if (userAnswers[idx] === q.correctIndex) {
            score++;
        }
    });
    
    // Show results view
    quizView.classList.add('hidden');
    resultsView.classList.remove('hidden');
    
    // Score display
    scoreValEl.innerText = score;
    scoreTotalEl.innerText = `/${questions.length}`;
    
    // Performance assessment
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) {
        resultHeadlineEl.innerText = "完美滿分！🌟";
        resultFeedbackEl.innerText = "太神奇了！您答對了所有題目，對故事內容有著完美的理解！";
    } else if (percentage >= 80) {
        resultHeadlineEl.innerText = "非常優秀！🎉";
        resultFeedbackEl.innerText = "做得很棒！您對故事的大部分細節都掌握得十分扎實。";
    } else if (percentage >= 50) {
        resultHeadlineEl.innerText = "繼續加油！👍";
        resultFeedbackEl.innerText = "表現不錯！您可以透過下方的答題詳情回顧，再次複習沒答對的部分。";
    } else {
        resultHeadlineEl.innerText = "重整旗鼓！📚";
        resultFeedbackEl.innerText = "不要氣餒！請點擊下方的回顧看看錯誤的原因，並多挑戰幾次吧！";
    }
    
    // Render Review Section
    renderReviewSection();
}

// Render detailed answers review
function renderReviewSection() {
    const questions = questionsData[currentTopic];
    reviewListEl.innerHTML = '';
    
    questions.forEach((q, qIdx) => {
        const isCorrect = userAnswers[qIdx] === q.correctIndex;
        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;
        
        let optionsHTML = '';
        q.options.forEach((opt, optIdx) => {
            let pillClass = '';
            let badgeText = '';
            
            if (optIdx === q.correctIndex) {
                pillClass = 'correct-ans';
                badgeText = '<span class="review-opt-badge">正確答案</span>';
            } else if (optIdx === userAnswers[qIdx] && !isCorrect) {
                pillClass = 'selected-wrong';
                badgeText = '<span class="review-opt-badge">您的選擇</span>';
            }
            
            const marker = String.fromCharCode(65 + optIdx);
            optionsHTML += `
                <div class="review-opt-pill ${pillClass}">
                    <strong>${marker}.</strong> ${opt} ${badgeText}
                </div>
            `;
        });
        
        reviewItem.innerHTML = `
            <div class="review-q-num">第 ${qIdx + 1} 題 (${isCorrect ? '答對' : '答錯'})</div>
            <div class="review-q-text">${q.questionEn}</div>
            <div class="review-q-trans">${q.questionZh}</div>
            <div class="review-opt-grid">
                ${optionsHTML}
            </div>
            <div class="explanation-box ${isCorrect ? 'correct' : 'incorrect'}" style="margin-top: 1rem; margin-bottom: 0;">
                <div class="explanation-title ${isCorrect ? 'correct' : 'incorrect'}">
                    <span>💡</span>
                    <span>解析：</span>
                </div>
                <div class="explanation-text">${q.explanation}</div>
            </div>
        `;
        
        reviewListEl.appendChild(reviewItem);
    });
}

// Restart current quiz
function restartQuiz() {
    startQuiz(currentTopic);
}

// Show Home view
function showHome() {
    quizView.classList.add('hidden');
    resultsView.classList.add('hidden');
    homeView.classList.remove('hidden');
    currentTopic = null;
}

// Run init on DOM load
document.addEventListener('DOMContentLoaded', init);
