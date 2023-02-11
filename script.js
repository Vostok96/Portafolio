const switchModeButton = document.getElementById("switch-mode-button");
const body = document.body;

switchModeButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");
});