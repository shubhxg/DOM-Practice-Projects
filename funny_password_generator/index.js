const btn = document.querySelector('#btn');
const resultdiv = document.querySelector("#passwordContainer");

btn.addEventListener("click", () => {
  const password = generatePassword(objects, colors, feelings, symbols, temp);
  resultdiv.innerHTML = password.slice(0, 24);
});

function generatePassword(objects, col, feel, sym, temp) {
  const randomObject = objects[Math.floor(Math.random() * 40)];
  const randomColor = col[Math.floor(Math.random() * 10)];
  const randomFeeling = feel[Math.floor(Math.random() * 4)];
  const randomSymbol = sym[Math.floor(Math.random() * 8)];
  const randomTemp = temp[Math.floor(Math.random() * 3)];
  return (
    randomColor +
    randomTemp +
    randomFeeling +
    randomObject +
    randomSymbol +
    Math.floor(Math.random() * 100)
  );
}

const objects = [
  'Pigeon', 'Ball', 'Circle', 'VideoGame', 'Pingpong',
  'Heater', 'Painting', 'Pen', 'Cat', 'Dog', 
  'Rabbit', 'Monkey', 'Truck', 'Mouse', 'Keyboard', 
  'Monitor', 'Cheese', 'Gaming', 'Smartphone', 'Chess', 
  'School', 'College', 'CPU', 'Book', 'Copy-paste',
  'Youtube', 'Twitch', 'Discord', 'Facebook', 'Browser', 
  'Broccoli', 'Flowers', 'Pants', 'Musician', 'Socks', 
  'Transformer', 'Car', 'Lizard', 'Spiderman', 'Elephant',
];

const colors = [
  "Red", "Orange", "Black","Green", "Blue", "Pink",
  "Violet","Purple","Cyan", "Grey",
];

const feelings = ['Happy', 'Sad', 'Angry', 'Jealous'];
const symbols = ['!', '@', '#', '$', '%', '^', '&', '*'];
const temp = ['Cold', 'Hot', 'Warm'];
