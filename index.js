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
