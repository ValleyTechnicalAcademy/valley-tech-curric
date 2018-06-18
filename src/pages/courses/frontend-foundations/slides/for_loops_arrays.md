---
title: "For Loops & Array Manipulation"
courseId:  "FSWG101"
cirriculum:
  - "Web / Full Stack / Software Development"
type: "slide"
draft: false
---
class: middle center

# Good Morning!

![](http://32dayz.com/blog/wp-content/uploads/2015/03/%D0%91%D0%B5%D0%B7-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B816.png)

---
class: middle center
# Todays All CodePen!

#### https://codepen.io
---

## JS Warmup

```JavaScript

    // 1. How do we write the whole name out into the console?

    let firstName = "Noah";
    let lastName = "Rodriguez";
    console.log(???);

    // 2. How do I console log the THIRD index in the array?

    let superheroes = ['The Flash', 'Batman', 'Wonder Woman', 'Ant Man', 'Spider-Man'];
    console.log(???);

    // 3. Which line will log out?
    let a = "17";
    if (typeof a === "string") {
        console.log('B is a string');
    } else {
        console.log('B is NOT a string')
    }
```
???

Morning Warmup Slide

---
class: middle center
# For Loops

<p>For Loops are used to <b>REPEAT</b> lines of code.<br><br> This <b>saves us time</b> so we do not write the same things over & over again.</p>

???
LECTURE For Loops
---

class: middle
# FOR LOOP SYNTAX

```javascript
for (var i = 0; i < 4; i++) {
    //commands to be repeated go inside the body marked by opening and closing curly braces
}
```
---
### NO FOR LOOP
```JavaScript
var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

console.log("I love " + vegetables[0]);
console.log("I love " + vegetables[1]);
console.log("I love " + vegetables[2]);
console.log("I love " + vegetables[3]);
```

### WITH FOR LOOP
```JavaScript
// Creating an array of vegetables.
var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

// Looping through each item in the array and logging a message to the console.
for (var i = 0; i < vegetables.length; i++) {
  console.log("I love " + vegetables[i]);
}
```

???
EXAMPLES
---
# YOUR TURN! #1

```JavaScript
// Array of zoo animals.
var zooAnimals = ["Zebra", "Rhino", "Giraffe", "Owl"];

// Rewrite the following code to print all of the animals using a for-loop.
console.log(zooAnimals[0]);
console.log(zooAnimals[1]);
console.log(zooAnimals[2]);
console.log(zooAnimals[3]);

```
???
EXERCISE 1: For Loop

---
# Your Turn! #2
### Check the Customer's Ages

```javascript
var customerAges = [19, 22, 25, 33, 20, 21, 25];

// Looping through our myFarm array.
for (var j = 0; j < ???; j++) {

    // Alert the farm animal in the current index.
    alert(???);

    // If the number IS GREATER THAN OR EQUAL TO 21,
    // Ask if they would like an alcoholic beverage.
    // If they are under age, ask if they would like a soda instead
    if (??? >= 21) {
        console.log('Would you like an alcoholic beverage?');
    } else {
        console.log('Would you like a soda?');
    }

}
```

---
class: middle center
# Array Methods

### sort() - Sorts Alphabetically

```JavaScript
var colors = ["yellow", "blue", "red"];
colors.sort();   // the new array will be ["blue", "red", "yellow"];
```

### push() - Adds To Array

```JavaScript
var colors = ["yellow", "blue", "red"];
colors.push("purple");  // the new array will be ["yellow", "blue", "red", "purple"];
```
---
# Array Methods

### pop() - Subtracts From Array

```JavaScript
var colors = ["yellow", "blue", "red"];
colors.pop();   //the new array will be ["yellow", "blue"];
```

### ES6 Spread Operator - Add Arrays

```JavaScript
let midArray = [12, 13];
let normArray = [1, 2, 3, ...midArray, 4, 5];
/// normArayy is [1, 2, 3, 12, 13, 4, 5]
```

???
LECTURE Spread Operator

---
# Your Turn! #3 - In Teams of 2/3

```JavaScript
// We have an array of numbers

allNumbers = ['2','19', '17','4', '25','166','801', '255','57'];
evenNumbers = [];
oddNumbers = [];

// We need to move some numbers into the other array.
// Move all even numbers into the `evenNumbers` array and move all of the
// odd numbers into the `oddNumbers array.

// *HINT* You will need a for loop, and if statement, and .push();
```


???
EXERCISE 2: Push/Pop
---
class: middle center

# Let's Break For Lunch
---
class: middle center
# Objects
???
LECTURE Objects, dot notation, scoping
---
class: middle center
# Objects

<p>Objects group data together</p>

---
# Objects

```
let vehicle = {
    make: "Scion",
    model: "xB",
    weightInPounds: 3480,
    color: "Black",
    numberOfDoors: 4,
    manualTransmission: true
}
```

---
class: middle center
# Your Turn #4

### https://codepen.io/hexagonstorms/pen/mKqLvM?editors=0012#

---
class: middle center
# JS Scope

<p>Scope is how and where we can access different variables within our code.</p>

???
LECTURE Global Scope
---

```javascript
var test = "I'm global!";

function testScope() {
  var test = "I'm local!";

  console.log (test);     
}
testScope(); // Output: I'm local!
console.log(test); // Output: I'm global!
```

---

# Your Turn! #5

1. Create an Object literal called "objectMe" with the following properties: firstName, lastName, age, spaceShip as an object with the following properties: type, name, boosters, shields, numberOfCrew. The last property of objectMe hobbies(as an Array).

2. Console.log out the following: spaceShip name and spaceShip numberOfCrew

3. Create a new property on your existing object called addHobby, this property will be a function that takes a new hobby as a string and adds it to the array of hobbies!!!
```
