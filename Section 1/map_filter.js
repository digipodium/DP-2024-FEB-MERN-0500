const nums = [1, 5, 8, 9, 2, 7];

// find square of all elements in above array

const arr1 = nums.map((n) => { return n ** 2 });

console.log(arr1);

const prices = ['₹6753.34', '₹637.99', '₹777.30', '₹8932.4763'];
// [ 6753, 637, 777, 8932 ]

console.log(parseInt('₹6753.34'.slice(1)));

const numPrices = prices.map((p) => { return parseInt(p.slice(1)) })

console.log(numPrices);

const prices2 = [23000, 12000, 5000, 7800, 100];

const budgetPrices = prices2.filter((p) => { return p > 2000 && p < 10000 });
console.log(budgetPrices);

const names = ['raju', 'chaman', 'kaliya', 'chotu'];

const longNames = names.filter((n) => { return n.length >= 5 });
console.log(longNames);

const nums2 = [32, 6754, 2345, 876, 123, 872];
// filter all even number

const evens = nums2.filter((a) => { return a % 2 === 0 });
console.log(evens);

const phoneList = [
    { brand: 'Samsung', model: 'Galaxy M31', price: 14999 },
    { brand: 'Oneplus', model: '12', price: 67999 },
    { brand: 'IQOO', model: 'Z7 Pro', price: 18000 },
    { brand: 'Vivo', model: 'V7', price: 34000 },
    { brand: 'Samsung', model: 's8', price: 64000 },
];

// find all phone where price is less than 20000

const budgetPhones = phoneList.filter( (phone) => { return phone.price < 20000 }  );
console.log(budgetPhones);

const models = phoneList.map( (phone) => { return phone.model } );

console.log(models);
const samsungPhones = phoneList.filter( (phone) => { return phone.brand === 'Samsung' } );
console.log(samsungPhones);

const totalPrice =  phoneList.reduce( (acc, phone) => { return acc + phone.price }, 0 );
console.log(totalPrice);