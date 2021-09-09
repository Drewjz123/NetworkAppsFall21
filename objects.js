var dogs = {'name': 'bruno', 'type':'dog'};
var cats = {'name': 'nancy', 'type': 'cat'};

var pets = [{'name': 'bruno', 'type':'dog'},cats];
pets.push({'name': 'slovena', 'type': 'cat'})
//console.log(pets)
//console.log(pets[2])

cats.age = 2; 
dogs['age'] = 14;
//console.log(pets)

pets[0].age = 14;
pets[2].age = 20;
pets[1].hungry = true;
console.log(pets)
console.log(cats)