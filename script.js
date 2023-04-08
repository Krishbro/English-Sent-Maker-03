const sentences = [
  { english: 'There are 50 students in our class.', sinhala: '01. අපේ පංතියේ ළමයි 50ක් ඉන්නවා.' },
  { english: 'They don\'t like to ride bikes.', sinhala: '02. ඔවුන් බයිසිකල් පදින්න කැමති නැහැ.' },
  { english: 'I want to know why you killed my dog.', sinhala: '03.මට දැනගන්න ඕන ඇයි ඔයා මගේ බල්ලව මැරුවේ කියලා.' },
  { english: 'She spoke to the doctor in English.', sinhala: '04. ඇය ඉංග්‍රීසියෙන් වෛද්යවරයට කතා කළා.' },
  { english: 'Colombo is the capital of sri-lanka.', sinhala: '05. ශ්‍රි ලංකාවේ අගනුවර වන්නේ කොලඹ.' },
  { english: '5 multiplied by 3 is 15.', sinhala: '06. 5, 3න් වැඩි කල විට 15 වේ.' },
  { english: 'The baby is sleeping in the cradle.', sinhala: '07. බබා තොටිල්ලේ නිදාගෙන ඉන්නවා.' },
  { english: 'A beautiful girl sat next to me.', sinhala: '08. ලස්සන ගැහැනු ලමයෙක් මට එහා පැත්තේ වඩි වෙලා හිටියා.' },
  { english: 'My teacher told me not to eat there.', sinhala: '09. මගේ ගුරුතුමිය කිව්වා එතන කන්න එපා කියලා.' },
  { english: 'when I had lunch, birds were flying in the sky.', sinhala: '10. මම දිවා ආහාරය ගන්නා විට කුරුල්ලෝ අහසේ පියාසර කරමින් හිටියා.' }
];

let currentSentence = 0;
let shuffledWords = [];
let selectedWords = [];

// Get the sentence and shuffle the words
function newSentence() {
selectedWords = [];
const sentence = sentences[currentSentence];
const english = sentence.english;
const sinhala = sentence.sinhala;
document.querySelector('.sentence .english').textContent = english;
document.querySelector('.sentence .sinhala').textContent = sinhala;

// Shuffle the words
shuffledWords = english.split(' ').sort(() => Math.random() - 0.5);
document.querySelector('.words').innerHTML = '';
shuffledWords.forEach(word => {
const div = document.createElement('div');
div.className = 'word';
div.textContent = word;
div.addEventListener('click', selectWord);
document.querySelector('.words').appendChild(div);
});
}

// Select a word and add it to the selected words array
function selectWord() {
if (!selectedWords.includes(this.textContent)) {
selectedWords.push(this.textContent);
this.style.backgroundColor = '#7286D3';
this.style.color = 'white';
}
}

// Check the answer and display the result
function checkAnswer() {
const sentence = sentences[currentSentence];
const english = sentence.english;
const selected = selectedWords.join(' ');
if (selected === english) {
document.querySelector('.result').textContent = 'Correct! ✔';
document.querySelector('.result').style.color = '#4CAF50';
currentSentence++;
if (currentSentence === sentences.length) {
document.querySelector('.game').style.display = 'none';
document.querySelector('.result').textContent = 'Congratulations, you have completed the game!';

document.querySelector('.congrats').style.display = 'block';

} else {
setTimeout(newSentence, 1000);
}
} else {
document.querySelector('.result').textContent = 'Incorrect ✖, please try again.';
document.querySelector('.result').style.color = '#FF0000';
selectedWords = [];
shuffledWords.forEach(word => {
const div = document.createElement('div');
div.className = 'word';
div.textContent = word;
div.addEventListener('click', selectWord);
document.querySelector('.words').appendChild(div);
});
}
}

// Start the game
newSentence();
const restartBtn = document.getElementById("restart-btn");

restartBtn.addEventListener("click", function() {
  location.reload();
});

const nextBtn = document.getElementById("next-btn");

nextBtn.addEventListener("click", function() {
  // Replace "https://example.com" with the URL you want to open
  window.location.href = "https://learnenglishsinhala.blogspot.com/2023/04/test.html";
});
