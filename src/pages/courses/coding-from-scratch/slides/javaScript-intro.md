---
title: "JavaScript Intro"
courseId:  "CFSG105"
cirriculum:
  - "Web / Full Stack / Software Development"
type: "slide"
draft: false
---

class: middle

## Coder Camps

### Programming with Javascript

wifi:exeterGuest
pw: Fullstackweb

---

class: middle

## Accounts && Other Needed

### Exeter LMS (learn portal) [Link](https://login.exeterlms.com)

### Github (Add to LMS Profile) [Link](https://github.com/)

### Coder Camps Troops (slack) [Link](https://codercampstroops.slack.com)

### Editor (VSCode, Sublime, vim) [Link](https://code.visualstudio.com/)

### Install Node, Git, [Node](https://nodejs.org/en/) [Git](https://git-scm.com/)

### Open your Terminal / Cmd

---

class: middle

# The meat

### JavaScript, the core language (ECMAScript)

* ECMAScript such as ES3, ES5, and ~~ES6~~ ES 2015
* Runs all the places
* object oriented programming (OOP)
  * C++, Object Pascal, Java, Python etc
* function programing
  * Common Lisp, Scheme,Clojure, Erlang, OCaml, Haskell, and F#

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

# Hositing

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

# JS Remember ES 2015 ?

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

---

class: middle

# Git and Version Control

* What is version control
* Other options
  * TFS
  * Subversion
* Git work flow (aka, making PR's)
* (Hey Josue, what's a PR?)

---

class: middle

![git flow](https://image.slidesharecdn.com/git-150804144903-lva1-app6892/95/git-workflow-10-638.jpg?cb=1438699817)

---
