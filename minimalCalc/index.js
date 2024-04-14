const operators = ["+", "-", "*", "/", "%"];
const buttons = document.querySelectorAll(".btn");
const input = document.getElementById("input");
const result = document.getElementById("result");

let equalResult = false;

// traversing all the buttons with the btn class
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    switch (event.target.id) {
      case "clear":
        input.innerText = input.innerText.slice(0, 0);
        break;
      case "clearResult":
        result.innerText = result.innerText.slice(0, 0);
        break;
      case "del":
        input.innerText = input.innerText.slice(0, -1);
        break;
      case "zero":
        if (input.innerText) {
          input.innerText += "0";
        }
        break;
      case "one":
        input.innerText += 1;
        break;
      case "two":
        input.innerText += 2;
        break;
      case "three":
        input.innerText += 3;
        break;
      case "four":
        input.innerText += 4;
        break;
      case "five":
        input.innerText += 5;
        break;
      case "six":
        input.innerText += 6;
        break;
      case "seven":
        input.innerText += 7;
        break;
      case "eight":
        input.innerText += 8;
        break;
      case "nine":
        input.innerText += 9;
        break;
      case "add":
        if (input.innerText) {
          if (
            !operators.includes(input.innerText[input.innerText.length - 1])
          ) {
            if (equalResult) {
              document.getElementById("input").innerText =
                document.getElementById("result").innerText;
              equalResult = false;
            }
            input.innerText += "+";
          }
        }
        break;
      case "sub":
        if (input.innerText) {
          if (!operators.includes(input.innerText[input.innerText.length - 1]))
            if (equalResult) {
              document.getElementById("input").innerText =
                document.getElementById("result").innerText;
              equalResult = false;
            }
          input.innerText += "-";
        }
        break;
      case "mul":
        if (input.innerText) {
          if (!operators.includes(input.innerText[input.innerText.length - 1]))
            if (equalResult) {
              document.getElementById("input").innerText =
                document.getElementById("result").innerText;
              equalResult = false;
            }
          input.innerText += "*";
        }
        break;
      case "div":
        if (input.innerText) {
          if (!operators.includes(input.innerText[input.innerText.length - 1]))
            if (equalResult) {
              document.getElementById("input").innerText =
                document.getElementById("result").innerText;
              equalResult = false;
            }
          input.innerText += "/";
        }
        break;
      case "mod":
        if (input.innerText) {
          if (!operators.includes(input.innerText[input.innerText.length - 1]))
            if (equalResult) {
              document.getElementById("input").innerText =
                document.getElementById("result").innerText;
              equalResult = false;
            }
          input.innerText += "%";
        }
        break;
      case "square":
        if (input.innerText) {
          if (!operators.includes(input.innerText[input.innerText.length - 1]))
            result.innerText = input.innerText * input.innerText;
        }
        break;
      case "negative":
        if (!input.innerText) {
          input.innerText += "-";
        }
        break;
      case "cube":
        if (input.innerText) {
          if (!operators.includes(input.innerText[input.innerText.length - 1]))
            result.innerText =
              input.innerText * input.innerText * input.innerText;
        }
        break;
      case "dot":
        if (input.innerText) {
          input.innerText += ".";
        } else {
          input.innerText += "0";
          input.innerText += ".";
        }
        break;
      case "equal":
        if (input.innerText) {
          result.innerText = calculateResult(input.innerText);
          equalResult = true;
        }
        break;
    }
  });
});

function calculateResult(expression) {
  try {
    return parseFloat(math.evaluate(expression)).toFixed(3);
  } catch (error) {
    return "Error";
  }
}

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
