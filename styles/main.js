//Function Excercises:
////////////////////////////////////////////////

//Positive Numbers
var nums = [1, 2, 3, -4, -5, 6, 7, 8, -9, -10];
function isPositive(num) {
  return num >0;  
}
var result = nums.filter(isPositive);

//Even Numbers
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function isPositive(num) {
  return num % 2 - 1; 
}
var result = nums.filter(isPositive);

//Square the Numbers
var squareTheNumbers = ([1, 2, 3])
function Positive(num) {
  return num * num;
}
var result = squareTheNumbers.map(Positive); 

//Cities 1
var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];
function f(item) {
  if (item.temperature < 70.0) {
    return true;
  } 
}
var x = cities.filter(f);
console.log(x);// This just prints the new array to confirm everything is correct.

//Cities2
var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];
var newInformation = cities.reduce(function(prev, curr) {
  return prev.concat(curr.name);
}, []); 

//Good job!
var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];
people.forEach(function(element) {
  console.log("Good job " + element);
});

//Total Price
var products = [
  { name: 'Basketball', price: 12.00 },
  { name: 'Tennis Racquet', price: 66.00 },
  { name: 'Tennis Balls', price: 9.00 },
  { name: 'Tennis Balls', price: 9.00 }
];
var newInformation = products.reduce(function total(prev, curr) {
  return prev.concat(curr.price);
  prev + prev;
}, [0]);

function sum(a, b) {
  return a + b; 
}
var sums = newInformation.reduce(sum, 0);

//String Join
function strJoin(strs, sep) {
    return strs.reduce(function (tally, str){
        return tally + sep + str;
    });
strJoin(['Hello', 'and', 'goodbye'], ' ')

//Sort an array
var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];
function sorAlpha(arrayOfStrings) {
    return arrayOfStrings.sort();
}

//Sort an Array 2
var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];
people.sort(function(a, b) {
  return a.length - b.length;
});

//Sort an Array 3
var products = [
  { name: 'Basketball', price: 12.00 },
  { name: 'Tennis Racquet', price: 66.00 },
  { name: 'Tennis Balls', price: 9.00 },
  { name: 'Tennis Balls', price: 9.00 }
];
var newInformation = products.reduce(function total(prev, curr) {
  return prev.concat(curr.price);
  prev + prev;
}, []);

newInformation.sort(function(a, b) {
  return a - b;
});

