// Setting variable myName that will equal my name 
const myName = "Grigas";

// Setting a const variable for the number of states in the USA
const stateCount = 50;

// Computing and setting a variable sum that equals the sum of 2 different numbers
const sum = 5 + 4;

// Setting an array of my favorite vegetables :)
const vegetables = ["Cucumbers", "Tomatoes", "Potatoes", "Onions"];

// Setting an object pet with its name and breed attributes 
const pet = {
    name: "Laila",
    breed: "Siamese"
};

// Setting an array of person objects with name and age attributes
const person = [
    { name: "Edward", age: 16 },
    { name: "Eva", age: 23 },
    { name: "Nico", age: 21 },
    { name: "Homer", age: 36 },
    { name: "Garry", age: 14 }
];

// Displaying my pet's name and breed
console.log("My pet's name is " + pet.name + " and its breed is " + pet.breed);

// Using a for loop and checkAge function to check through all the person objects
for (let i = 0; i < person.length; i++) {
    checkAge(person[i].name, person[i].age);
}

// Looping through vegetables and printing out the names of them
for (let i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i]);
}

// Using the getLength function to get the number of characters in the given string and then checking if that number is odd or even
let wordLength = getLength("Hello World");
if (wordLength % 2 === 0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!");
}

// Function sayHello that displays the message "Hello world!" when called
function sayHello() {
    console.log("Hello world!");
}

// Function that checks the given variable's age and if it's lower than 21, it prints out the corresponding message with the name
function checkAge(name, age) {
    if (age < 21) {
        console.log("Sorry " + name + ", you aren't old enough to view this page!");
    }
}

// Function that uses the length property to get the passed argument's number of characters in the string
function getLength(word) {
    return word.length;
}

// Function calls
sayHello();
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);