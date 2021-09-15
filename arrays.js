//foreach calls the fucntion which is passed as an argument on each element 
//It always returns undefined, it cannot be used to modify the elements in the array. 
const nums = [1,2,5,7,9];

nums.forEach((element) => console.log(element)); // for each loops through the entire array and then we print them out. git 
 
//map(function): creates and returns a new array with values that are reutrned by called the argument function on each element


console.log(nums.map(item => item *= 2));// The map will return an new array with the operations performed on it.
console.log(nums);

//find(function); tests  each element function returns the value of the first element that satisfies the argument function 
//the argument has to be return a Boolen type value;

//console.log(nums.find(num => num > 10 ));


//findindex(function) works like find but it returns the index of the first element that satisfies the argument funcion.

console.log(nums.findIndex(num => num > 5)) // this returns the index 3 

console.log(nums.findIndex(num => num > 10)) // There is no number greater than 10 so returns -1