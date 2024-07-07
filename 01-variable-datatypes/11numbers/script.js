let x;

const num = new Number(3.141592654);

//toString() - returns a string representation of the number
x = num.toString();

//to get the length
x = num.toString().length;

//to precision() - returns a number with the specified length
x = num.toPrecision(3);

//toexponential() - convert a number to exponential notation and returns a value as a string
x = num.toExponential(2);

//toLocaleString() - returns a string representation of the number, using the current locale
x = num.toLocaleString('en-US');

//valueOf - get value
x = num.valueOf();

x = Number.MAX_VALUE;
x = Number.MIN_VALUE;

console.log(x);
