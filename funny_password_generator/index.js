const btn = document.querySelector('#btn');
const resultdiv = document.querySelector("#passwordContainer");

btn.addEventListener("click", () => {
  const password = generatePassword(objects, colors, feelings, symbols, temp);
  resultdiv.innerHTML = password.slice(0, 24);
});

function generatePassword(obj, col, feel, sym, temp) {
  const randomObject = obj[Math.floor(Math.random() * obj.length)];
  const randomColor = col[Math.floor(Math.random() * col.length)];
  const randomFeeling = feel[Math.floor(Math.random() * feel.length)];
  const randomSymbol = sym[Math.floor(Math.random() * sym.length)];
  const randomTemp = temp[Math.floor(Math.random() * temp.length)];
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
