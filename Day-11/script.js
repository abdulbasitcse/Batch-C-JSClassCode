const prompt=require('prompt-sync')()
// var name;
// name =prompt("Enter your name : ")
// age=prompt("Enter your age : ")
// console.log("your name is ", name)
// console.log("your age is ", age)

// a=prompt("Enter First number : ")
// b=prompt("Enter Second number : ")
// sum = a+b

// console.log(typeof(sum))

// console.log("sum = ", sum)


// WAP to find the power of a number. 2^3 = 2*2*2 = 8
// a^n= 
//a=2, n=3, i= 1

// a=parseInt(prompt("Enter your base value : "))
// n=parseInt(prompt("Enter your exponent value : "))
// let i=1
// let result=1;
// while(i<=n){
//     result = result*a 
//     i++;
// }

// console.log(result)

//WAP to find the number of digits in a number.
// num=1234%10 =>4
// rem1 = num%10
// 1234/10 =123
// num = num/10
// 123%10 => 3
// rem2 = num%10
// 123/10 =12
// div = num/10
// 12%10 => 2
// rem3 = num%10
// 12/10 =1
// div=div/10
// 1%10 => 1
// rem4 = num%10

// let count=0;
// num=parseInt(prompt("Enter the number : "))
// while(num>1){
//     //rem=num%10
//     num = num/10 
//     count++
// }

// console.log(count)

// a= parseInt(1234/10)
// console.log(a)


// Sname1 = "rtik"
// sname2 = "shivam"
// sname3 = "pooja"

// sname = ["Ritik", "tarun", "Annu", "sana", "Ram", 122, 123.4, "abbnn", 'anc', true, ["abc", "xyz"], {"key":"value"} ]

// console.log(sname.length)

// const array1 = ['a', 'b', 'c'];

// const array2 = ['d', 'e', 'f'];

// const array3 = ['g', 'h', 'i'];

// const array = array1.concat(array2, array3);

// console.log(array);
// expected output: Array ["a", "b", "c", "d", "e", "f"]


const animals = ['pigs', 'goats', 'sheep', 'cows'];
console.log(animals);

const count = animals.push('Dog', 'bafallo');

console.log(animals);

console.log(count);
// expected output: 4
//console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

//animals.push('chickens', 'cats', 'dogs');
//console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
