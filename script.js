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