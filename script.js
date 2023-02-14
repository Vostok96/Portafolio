const switchModeButton = document.getElementById("switch-mode-button");
const body = document.body;

switchModeButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");
});

const button = document.getElementById("cv");
button.addEventListener("click", function() {
  const link = document.createElement("a");
  link.href = "https://drive.google.com/file/d/1SjcIpvsXlRKcjbKtai2ay2tJmyJxC1Ax/view?usp=sharing";
  link.target = "_blank";
  link.click();
});

const button2 = document.querySelector('.btn.projects__buttons');

button2.addEventListener('click', function() {
  window.open('./assets/project_1/neon.html', '_blank');
});

const button3 = document.querySelectorAll('.projects__project')[1].querySelector('.projects__buttons button:first-of-type');
button3.addEventListener('click', () => {
  window.open('./assets/project_2/reloj.html', '_blank');
});
const button4 = document.querySelectorAll('.projects__project')[2].querySelector('.projects__buttons button:first-of-type');
button4.addEventListener('click', () => {
  window.open('./assets/project_3/text_light.html', '_blank');
});