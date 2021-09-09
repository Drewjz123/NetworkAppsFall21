// Higher order function is a function which takes a function as an argument and or returns a fucntion

function greaterThan(a){
 return b => b > a;
 }
}
const greaterThan10 = greaterThan(19);
const greaterThan20 = greaterThan(40);
// greaterThan10 = function(b) {return b > 10}
//console.log(greaterThan(greaterThan10));

console.log(greaterThan10(15));
console.log(greaterThan20(30));


// takes a function as an argument 

const nums  = [3, 10, 8, 25, -5, 8];

nums.sort((a,b) => a - b );

// function comp(a,b){
//  return b-a;
// }

console.log(nums);