let intervalID;
const colorHexCodeString = "1234567890abcdef";
const heading = document.querySelector("h1");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

let isStarted = false;

start.addEventListener("click", () => {
  isStarted = true;
  intervalID = setInterval(() => {
    const bgColor = randomColor();
    document.body.style.backgroundColor = bgColor;
    heading.style.color = invertColor(bgColor);
    heading.innerHTML = `Color code: ${randomColor()}`;
  }, 2000);
  if (isStarted) {
    document.querySelector("#start").classList.add("hidden");
    heading.innerHTML = "Letssss go!!! 🌈";
  }
});

stop.addEventListener("click", () => {
  isStarted = false;
  clearInterval(intervalID);
  // deallocating the memory for the intervalID
  intervalID = null;
  document.body.style.backgroundColor = "black";
  if (!isStarted) {
    document.querySelector("#start").classList.remove("hidden");
    heading.textContent = "Click to start again!";
  }
});

// function to generate a random color
function randomColor() {
  let color = "#";
  for (let i = 1; i <= 6; i++) {
    color += colorHexCodeString[Math.floor(Math.random() * 16)];
  }
  return color;
}

// function to generate inverted color of random hex
function invertColor(hex) {
  // Remove #
  hex = hex.slice(1);

  // Convert hex to RGB
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  // Invert each component
  r = 255 - r;
  g = 255 - g;
  b = 255 - b;

  // Convert RGB back to hex
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
