const equal = document.getElementById("equal");
const dot = document.getElementById("dot");
const zero = document.getElementById("zero");
const negative = document.getElementById("negative");
const three = document.getElementById("three");
const two = document.getElementById("two");
const one = document.getElementById("one");
const add = document.getElementById("add");
const six = document.getElementById("six");

sea.addEventListener("click", () => {
  removeTheme(
    "desert-bg",
    "dark-bg",
    "nature-bg",
    "desert-accent",
    "dark-accent",
    "nature-accent"
  );
  addTheme("sea-bg", "sea-accent");
});

desert.addEventListener("click", () => {
  removeTheme(
    "sea-bg",
    "dark-bg",
    "nature-bg",
    "sea-accent",
    "dark-accent",
    "nature-accent"
  );
  addTheme("desert-bg", "desert-accent");
});

nature.addEventListener("click", () => {
  removeTheme(
    "sea-bg",
    "dark-bg",
    "desert-bg",
    "sea-accent",
    "dark-accent",
    "desert-accent"
  );
  addTheme("nature-bg", "nature-accent");
});

dark.addEventListener("click", () => {
  removeTheme(
    "sea-bg",
    "desert-bg",
    "nature-bg",
    "sea-accent",
    "desert-accent",
    "nature-accent"
  );
  addTheme("dark-bg", "dark-accent");
});

function addTheme(theme, accent) {
  document.body.classList.add(theme);
  document.getElementById("equal").classList.add(accent);
}

function removeTheme(theme1, theme2, theme3, accent1, accent2, accent3) {
  document.body.classList.remove(theme1);
  document.body.classList.remove(theme2);
  document.body.classList.remove(theme3);
  equal.classList.remove(accent1);
  equal.classList.remove(accent2);
  equal.classList.remove(accent3);
}
