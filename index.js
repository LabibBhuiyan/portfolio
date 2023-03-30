const typedText = "Welcome to my portfolio website. I am a computer science student looking to become a software developer after graduation.";
const typedElement = document.querySelector('#typed');

function typeText(text, index) {
  if (index < text.length) {
    typedElement.textContent += text.charAt(index);
    setTimeout(typeText.bind(null, text, index + 1), 100);
  }
}

window.onload = () => {
  typeText(typedText, 0);
}

const modeButton = document.getElementById('mode-button');
const body = document.body;
const isDark = localStorage.getItem('dark') === 'true';
const socialIcons = document.querySelector('.social-media');

if (isDark) {
  body.classList.add('dark-mode');
}

updateModeButtonText();

modeButton.addEventListener('click', (event) => {
  event.preventDefault();
  body.classList.toggle('dark-mode');
  localStorage.setItem('dark', body.classList.contains('dark-mode'));
  updateModeButtonText();
});

function updateModeButtonText() {
  if (body.classList.contains('dark-mode')) {
    modeButton.innerText = '☀';
    socialIcons.classList.add('dark-mode');
  } else {
    modeButton.innerText = '🔆';
    socialIcons.classList.remove('dark-mode');
  }
}