// const user = ['Raju', 'raju@mail', '234uib64'];

const user = { name: 'Raju', email: 'raju@mail.com', password: '123jkdjc' };

console.log(user.name);
console.log(user.email);

console.log(user['password']);

user.password = 'xyz789';
console.log(user);

user.address = 'Lucknow';
console.log(user);

delete user.address;
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));


const smartphone = {
    brand: 'Samsung',
    model: 'Galaxy M31',
    price: 14999,
    color: ['Black', 'Blue', 'Red'],
};

console.log(smartphone.color[1]);
smartphone.color[2] = 'white';
console.log(smartphone.color);
smartphone.color.splice(-1, 1, 'gray');
console.log(smartphone.color);

smartphone.color.push('yellow');
console.log(smartphone.color);

const myphone = {
    brand: 'OnePlus',
    model: '12',
    variant: {
        '8GB': 47000,
        '12GB': 56000
    }
};

console.log(myphone.variant['12GB']);



const phoneList = [
    { brand: 'Samsung', model: 'Galaxy M31', price: 14999 },
    { brand: 'Oneplus', model: '12', price: 67999 },
    { brand: 'IQOO', model: 'Z7 Pro', price: 18000 },
    { brand: 'Vivo', model: 'V7', price: 34000 },
];

console.log(phoneList.length);
// code to find price of second smartphone
// code to change model of last smartphone

console.log(phoneList[1].price);
phoneList[phoneList.length-1].model = 'V9';
console.log(phoneList);

// find sum of all prices
// get models of all smartphones in an array
// [ 'Galaxy M31', '12', 'Z7 Pro', 'V9' ]
