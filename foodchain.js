var eatsPlants = true;
var eatsAnimals = false;

var category = eatsAnimals &&eatsPlants? "omnivore": eatsAnimals && !eatsPlants? "carnivore": eatsPlants && !eatsAnimals ? "herbivore" : undefined;
console.log(category);