const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const celebration = document.getElementById('celebration');
const journey = document.getElementById('journey');
const heartsLayer = document.querySelector('.floating-hearts');
const buttonArea = document.querySelector('.buttons');

function moveNoButton() {
  const areaRect = buttonArea.getBoundingClientRect();
  const maxX = Math.max(8, areaRect.width - noBtn.offsetWidth - 8);
  const maxY = Math.max(8, areaRect.height - noBtn.offsetHeight - 8);
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

function createHeart() {
  const heart = document.createElement('span');
  heart.textContent = '💖';
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${12 + Math.random() * 22}px`;
  heart.style.animationDuration = `${4 + Math.random() * 5}s`;

  heartsLayer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 9200);
}

function showerLove(count = 25) {
  for (let i = 0; i < count; i += 1) {
    setTimeout(createHeart, i * 120);
  }
}

noBtn.addEventListener('mouseenter', moveNoButton);
noBtn.addEventListener('click', (event) => {
  event.preventDefault();
  moveNoButton();
  showerLove(6);
});

yesBtn.addEventListener('click', () => {
  celebration.classList.remove('hidden');
  journey.classList.remove('hidden');
  yesBtn.textContent = 'My Forever ❤️';
  showerLove(40);

  setTimeout(() => {
    journey.scrollIntoView({ behavior: 'smooth' });
  }, 450);
});

moveNoButton();
setInterval(createHeart, 550);
