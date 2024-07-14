//Break - exit the loop prematurely
for (let i = 0; i <= 20; i++) {
  if (i === 5) {
    console.log('Breaking....');
    break;
  }
  console.log(i);
}

//Continue
for (let i = 0; i <= 20; i++) {
  if (i === 7) {
    console.log('Skipping 7....');
    continue;
  }
  console.log(i);
}
