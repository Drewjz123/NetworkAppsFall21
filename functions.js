console.log(sum(3,4));
// normal functions can be called before their declaration; 
function sum(a,b){
 return a + b;
}

//function expression 
// anoynomous functions cannot be called before their declaration
const sumExp = function(a,b){
 return a + b;
};

console.log(sumExp(10,20));

const sumArrow = (a,b) => { 
 return  a + b;
};
console.log(sumArrow(6,10))
//arrow function (ES6)

//const name = (parameter list) =>  {// body of the function};


//another way of writing this function 

const sumSimplfied = (a,b) => a + b;

console.log(sumSimplfied(10,15));
