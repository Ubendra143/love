const panels = {
  opening: document.getElementById('opening'),
  question: document.getElementById('question'),
  love: document.getElementById('love'),
  journey: document.getElementById('journey')
};

const startBtn = document.getElementById('startBtn');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const buttonsWrap = document.getElementById('buttonsWrap');
const journeyBtn = document.getElementById('journeyBtn');
const romanticWords = document.getElementById('romanticWords');

const words = [
  'You are my favorite hello and my hardest goodbye 💞',
  'In your smile, I found my forever home 🏡',
  'My heart is happiest when it is with you 💓',
  'You make ordinary days feel like fairytales ✨',
  'Every love song suddenly makes sense because of you 🎵',
  'No matter where life goes, I choose you. Always. ♾️'
];

function showPanel(name) {
  Object.values(panels).forEach((panel) => panel.classList.remove('active'));
  panels[name].classList.add('active');
}

function renderRomanticWords() {
  romanticWords.innerHTML = '';

  words.forEach((line) => {
    const chip = document.createElement('div');
    chip.className = 'word-chip';
    chip.textContent = line;
    romanticWords.appendChild(chip);
  });
}

function moveNoButton() {
  noBtn.classList.add('moving');

  const wrapRect = buttonsWrap.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = wrapRect.width - btnRect.width - 8;
  const maxY = wrapRect.height - btnRect.height - 8;

  const randomX = Math.max(0, Math.floor(Math.random() * maxX));
  const randomY = Math.max(0, Math.floor(Math.random() * maxY));

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

startBtn.addEventListener('click', () => {
  showPanel('question');
  setTimeout(moveNoButton, 150);
});

yesBtn.addEventListener('click', () => {
  renderRomanticWords();
  showPanel('love');
});

journeyBtn.addEventListener('click', () => {
  showPanel('journey');
});

['mouseenter', 'focus', 'touchstart', 'click'].forEach((eventName) => {
  noBtn.addEventListener(eventName, (event) => {
    event.preventDefault();
    moveNoButton();
  });
});

window.addEventListener('resize', () => {
  if (panels.question.classList.contains('active')) {
    moveNoButton();
  }
});
