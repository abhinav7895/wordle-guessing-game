const body = document.querySelector("body");
const themeContainer = document.querySelector(".theme");
const darkModeImage = themeContainer.querySelector(
  `[data-select-theme='dark']`
);
const lightModeImage = themeContainer.querySelector(
  `[data-select-theme='light']`
);


themeContainer.addEventListener("click", toggleTheme);

function toggleTheme(e) {
  const theme = e.target.dataset.selectTheme;
  if (theme === "light") {
    body.dataset.theme = "dark";
    localStorage.setItem("theme", "dark");
  } else {
    body.dataset.theme = "light";
    localStorage.setItem("theme", "light");
  }
  handleThemeSelection(body.dataset.theme);
}

const savedTheme = localStorage.getItem("theme") || "light";
handleThemeSelection(savedTheme);

function handleThemeSelection(theme) {
  if (theme === "light") {
    body.dataset.theme = theme;
    darkModeImage.style.display = "none";
    lightModeImage.style.display = "inline-block";
  } else {
    body.dataset.theme = theme;
    darkModeImage.style.display = "inline-block";
    lightModeImage.style.display = "none";
  }
}