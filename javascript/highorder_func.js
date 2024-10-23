//filter
/*let a=[1,2,3,4,5,6,7,8,9,10];
function checkEven(num)
{
    return num%2!=0;
}
let even=a.filter(checkEven);
console.log(even);*/

//for each
/*let a=[1,2,3];
function func(c)
{
    console.log(c*c);
}
a.forEach(func);*/

//Map
/*a=[1,2,3];
let func=(num)=>num;
let b=a.map(func);
console.log(a+ " "+b);*/


//Find
/*a=[1,2,3,4,5,6];
let first=a.find(num=>num%2==0);
console.log(first);*/

/*const reverseString = function(str) {
    return str.split('').reverse().join('');
};

// Usage
const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: !dlroW ,olleH*/

const varibale=[5,30,50,40];
const total=varibale.reduce(sum);
function sum(accum, element)
{
    return accum+element;
}
console.log(total);