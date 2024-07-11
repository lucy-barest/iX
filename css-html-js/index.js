//VAR - old - mutable
var firstName = "Lucy";

//LET - new - mutable
let lastName = "Barest";

//CONST - new - immutable
const fullName = firstName + " " + lastName;

console.log(firstName);
console.log(lastName);
console.log(fullName);


//PRIMITIVES
let nil;
let bigINt = 2 ** 53
console.log("type of hello world", typeof "Hello World");
console.log("type of 31", typeof 31);
console.log("type of 2^53", typeof bigInt);
console.log("type of symbol('key)", typeof Symbol("key"));
console.log("type of true", typeof true);
console.log("type of nil", typeof nil);
console.log("type of hello world", typeof null);


console.log("=================")


//STRING
let greeting = "Hello! my name is " + fullName; //concatenation
let greeting2 = "hello my name is ${firstName}"; //interpolation
console.log(greeting);
console.log(greeting.length);
console.log(greeting[5]);
console.log(greeting.substring[0,6]);
console.log(greeting.includes("this"));
console.log(greeting.indexOf("!"))
console.log(greeting.split(" "));


console.log("=================")


//OBJECTS (literals)
const person = {
    firstName: "Lucy",
    lastName: "Barest",
    age: 19,
    address:{
        number: 4,
        street: "Leir Ct",
        suburb: "White Plains",
        state: "New York",
        country: "United States",
    },
    getFormattedAddress: function () {
        return(
            this.address.number 
            + " " 
            + this.address.street
            + " "
            + this.address.suburb 
            + " "
            + this.address.suburb
            + " "
            + this.address.state
        )
    }
}
console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.getFormattedAddress);

const person2 = {
    firstName: "Lucy",
    lastName: "Barest",
    age: 19,
    address:{
        number: 4,
        street: "Leir Ct",
        suburb: "White Plains",
        state: "New York",
        country: "United States",
    },
    getFormattedAddress: function () {
        return(
            this.address.number 
            + " " 
            + this.address.street
            + " "
            + this.address.suburb 
            + " "
            + this.address.suburb
            + " "
            + this.address.state
        )
    }
}

console.log("=================")


//ARRAYS
// Initializing an array - old
let nums1 = new Array(1, 2, 3, 4, 5, 6);
console.log(nums1);

// Initializing an array - new
let alphaNumeric = [1, 2, 3, 4, 5, "a", "b"];
console.log(alphaNumeric);

let fruits = ["orange", "pear", "apple"];
console.log(fruits);

// get element in array (remember it's zero indexed):
console.log(fruits[2]);

// array properties
console.log(fruits.length);

// array methods
fruits.push("strawberries");
console.log(fruits);
fruits.unshift("grape");
console.log(fruits);
const lastFruit = fruits.pop();
console.log(lastFruit, fruits);
//const index = fruits.indexOf("orange");
// let index = fruits.indexOf("orange");
// console.log(index, fruits);

//Higher order array methods:
//Filter
const filtertedFruits = fruits.filter((fruit) => {
    //console.log(fruit);
    return !fruit.includes("orange");
});

//Map
const mappedFruits = fruits.map((fruit) => {
    console.log(fruits);
    return{
        productID: index + 1,
        name: fruit,
        qty: 0,
        price: "R10",
    }
});

//Sort
const sortedFruits = fruits.sort((a, b) => {
    if(a > b){
        return 1;
    } 
    if(a < b) {
        return -1;
    }
    return 0;
});

console.log(filtertedFruits)
console.log(mappedFruits);
console.log(sortedFruits);


console.log("=================")


//COMPARISON OPERATORS
const firstNameCopy = "Lucy";
console.log(firstNameCopy == firstName); //returns true
console.log(person == person2); //returns false -- don't occupy the same memory reference so they're not the same


const misMatchKeys = [];
const shouldListMisMatch = true;
Obeject.keys(person).forEach((key) => {

})


console.log("=================")


//CONDITIONALS
// If statement:
const nums = 20
if(nums == 20){
    console.log("nums == 20");
} else if(nums == 10){
    console.log("nums == 10");
} else {
    console.log("nums == ", nums);
}

// Switch statement:
switch (nums) {
  case 10:
    console.log("nums = 10");
    break;
  case 5:
    console.log("nums = 20");
    break;
  default:
    console.log("nums == ", nums);
    break;
}

// ternary operator:
nums == 10 
    ? console.log("nums == 10") 
    : nums == 20
    ? console.log("nums == 20")
    : console.log("nums == ", nums)


const numsGreaterThanTen = nums > 10 ? true : false;
console.log(numsGreaterThanTen);


console.log("=================")


//LOOPS -- FOR LOOPS

//For Loop
for(let i=0; i <= fruits.length; i++){
    console.log(fruits[i]);
}

//For Of Loop
for(const fruit of fruits){
    console.log(fruit);
}

//For Each Loop
fruits.forEach((fruit)=>{
    console.log(fruit);
});


console.log("=================")


//LOOPS -- WHILE LOOPS
let index = 0;
let isConditionSatisfied = false;
white(index < fruits.length);{
    console.log(fruits[index]);
    index++;
}
while(!isConditionSatisfied){
    console.log(index);
    if (index > 10) {
        isConditionSatisfied = true;
    }
    index++;
}


console.log("=================")


//FUNCTIONS
let todos = [
    {
        id: 1,
        title: "Learn HTML, CSS and JS",
        completed: false
    },
    {
        id: 2,
        title: "Write code",
        completed: false
    },
    {
        id: 3,
        title: "Get a SDE job",
        completed: false
    }]

console.log(areTasksDone(todos));
todos[1].completed = true;
console.log(areTasksDone(todos));

function areTasksDone(todos) {
    for (let todo of todos) {
      if (!todo.completed) {
        return false;
      }
    }
}


console.log("=================")


//CONSTRUCTOR FUNCTIONS
function User(firstName, lastName, bio, email){
    this.firstName = firstName;
    this.lastName = lastName;
    this.bio = bio;
    this.email = email;
}

User.prototype.getFullName = function () {
    return this.firstName + " " + this.lastName;
};

const user = new User("Lucy", "Barest", "this is a bio", "lnbare26@colby.edu");
console.log(user); //prints object literal
console.log(user.getFullName);


console.log("=================")


//CLASSES
const Person = class {
    constructor(firstName, lastName, bio, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.bio = bio;
        this.email = email;
    }
    getFullName(){
        return this.firstName + " " + this.lastName;
    }
};

const personClass = new Person("Lucy", "Barest", "this is a bio", "lnbare26@colby.edu");
console.log(personClass)
console.log(personClass.getFullName)



//write some func 
//again