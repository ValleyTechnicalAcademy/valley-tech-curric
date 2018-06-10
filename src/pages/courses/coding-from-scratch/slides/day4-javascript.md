---
title: "DAY 4 - JavaScript Brings Brainpower"
courseId:  "CFSG105"
cirriculum:
  - "Web / Full Stack / Software Development"
type: "slide"
draft: false
---
class: middle center
# Intro to JavaScript

---

class: middle

# The meat

### JavaScript, the core language (ECMAScript)

* ECMAScript such as ES3, ES5, and ~~ES6~~ ES 2015
* Runs all the places
* object oriented programming (OOP)
* C++, Object Pascal, Java, Python, PHP
* functional programing
* Common Lisp, Scheme, Clojure, Erlang, OCaml, Haskell, and F#

???
OOP -> inheritance for code reuse and extensibility in the form of either
classes or prototypes. Composition, inheritance, and delegation Polymorphism FP
-> calling a function f twice with the same value for an argument x will produce
the same result f(x) each time First-class and higher-order functions Pure
functions Recursion

---

class: middle

# So which is Javascript ?

![confused](https://emojipedia-us.s3.amazonaws.com/thumbs/120/google/119/confused-face_1f615.png)

> Prototype-based programming is a style of object-oriented programming in which
> classes are not present, and behavior reuse (known as inheritance in
> class-based languages) is performed via a process of cloning existing objects
> that serve as prototypes. This model can also be known as classless,
> prototype-oriented or instance-based programming.

---

class: middle

# JavaScript is a loosely typed or a dynamic language.

* which means you do not declare the data types of variables explicitly.
* In many cases JavaScript performs conversions automatically when they are needed.

---

class: middle

## JS Types

### Six data types that are primitives:

* Boolean
* Null
* Undefined
* Number
* String
* Symbol (new in ECMAScript 6)
* Object

---

class: middle

## JS Variables

```JavaScript
var car = "sedan";
let name = "Bobby";
const lastName = "Smith";
```

---
class: middle
## JS Logging & Alerts

```JavaScript
var car = "sedan";
let name = "Bobby";
const lastName = "Smith";

console.log(car);
console.log(lastName);
alert(name);
alert("My name is " + name);
```
---
class: middle
## JS Prompts

```JavaScript
var yourName = prompt("What is your name?");
alert('Hello ' + yourName + '! Nice to meet you.');
```

---
class: middle
## IF / Else Statements

* Crucial to programming

* Can be an IF, or an ELSE IF, or ELSE

* Uses { }
---
class: middle

## If / Else Exercise

1. Prompt the user and ask them “What is your favorite band?” and store their response in a variable.

2. Create an if / else statement that compares their response with your favorite band.

3. If the bands match, alert “Awesome! Me too!”

4. If they do NOT match, say “That’s cool… I guess”

---


class: middle
## JS Arrays

```JavaScript
var zooAnimals = ['zebra', 'rhino', 'giraffe', 'owl'];
```
---
class:middle
## JS Arrays

- Arrays a type of variable that are collections.

- These collections can be made up of strings, numbers, Booleans, other arrays, objects, anything.

- Each element of the array is marked by an index. Indexes always start with 0.

---
class: center
![](https://i.imgur.com/VRSkSGd.jpg)
---
class: middle
## JS Arrays

- To recover the value at any specific index you include the name of the array with a square bracket [ ] and inside the bracket is the element’s index.  

- You can easily grab the number of elements in the array using the method array.length

```Javascript
var zooAnimals = ['zebra', 'rhino', 'giraffe', 'owl'];
console.log(zooAnimals[2]);
console.log(zooAnimals[0]);
console.log(zooAnimals.length);
```
---
class:middle
## JS Array Exercise

#### Create an array of 5 of your favorite bands.

1. Log the First band onto the console.

2. Log the 3rd band onto the console.

3. Try to Log out the 6th band in the array (it does not exist!) What happens instead?

---
class: middle
## Refactoring + JS Methods

- Let’s rewrite our code to use our array of bands.

- Delete the If / Else statement.

- Rewrite it using our `bands` array and `indexOf()`

---
class: middle
## JS Objects

```JavaScript
var josuesCar = {
    make: "Scion",
    model: "xB",
    year: 2006,
    color: "black",
    run: function() {
        console.log('Vroom vroom!');
    }
}
```
---
class: middle
## JS Object Exercise

- Create an object of your car or dream car
- Tell us the make, model, year, color, years owned, 2 functions: run, stop
- Using dot notation, log out the same information onto the console
---
class: middle

## JS Functions

> execute, do something You can reuse code: Define the code once, and use it
> many times.

```javascript
let x = myFunction(4, 3); // Function is called, return value will end up in x
function myFunction(a, b) {
  return a * b; // Function returns the product of a and b
}

let z = function(a, b) {
  //function expression
  return a * b;
};
```

???
A JavaScript function is defined with the function keyword, followed by a name,
followed by parentheses (). Function names can contain letters, digits,
underscores, and dollar signs (same rules as variables). The parentheses may
include parameter names separated by commas: (parameter1, parameter2, ...) The
code to be executed, by the function, is placed inside curly brackets: {}
function name(parameter1, parameter2, parameter3) { code to be executed }
Function parameters are the names listed in the function definition. Function
arguments are the real values received by the function when it is invoked.
Inside the function, the arguments (the parameters) behave as local variables.

---

class: middle

## Create a function

```javascript
let result = addDivideByTwo(16, 4); //result = 10
```

???

Answer Town

function addDivideByTwo(num1, num2) { return ((num1 + num2) / 2); }

---

class: middle

# Scope

```javascript
function hoist() {
  a = 20;
  var b = 100;
}
hoist();
console.log(a);
/*
Accessible as a global variable outside hoist() function
Output: 20
*/
console.log(b);
```

---

class: middle

# Hoisting

> Function declarations are hoisted over variable declarations but not over
> variable assignments.

```javascript
var double;

function double(num) {
  return num * 2;
}

console.log(typeof double); // Output type: ?
```

---

class: middle

# JS ES 2015

```javascript
let x = myFunction(4, 3);

let myFunction = (a, b) => a * b;

function sameFunction(a, b) {
  return a * b;
}
```

---

class: middle

# JS Scope and Context

### Global Scope

```javascript
var name = "Billy Bob";
console.log(name); // logs 'Billy Bob'

function logName() {
  console.log(name); // 'name' is accessible here and everywhere else
}

logName(); // logs 'Billy Bob'
```
