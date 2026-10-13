
const surpriseButton = document.getElementById("surpriseButton");
const themeButton = document.getElementById("themeButton");
const message = document.getElementById("message");

// Surprise button: show a random message
const messages = [
  "You're doing better than you think!",
  "Every expert was once a beginner.",
  "Small steps lead to big things.",
  "Keep experimenting. You're learning!",
  "You just made this little corner brighter!"
];

surpriseButton.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * messages.length);
  message.textContent = messages[randomIndex];
});

// Theme button: switch between light and dark
themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    themeButton.textContent = "Switch to light theme";
  } else {
    themeButton.textContent = "Change theme";
  }
});
