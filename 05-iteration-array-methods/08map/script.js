// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map((number) => number * 2);

// console.log(doubledNumbers);

// const numberLabel = numbers.map((number) => 'Number ' + number);
// console.log(numberLabel);

//foreach implementation (double the number)
// const doubledNumbers2 = [];
// numbers.forEach((number) => {
//   doubledNumbers2.push(number * 2);
// });

// console.log(doubledNumbers2);

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

//Create an array of company names
// const companyNames = companies.map((company) => company.name);
// console.log(companyNames);

//array of company names and category
// const companyInfo = companies.map((company) => {
//   return {
//     name: company.name,
//     category: company.category,
//   };
// });
// console.log(companyInfo);

//name length of each company in years
const companyYears = companies.map((company) => {
  return {
    name: company.name,
    length: company.end - company.start + ' years',
  };
});
// console.log(companyYears);

//chain map methods
//squareroot / idouble
const numbers = [1, 2, 3, 4, 5];

//squareroot and double
// const sqrtAndDouble = numbers
//   .map((number) => Math.sqrt(number))
//   .map((sqrt) => sqrt * 2);

// console.log(sqrtAndDouble);

//square root and double and 2 decimal place
const sqrtAndDouble = numbers
  .map((number) => Math.sqrt(number))
  .map((sqrt) => sqrt * 2)
  .map((result) => parseFloat(result.toFixed(2)));

console.log(sqrtAndDouble);
