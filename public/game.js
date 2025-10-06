// --- 1. QUIZ DATA (Physics Class 9) ---
const quizData = {
    level1: [
        [
            { question: "What is the SI unit of force?", options: ["Joule", "Newton", "Watt", "Pascal"], answer: 1 },
            { question: "Speed = ?", options: ["Distance / Time", "Force / Area", "Work / Time", "Mass × Acceleration"], answer: 0 },
            { question: "What does 1 Newton mean?", options: ["1 kg/s²", "1 kg·m/s²", "1 m/s²", "1 J/s"], answer: 1 },
        ],
        [
            { question: "Which quantity is scalar?", options: ["Velocity", "Displacement", "Speed", "Force"], answer: 2 },
            { question: "Work is said to be done when?", options: ["A force is applied", "Object moves", "Force applied and displacement occurs", "None"], answer: 2 },
            { question: "Energy of motion is called?", options: ["Potential Energy", "Kinetic Energy", "Mechanical Energy", "Thermal Energy"], answer: 1 },
        ],
        [
            { question: "Which of these is NOT a fundamental quantity?", options: ["Mass", "Time", "Force", "Length"], answer: 2 },
            { question: "SI unit of energy is?", options: ["Joule", "Newton", "Watt", "Pascal"], answer: 0 },
            { question: "1 km/h = ?", options: ["0.27 m/s", "2.7 m/s", "27 m/s", "0.0027 m/s"], answer: 0 },
        ],
        [
            { question: "Which of these is a vector?", options: ["Speed", "Displacement", "Mass", "Distance"], answer: 1 },
            { question: "SI unit of pressure?", options: ["Pascal", "Newton", "Joule", "Watt"], answer: 0 },
            { question: "Gravitational acceleration on Earth?", options: ["8.9 m/s²", "9.8 m/s²", "10.8 m/s²", "1 m/s²"], answer: 1 },
        ],
        [
            { question: "Who gave the three laws of motion?", options: ["Einstein", "Newton", "Galileo", "Kepler"], answer: 1 },
            { question: "Force = ?", options: ["Mass × Velocity", "Mass × Acceleration", "Work / Time", "Distance / Time"], answer: 1 },
            { question: "SI unit of power?", options: ["Watt", "Joule", "Pascal", "Newton"], answer: 0 },
        ]
    ],

    level2: [
        [
            { question: "Newton’s First Law is also called?", options: ["Law of Acceleration", "Law of Inertia", "Law of Force", "Law of Momentum"], answer: 1 },
            { question: "Which force opposes motion?", options: ["Magnetic Force", "Friction", "Gravitational Force", "Electrostatic Force"], answer: 1 },
            { question: "Momentum = ?", options: ["Mass × Acceleration", "Mass × Velocity", "Force × Time", "Work / Time"], answer: 1 },
        ],
        [
            { question: "What happens when net force on an object is zero?", options: ["It accelerates", "Remains at rest or moves uniformly", "Stops immediately", "Moves in circle"], answer: 1 },
            { question: "Which of these is non-contact force?", options: ["Friction", "Muscular", "Gravitational", "Spring"], answer: 2 },
            { question: "Unit of momentum?", options: ["kg·m/s", "N·m", "J/s", "m/s²"], answer: 0 },
        ],
        [
            { question: "Acceleration due to gravity decreases with?", options: ["Height", "Depth", "Both height and depth", "None"], answer: 2 },
            { question: "Value of g on moon?", options: ["1.62 m/s²", "9.8 m/s²", "3.7 m/s²", "0 m/s²"], answer: 0 },
            { question: "SI unit of universal gravitational constant (G)?", options: ["N·m²/kg²", "m/s²", "kg·m/s", "J"], answer: 0 },
        ],
        [
            { question: "Force required to stop a moving body depends on?", options: ["Velocity only", "Mass only", "Both mass and velocity", "None"], answer: 2 },
            { question: "Inertia depends on?", options: ["Velocity", "Acceleration", "Mass", "Force"], answer: 2 },
            { question: "F = ma is Newton’s?", options: ["First Law", "Second Law", "Third Law", "Law of Gravitation"], answer: 1 },
        ],
        [
            { question: "Action and reaction forces act on?", options: ["Same body", "Different bodies", "Always in forward direction", "None"], answer: 1 },
            { question: "SI unit of force?", options: ["Pascal", "Joule", "Newton", "Watt"], answer: 2 },
            { question: "Projectile motion is combination of?", options: ["Vertical motion", "Horizontal motion", "Both vertical & horizontal", "Circular motion"], answer: 2 },
        ]
    ],

    level3: [
        [
            { question: "Work done = ?", options: ["Force × Distance", "Force × Velocity", "Power × Time", "Energy × Time"], answer: 0 },
            { question: "SI unit of work?", options: ["Watt", "Joule", "Newton", "Pascal"], answer: 1 },
            { question: "Work done is zero when force is?", options: ["In direction of displacement", "Opposite displacement", "Perpendicular to displacement", "None"], answer: 2 },
        ],
        [
            { question: "Kinetic energy formula?", options: ["½mv²", "mgh", "F × d", "P × t"], answer: 0 },
            { question: "Potential energy depends on?", options: ["Mass and velocity", "Mass and height", "Force and distance", "None"], answer: 1 },
            { question: "Power = ?", options: ["Work / Force", "Work / Time", "Energy × Time", "Force × Time"], answer: 1 },
        ],
        [
            { question: "Law of conservation of energy states?", options: ["Energy is created", "Energy is destroyed", "Energy can’t be created/destroyed", "Energy = Mass × Velocity"], answer: 2 },
            { question: "SI unit of power?", options: ["Newton", "Joule", "Watt", "Pascal"], answer: 2 },
            { question: "1 kilowatt = ?", options: ["100 J", "1000 W", "100 W", "10 W"], answer: 1 },
        ],
        [
            { question: "Which of these is renewable energy?", options: ["Coal", "Petroleum", "Solar", "Natural Gas"], answer: 2 },
            { question: "Rate of doing work is?", options: ["Energy", "Power", "Force", "Momentum"], answer: 1 },
            { question: "Mechanical energy = ?", options: ["KE + PE", "Force × Distance", "Work / Time", "Mass × Acceleration"], answer: 0 },
        ],
        [
            { question: "When a body falls freely, its potential energy?", options: ["Increases", "Decreases", "Constant", "Zero"], answer: 1 },
            { question: "Which has more kinetic energy?", options: ["Slower object", "Faster object", "Both same", "Depends on mass only"], answer: 1 },
            { question: "Energy possessed by a stretched spring?", options: ["Kinetic", "Potential", "Thermal", "Nuclear"], answer: 1 },
        ]
    ]
};

// --- 2. STATE AND ELEMENT REFERENCES ---
let attempted = 0;
let correct = 0;
let wrong = 0;
let score = 0;
let currentQuestion = 0;
let currentLevelQuestions = [];
let currentLevelId = null;

let quizOverlay, quizCard, quizQuestion, quizOptions, quizProgress, nextBtn, skipBtn;

// --- TIMER STATE ---
let timerInterval;
let timeLeft = 15;
let quizTimerDisplay;

// --- 3. HELPER FUNCTIONS ---
function saveStats() {
    if (!currentLevelId) return;
    localStorage.setItem(`${currentLevelId}_attempted`, attempted);
    localStorage.setItem(`${currentLevelId}_correct`, correct);
    localStorage.setItem(`${currentLevelId}_wrong`, wrong);
    localStorage.setItem(`${currentLevelId}_score`, score);
}

function loadStats() {
    if (!currentLevelId) return;
    attempted = parseInt(localStorage.getItem(`${currentLevelId}_attempted`)) || 0;
    correct = parseInt(localStorage.getItem(`${currentLevelId}_correct`)) || 0;
    wrong = parseInt(localStorage.getItem(`${currentLevelId}_wrong`)) || 0;
    score = parseInt(localStorage.getItem(`${currentLevelId}_score`)) || 0;
    updateStats();
}

function updateStats() {
    const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
    document.getElementById("statAttempted").textContent = attempted;
    document.getElementById("statCorrect").textContent = correct;
    document.getElementById("statWrong").textContent = wrong;
    document.getElementById("statAccuracy").textContent = accuracy + "%";
    document.getElementById("statScore").textContent = score;
    saveStats();
}

// --- FIX APPLIED HERE: Get questions by level ---
function getQuestionsForLevel(levelId) {
    let key = levelId;
    if (typeof levelId === 'number' || (typeof levelId === 'string' && /^\d+$/.test(levelId))) {
        key = `level${levelId}`;
    }
    
    const levelData = quizData[key];
    if (!levelData) {
        console.error(`No data found for ${key}`); 
        return [];
    }
    const randomSetIndex = Math.floor(Math.random() * levelData.length);
    return levelData[randomSetIndex];
}

// --- 4. QUIZ FUNCTIONS ---
function openQuiz(levelQuestions = null, levelId = "level1") {
    if (!quizOverlay || !quizCard || !quizQuestion || !quizOptions || !quizProgress) {
        console.error("Quiz Error: Missing UI elements. Check IDs in HTML.");
        return;
    }

    currentLevelId = levelId;
    currentLevelQuestions = levelQuestions || getQuestionsForLevel(levelId); 
    currentQuestion = 0;

    if (!currentLevelQuestions || currentLevelQuestions.length === 0) {
        console.error("Quiz Error: No quiz questions available.");
        return;
    }

    quizOverlay.style.display = "flex";
    if (nextBtn) nextBtn.style.display = 'block';
    if (skipBtn) skipBtn.style.display = 'block';

    loadStats();
    showQuestion();
}

function showQuestion() {
    const q = currentLevelQuestions[currentQuestion];
    if (!q || !Array.isArray(q.options)) {
        console.error(`Quiz Error: Question data missing at index ${currentQuestion}`);
        endQuiz();
        return;
    }

    quizQuestion.textContent = q.question;
    quizProgress.textContent = `Question ${currentQuestion + 1} of ${currentLevelQuestions.length}`;

    quizOptions.innerHTML = "";
    q.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.setAttribute('data-index', index);
        btn.classList.add('quiz-option-button');

        btn.onclick = (e) => {
            clearInterval(timerInterval); // stop timer if answered
            Array.from(quizOptions.children).forEach(option => option.disabled = true);
            const selectedIndex = parseInt(e.target.getAttribute('data-index'));
            const correctIndex = currentLevelQuestions[currentQuestion].answer;

            if (selectedIndex === correctIndex) {
                e.target.classList.add('correct');
            } else {
                e.target.classList.add('wrong');
                const correctAnswerButton = Array.from(quizOptions.children).find(
                    b => parseInt(b.getAttribute('data-index')) === correctIndex
                );
                if (correctAnswerButton) {
                    correctAnswerButton.classList.add('correct');
                }
            }
            selectOption(selectedIndex);
        };

        quizOptions.appendChild(btn);
    });

    // start the 15s timer
    startTimer();
}

function selectOption(index) {
    const correctIndex = currentLevelQuestions[currentQuestion].answer;

    attempted++;
    if (index === correctIndex) {
        score += 30;
        correct++;
    } else {
        score -= 10;
        wrong++;
    }

    if (score < 0) score = 0;

    updateStats();
    setTimeout(nextQuestion, 1500);
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < currentLevelQuestions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(timerInterval); // stop timer at end
    quizQuestion.textContent = `Quiz Complete!`;
    quizProgress.textContent = `Your Final Score: ${score} Points.`;

    quizOptions.innerHTML = `<button class="quiz-option-button" style="max-width: 300px; height: auto; margin-top: 20px;" id="returnToMapBtn">Return to Map</button>`;

    if (nextBtn) nextBtn.style.display = 'none';
    if (skipBtn) skipBtn.style.display = 'none';

    const returnBtn = document.getElementById("returnToMapBtn");
    if (returnBtn) {
        returnBtn.addEventListener('click', () => {
            quizOverlay.style.display = "none";
            quizQuestion.textContent = "";
            quizOptions.innerHTML = "";
            quizProgress.textContent = "";
            if (nextBtn) nextBtn.style.display = 'block';
            if (skipBtn) skipBtn.style.display = 'block';
        });
    }
}

// --- 5. TIMER FUNCTIONS ---
function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 15;

    if (!quizTimerDisplay) {
        quizTimerDisplay = document.getElementById("quizTimer");
    }

    if (quizTimerDisplay) {
        quizTimerDisplay.textContent = `Time Left: ${timeLeft}s`;
    }

    timerInterval = setInterval(() => {
        timeLeft--;
        if (quizTimerDisplay) {
            quizTimerDisplay.textContent = `Time Left: ${timeLeft}s`;
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeUp();
        }
    }, 1000);
}

function handleTimeUp() {
    const q = currentLevelQuestions[currentQuestion];
    if (!q) return;

    Array.from(quizOptions.children).forEach(option => option.disabled = true);

    const correctIndex = q.answer;
    const correctAnswerButton = Array.from(quizOptions.children).find(
        b => parseInt(b.getAttribute('data-index')) === correctIndex
    );
    if (correctAnswerButton) {
        correctAnswerButton.classList.add('correct');
    }

    attempted++;
    wrong++;
    score -= 10;
    if (score < 0) score = 0;

    updateStats();

    setTimeout(nextQuestion, 1500);
}

// --- 6. EVENT LISTENERS ---
document.addEventListener('DOMContentLoaded', () => {
    quizOverlay = document.getElementById("quizOverlay");
    quizCard = document.getElementById("quizCard");
    quizQuestion = document.getElementById("quizQuestion");
    quizOptions = document.getElementById("quizOptions");
    quizProgress = document.getElementById("quizProgress");
    nextBtn = document.getElementById("nextButton");
    skipBtn = document.getElementById("skipButton");
    quizTimerDisplay = document.getElementById("quizTimer");

    document.querySelectorAll('.level-node.unlocked .play-button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const levelNode = btn.closest('.level-node');
            const levelId = levelNode ? levelNode.dataset.levelId : "level1";
            openQuiz(null, levelId);
        });
    });

    if (quizOverlay) {
        quizOverlay.addEventListener('click', (e) => {
            if (e.target.id === 'quizOverlay') {
                quizOverlay.style.display = "none";
            }
        });
    }

    if (nextBtn) nextBtn.onclick = nextQuestion;
    if (skipBtn) skipBtn.onclick = nextQuestion;

    currentLevelId = "level1";
    loadStats();
});
