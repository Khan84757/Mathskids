// HTML عناصر منتخب کریں
const questionBox = document.getElementById('question');
const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submit-answer');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');

let score = 0;
let timer = 60;
let currentAnswer;

// گیم شروع کریں
function startGame() {
    generateQuestion();
    updateScore();
    const timerInterval = setInterval(() => {
        timer--;
        updateTimer();
        if (timer === 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

// سوال بنائیں
function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    currentAnswer = num1 + num2;
    questionBox.textContent = `${num1} + ${num2} = ؟`;
}

// اسکور اپڈیٹ کریں
function updateScore() {
    scoreDisplay.textContent = score;
}

// ٹائمر اپڈیٹ کریں
function updateTimer() {
    timerDisplay.textContent = timer;
}

// جواب جمع کریں
submitButton.addEventListener('click', () => {
    const userAnswer = parseInt(answerInput.value);
    if (userAnswer === currentAnswer) {
        score += 10;
        updateScore();
        generateQuestion();
    }
    answerInput.value = '';
});

// گیم کا اختتام
function endGame() {
    questionBox.textContent = 'گیم ختم ہو گیا!';
    submitButton.disabled = true;
    answerInput.disabled = true;
}

// گیم شروع کریں
startGame();
