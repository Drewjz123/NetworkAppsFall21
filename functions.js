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

