// selecting the button
const c = document.querySelector("#calculateBtn");
const a = parseInt(document.querySelector("#a").value);
const b = parseInt(document.querySelector("#b").value);

c.addEventListener("click", async () => {
  const sum = document.querySelector("#sum");
  try {
    const response = await fetch(`http://localhost:3000/sum?a=${a}&b=${b}`);
    const data = await response.text();
    sum.innerHTML = data;
  } catch (err) {
    console.error("There was a problem with the fetch operation:", error);
  }
});

// no needed since i made my own server
// function renderSum() {
//   const a = parseInt(document.querySelector("#a").value);
//   const b = parseInt(document.querySelector("#b").value);
//   if (a && b) {
//     return a + b;
//   } else {
//     return "Enter both numbers";
//   }
// }
