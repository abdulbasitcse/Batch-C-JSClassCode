// const array1 = [1, 2, 3];

// console.log(array1.unshift(4, 5));
// // expected output: 5

// console.log(array1);
// // expected output: Array [4, 5, 1, 2, 3]

// const array1 = [15, 12, 18, 130, 44];
// let x;
// const found = array1.find( x => x < 10);

// console.log(found);
// // expected output: 12

// const array1 = [5, 12, 8, 130, 44];

// const isLargeNumber = (element) => element > 13;
// console.log(isLargeNumber)

// console.log(array1.findIndex(isLargeNumber));
// // expected output: 3

// const elements = ['Fire', 'Air', 'Water'];
// console.log(elements);
//console.log(elements.join());
// expected output: "Fire,Air,Water"

//console.log(elements.join(''));
// expected output: "FireAirWater"

//console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

// console.log(elements.join('+'));

// const array1 = ['one', 'two', 'three'];
// console.log('array1:', array1);
// expected output: "array1:" Array ["one", "two", "three"]

// const reversed = array1.reverse();
// console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
//console.log('array1:', array1);
// expected output: "array1:" Array ["three", "two", "one"]

// let arr= [100, 21, 10, 2, 50, 4, 6]
// let arr1= arr.slice()
//let arr1=["Pooja", "Rahul", "Sana", "Anu", "Sahil"]
// arr.sort(function(a,b){ return (a-b)})
// console.log(arr1)

// let arr= [100, 21, 10, 2, 50, 4, 6]
// let arr1=arr
// console.log(arr)
let arr1=[];
let arr= [100, 21, 10, 2, 50, 4, 6]
for(let i=0; i<arr.length;i++){
    arr1.push(arr[i])
}

console.log(arr1)
