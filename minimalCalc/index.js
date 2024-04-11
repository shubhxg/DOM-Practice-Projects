const operators = ['+', '-', '*', '/', '%'];

zero.addEventListener("click", () => {
  // if the input box is not empty
  if (input.innerText) {
    input.innerText += "0";
  }
});

one.addEventListener("click", () => {
  input.innerText += 1;
});

two.addEventListener("click", () => {
  input.innerText += 2;
});

three.addEventListener("click", () => {
  input.innerText += 3;
});

four.addEventListener("click", () => {
  input.innerText += 4;
});

five.addEventListener("click", () => {
  input.innerText += 5;
});

six.addEventListener("click", () => {
  input.innerText += 6;
});

seven.addEventListener("click", () => {
  input.innerText += 7;
});

eight.addEventListener("click", () => {
  input.innerText += 8;
});

nine.addEventListener("click", () => {
  input.innerText += 9;
});

clear.addEventListener("click", () => {
  // clearing the input field
  input.innerText = input.innerText.slice(0,0);
});

del.addEventListener("click", () => {
  // deleting the last token
  input.innerText = input.innerText.slice(0, -1);
});

add.addEventListener("click", () => {
  // if the input box is not empty
  if (input.innerText) {
    if (!operators.includes(input.innerText[input.innerText.length - 1]))
      input.innerText += "+";
  }
});

sub.addEventListener("click", () => {
  if (input.innerText) {
    if (!operators.includes(input.innerText[input.innerText.length - 1]))
      input.innerText += "-";
  }
});

mul.addEventListener("click", () => {
   if (input.innerText) {
     if (!operators.includes(input.innerText[input.innerText.length - 1]))
       input.innerText += "*";
   }
});

div.addEventListener("click", () => {
  if (input.innerText) {
    if (!operators.includes(input.innerText[input.innerText.length - 1]))
      input.innerText += "/";
  }
});

mod.addEventListener("click", () => {
  if (input.innerText) {
    if (!operators.includes(input.innerText[input.innerText.length - 1]))
      input.innerText += "%";
  }
});

square.addEventListener("click", () => {
  if (input.innerText) {
    if (!operators.includes(input.innerText[input.innerText.length - 1]))
      result.innerText = input.innerText * input.innerText;
  }
});

clearResult.addEventListener("click", () => {
  // clear the result field 
  result.innerText = result.innerText.slice(0, 0);
});

negative.addEventListener("click", () => {
  if (!input.innerText) {
    input.innerText += "-";
  }
});

equal.addEventListener("click", () => {
  document.getElementById("result").innerText = calculateResult(input.innerText);
});

function calculateResult (expression) {
  return (eval(expression));
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
