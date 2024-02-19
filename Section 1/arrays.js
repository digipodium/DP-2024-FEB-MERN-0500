const arr1 = [7653, 6734.34, 'hello', true, null];

console.log(arr1);

const fruits = ['apple', 'mango', 'lichi', 'guava', 'kiwi', 'orange'];

// indexing
console.log( fruits[3] );  // also works with strings
console.log( fruits[1] );
console.log( fruits.indexOf('orange') ); // also works with strings
console.log( fruits.at(-2) );  // also works with strings
console.log( fruits.length );  // also works with strings

// slicing
console.log( fruits.slice(1, 4) );  // also works with strings
console.log( fruits.slice(1) );  // also works with strings

price = '₹8932.4763';
console.log(price.slice(1));

// adding elements
fruits.push('banana');  // adds element at the end
fruits.unshift('papaya'); // adds element at the beginning

console.log(fruits);

// removing elements
fruits.pop();  // removes element from the end
fruits.shift();  // removes element from the beginning

console.log(fruits);