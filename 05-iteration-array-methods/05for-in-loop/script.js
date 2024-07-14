const colorObj = {
  color1: 'red',
  color2: 'green',
  color3: 'blue',
  color4: 'yellow',
  color5: 'pink',
};

for (const key in colorObj) {
  console.log(key);
  console.log(key, colorObj[key]);
}

//loop through array
const colorArr = ['red', 'green', 'blue', 'yellow', 'pink'];

//this will give you the index
for (const color in colorArr) {
  console.log(color);
}

//this will provide you the value
for (const key in colorArr) {
  console.log(colorArr[key]);
}
