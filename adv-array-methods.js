// 🦁🦁🦁 Topic 2: ADVANCED Array Methods 🦁🦁🦁
// Given this zoo data from around the United States, follow the instructions below. Use the specific array methods in the requests below to solve the problems.

const zooAnimals = [
  {
    animal_name: 'Jackal, asiatic',
    population: 5,
    scientific_name: 'Canis aureus',
    state: 'Kentucky',
  },
  {
    animal_name: 'Screamer, southern',
    population: 1,
    scientific_name: 'Chauna torquata',
    state: 'Alabama',
  },
  {
    animal_name: 'White spoonbill',
    population: 8,
    scientific_name: 'Platalea leucordia',
    state: 'Georgia',
  },
  {
    animal_name: 'White-cheeked pintail',
    population: 1,
    scientific_name: 'Anas bahamensis',
    state: 'Oregon',
  },
  {
    animal_name: 'Black-backed jackal',
    population: 2,
    scientific_name: 'Canis mesomelas',
    state: 'Washington',
  },
  {
    animal_name: 'Brolga crane',
    population: 9,
    scientific_name: 'Grus rubicundus',
    state: 'New Mexico',
  },
  {
    animal_name: 'Common melba finch',
    population: 5,
    scientific_name: 'Pytilia melba',
    state: 'Pennsylvania',
  },
  {
    animal_name: 'Pampa gray fox',
    population: 10,
    scientific_name: 'Pseudalopex gymnocercus',
    state: 'Connecticut',
  },
  {
    animal_name: 'Hawk-eagle, crowned',
    population: 10,
    scientific_name: 'Spizaetus coronatus',
    state: 'Florida',
  },
  {
    animal_name: 'Australian pelican',
    population: 5,
    scientific_name: 'Pelecanus conspicillatus',
    state: 'West Virginia',
  },
]

/* 🦁🦁🦁 Request 1: .forEach() 🦁🦁🦁
  The zoos want to display both the scientific name and the animal name in front of the habitats. 
    1. Receive the zooAnimals array as an argument passed from a parameter 
    2. Use .forEach() to populate a new array called displayNames that will be an array of strings with only the animal name and scientific name of each animal
    3. Return the new array
  💡 NOTE: the array returned should be an array of strings, and each string should follow this pattern: "name: {name}, scientific: {scientific name}"
  */
const displayNames = [];
zooAnimals.forEach(function animalNames (item){
  return displayNames.push(item.animal_name, item.scientific_name);
   
});
console.log(displayNames)
// function animalNames(zooAnimals) {
//   /*Your Code Here*/ 
// }

/* 🦁🦁🦁 Request 2: .map() 🦁🦁🦁
  The zoo needs a list of all their animal's names converted to lower case. 
  Use lowerCaseNames to do the following:
  1. Receive the zooAnimals array as an argument passed from a parameter 
  2. Use .map() to create a new array of strings with the animal's names in lowercase
  3. Return the new array
  🌟 EXAMPLE of returned array: ['jackal, asiatic', .....]
  💡 NOTE: Do some research for other methods that can help help you
  */

let lowerCase = zooAnimals.map( function lowerCaseNames(item) {
  return item.animal_name.toLowerCase();
})
console.log(lowerCase)

/* 🦁🦁🦁 Request 3: .filter() 🦁🦁🦁
  The zoo is concerned about animals with a lower population count. 
  Use lowPopulationAnimals to do the following: 
  1. Receive the zooAnimals array as an argument passed from a parameter 
  2. Use .filter() to create a new array of objects which contains only the animals with a population of less than 5
  3. Return this new array
  */

let lowPop = zooAnimals.filter( function lowPopulationAnimals(item) {
  return item.population < 5;
});
console.log(lowPop);

/* 🦁🦁🦁 Request 4: .reduce() 🦁🦁🦁
  The zoo needs to know their total animal population across the United States. 
  USe USApop to do the following:
  1. Receive the zooAnimals array as an argument passed from a parameter 
  2. Use the .reduce() method to find the total population from the zoosAnimals array
  3. Return the total population
  💡 NOTE: Remember the reduce method takes two arguments: a callback (which itself takes two args - the accumulator and the item), and an initial value for the count. Check MDN/W3Schools for syntax!
  */

let totalPop = zooAnimals.reduce( function USApop(accumulator, item) {
  return accumulator + item.population
}, 0)
console.log(totalPop);
