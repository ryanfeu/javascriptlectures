const socials = ['X', 'Linkedin', 'Facebook', 'Instagram'];

// console.log(socials.__proto__);

//long form
// socials.forEach(function (item) {
//   console.log(item);
// });

//short method
// socials.forEach((item) => console.log(item));

//we can also pass in the index and the original array

// socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

//using a named function
// function logSocials(social) {
//   console.log(social);
// }
// socials.forEach(logSocials);

//Array of Objects
const socialObjs = [
  { name: 'Twitter', url: 'https://twitter.com' },
  { name: 'Facebook', url: 'https://facebook.com' },
  { name: 'Linkedin', url: 'https://linkedin.com' },
  { name: 'Instagram', url: 'https://instagram.com' },
];

//objects
socialObjs.forEach((item) => console.log(item));

//property
socialObjs.forEach((item) => console.log(item.name));
