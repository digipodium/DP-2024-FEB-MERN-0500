const nums = [34, 28, 100, 29, 35, 77, 38];

// WAP to get sum of all elements in array

for(let i=0; i<nums.length; i++){
    console.log( nums[i] );
}

let sum = 0;

for(let i of nums){
    sum = sum + i;
}
console.log(sum);
console.log('----------------');

let sum2 = 0;
nums.forEach( ( a, i ) => { sum2 += a; console.log(i, a); } );

console.log(sum2);

// Get sum of all elements on even index

let sum3 = 0;
nums.forEach( ( a, i ) => {
    if(i%2===0){
        sum3 += a;
    }
});

console.log(sum3);

for(let i of nums){
    console.log( i**3 );
}

// WAP to add all even elements in array