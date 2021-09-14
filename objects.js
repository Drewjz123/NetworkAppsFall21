var dogs = {'name': 'bruno', 'type':'dog'};
var cats = {'name': 'nancy', 'type': 'cat'};

var pets = [dogs,cats];
pets.push({'name': 'slovena', 'type': 'cat'})
console.log(pets)
console.log(pets[2])

cats.age = 2; 
dogs['age'] = 14;
console.log(pets)