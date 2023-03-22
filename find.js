const numbers = [2, 4, 6, 8, 10, 68, 69, 96];
const bigNums = numbers.find(number => number > 20);
console.log(bigNums)

const products = [
    {id : 1, name : 'mobile' , price : 6900},
    {id : 2, name : 'laptop' , price : 7900},
    {id : 3, name : 'watch' , price : 8900}
];
const cheap = products.find(product => product.price < 8000);
console.log(cheap)