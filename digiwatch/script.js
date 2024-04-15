const watchContainer = document.querySelector('.watchContainer');
const dateContainer = document.querySelector(".dateContainer");

setInterval(() => {
  let date = new Date();
  watchContainer.innerHTML = date.toLocaleTimeString();
  dateContainer.innerHTML = date.toLocaleDateString();
}, 1000)