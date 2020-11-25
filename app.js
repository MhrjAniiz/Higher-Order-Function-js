const fruitArray1 = [
  "apple",
  "banana",
  "syau",
  "lichi",
  "amba",
  "apple",
  "syau",
];
const fruitArray2 = [
  "pineapple",
  "avocado",
  "amba",
  "banana",
  "syau",
  "strawberry",
];
const persons = [
  { name: "Ram", age: 16 },
  { name: "Shyam", age: 18 },
  { name: "Hari", age: 27 },
  { name: "Govind", age: 13 },
  { name: "ram", age: 18 },
  { name: "nickace", age: 25 },
  { name: "sita", age: 18 },
];
const date = [1994, 2020, 1998, 2018, 2019];

//to check whether two arrays have common objects or not we use
const common = fruitArray1.some((item) => fruitArray2.includes(item));
console.log("is there common fruits:", common);

//use of higher order function to get a common element from 2 arrays
function findCommonElement(fruitArray1, fruitArray2) {
  return fruitArray1.filter((item) =>
    fruitArray2.find((items) => items === item)
  );
}
console.log("common fruits:", findCommonElement(fruitArray1, fruitArray2));
//map()
//use of higher order function map to pluralise the fruitArray1
const pluraliseArray1 = fruitArray1.map((fruit) => `${fruit}'s`);
console.log("pluralize array:", pluraliseArray1);

//use of map to find the age
const ages = date.map((year) => 2020 - year);
console.log("ages :", ages);

//filter()
//use of filter method to show only even date
const evenDate = persons.filter((even) => even.age % 2 === 0);
console.log("even ages :", evenDate);

//use of filter method to show age greater than or equal to 18
const fullAge = persons.filter((person) => person.age >= 18);
console.log("age :", fullAge);

//reduce()
//use of reduce to find the sum of the array date
const sum = date.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log("total sum :", sum);

//find()
//use of find the user with name anish

const result = persons.find((person) => (person.name = "anish"));
console.log("found result:", result);

//using filter and map creating a new array that contains the name of the people that are of age 18

let newArray = persons
  .filter((result) => {
    return result.age === 18;
  })
  .map((person) => person.name);

console.log(newArray);

//using filter method to removed dublicate elements in fruit1 array

const nonDublicateArray = fruitArray1.filter((fruit, index) => {
  return fruitArray1.indexOf(fruit) === index;
});

console.log(nonDublicateArray);
