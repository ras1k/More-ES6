const numbers = [2, 4, 6, 8, 10, 68, 69, 96];
const bigNums = numbers.filter(number => number > 20);
// console.log(bigNums)
const even = numbers.filter(num => num%2 === 0);
// console.log(even);

const products = [
    {id : 1, name : 'mobile' , price : 6900},
    {id : 2, name : 'laptop' , price : 7900},
    {id : 3, name : 'watch' , price : 8900}
];

const expensive = products.filter(product => product.price < 5000);
console.log(expensive)