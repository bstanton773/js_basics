console.log('My name is Brian Stanton');


// Basics of JavaScript

/*
    Multiline Comment in JavaScript
    -- Variable Declaration in JavaScript --
    Primitive Types: Strings, Numbers, Boolean, Undefined, Null
    Objects: Objects, Arrays, Functions
    Control Flow in JavaScript
*/

// String declaration
var myName = 'Brian';

// console.log() is equivalent to python's print()
console.log(myName);
console.log(typeof(myName));

var age;

console.log(age);

// Strings can be delimited by '', "", or ``. The tick marks `` have a special behavior to format
console.log("My name is ${myName}")
console.log('My name is ${myName}')
console.log(`My name is ${myName}`)


// Integer
var myAge = 65;

console.log(myAge);
console.log(typeof(myAge));

// Float
var pi = 3.14;

console.log(pi);
console.log(typeof(pi));


// Booleans
var someBool = true;
var someOtherBool = false;

console.log(someBool, someOtherBool);
console.log(typeof(someBool));


// Undefined
var something;
console.log(something);
console.log(typeof(something));


// null
var someNull = null;

console.log(someNull);
console.log(typeof(someNull));


// Array
var myArray = ['Brian', 2, 3, 4, 5];
console.log(myArray);console.log(typeof(myArray));

// Arrays are indexable
console.log(myArray[0])

// Arrays have a length attribute/property
console.log(myArray.length)


// Object
var person = {
    first: 'Brian',
    last: 'Stanton',
    languages: ['Python', 'JavaScript']
};
console.log(person);
console.log(typeof(person));

// Bracket Notation
console.log(`My last name is ${person['last']}`);

// Dot Notation
console.log(`My last name is ${person.last}`);


console.log(`Today we are learning ${person.languages[1]}`)


console.log(`My full name is ${person['first']} ${person['last']}`)



// let vs var - let is block-scoped, var is global-scoped
let myCity = 'Chicago';
let hello;


console.log(hello);
console.log(typeof(hello));


var adult = true;

if (adult) {
    var mySchool = 'Illinois';
    let color = 'Blue';
    console.log(color);
}


console.log(mySchool);
console.log(myCity);



// const - similar to let (block scoped) - needs value when declared - cannot be reassigned
const myBirthday = true;
let ageOfPerson = 33;

if (myBirthday) {
    const myFavColor = 'Orange';
    ageOfPerson = ageOfPerson + 1;  // Ok because age is declared with let
    console.log(ageOfPerson);
    // myBirthday = false;  // Error because myBirthday declared with const so cannot be reassigned
};

// console.log(myFavColor);



const cities = ['Chicago', 'New York', 'Boston', 'Los Angeles']

console.log(cities);

cities[2] = 'Denver';

console.log(cities);

// cities = ['Austin', 'Portland']



// JavaScript Hoisting
console.log(hoist);
var hoist = 'example';
console.log(hoist);