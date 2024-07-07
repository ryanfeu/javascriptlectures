let x;

// Coerced to a string
x = 5 + '5'; //5 string
x = 5 + Number('5');

//coerced to a number
x = 5 * '5'; //25 number

//null is coerced to 0 as it is a `falsy` values
x = 5 + null;

x = Number(null);
x = Number(true);
x = Number(false);

//true is coerced to 1
x = 5 + true;

//false is coerced to 0
x = 5 + false;

//undefined is coerced to Nan
x = 5 + undefined;

//##########################################
console.log(x, typeof x);
