// Theme toggle functionality
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});

// Load saved theme
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  // Load saved username
  const savedUsername = localStorage.getItem("robloxUsername");
  if (savedUsername) {
    document.getElementById("saved-username").textContent = `Saved username: ${savedUsername}`;
  }
});

// Save username functionality
const saveButton = document.getElementById("save-username");
saveButton.addEventListener("click", () => {
  const usernameInput = document.getElementById("username-input").value;
  if (usernameInput.trim() !== "") {
    localStorage.setItem("robloxUsername", usernameInput);
    document.getElementById("saved-username").textContent = `Saved username: ${usernameInput}`;
    alert("Username saved!");
  } else {
    alert("Please enter a valid username.");
  }
});
