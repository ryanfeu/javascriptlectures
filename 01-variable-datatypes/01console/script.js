//Log a number
console.log(100);

// Log a string
console.log('Hello World');

// Log  multiple values
console.log(20, 'Hello', true);

// Log a variable
const x = 100;
console.log(x);

// Console Error & Warning
console.error('Alert');
console.warn('Warning');

// Log object as table
console.table({ name: 'Ryan', email: 'ryan@gmail.com' });

//Group console commands
console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

// add css to logs
const styles = 'padding: 10px; background-color:white; color:green';
console.log('%cHello World', styles);
