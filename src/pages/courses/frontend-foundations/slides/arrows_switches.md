---
title: "Arrow Functions, Switches, Try/Catch/Finally"
courseId:  "FSWG101"
cirriculum:
  - "Web / Full Stack / Software Development"
type: "slide"
draft: false
---
class: middle center

# Another Day, Another App

![](https://i.redditmedia.com/oO43xM8JgPj6X78Fa7VlXFJOZZ72ohriyGKvufy-RPM.jpg?s=9ae562048c03a6f0115d2ebe9f0362bf)

---
class: middle center
## Lets use JSBin, It tracks errors

#### http://jsbin.com/?js,console
---
class: middle center

## Morning Warmup #1

* http://jsbin.com/zemivit/edit?js,console
???
- Warmup (1)
---
class: middle center
## Arrow Functions

<p>The ES6 Way of Writing Functions</p>

---
class: middle center
## Arrow Functions

<p>Arrow Functions are the alternative way to write functions.</p>

<p>They save time with shorter syntax.</p>

---
## Arrow Functions

### REGULAR Function
```javascript
function myFunction(param1, param2) {
  return param1 + param2;
}

myFunction(2, 4);
```

### ARROW Function
```javascript
const addFunction = (param1, param2) => {
  return param1 + param2;
};

addFunction(2, 4);
```
---
class: middle center
# Implicit Return

<p> Cool for 1-liners of code </p>

---
### Arrow Functions - Implicit Return

##### Example 1
```javascript
const addFunction = (param1, param2) => param1 + param2;

addFunction(2, 4);
```

##### Example 2
```javascript
const stringFunction = string => string + '!';

stringFunction('My name is Hermione');
```
---
## No Parameters? No Problem

### Regular Function
```javascript
function hello() {
  console.log('Hello World!');
}
```

### Arrow Function with 0 Parameters
```javascript
const hello = () => console.log('Hello World!');
```

---
class: middle center
# Your Turn! #2

* http://jsbin.com/bobedo/edit?js,console
???
EXERCISE Arrow functions (1)
---
## Arrow Functions - Default Parameters

```javascript
const defParam = (a, b = 20) => a * b;

defParam(10);
```
---
class: middle center
## Switch Statements

![](https://cdn-images-1.medium.com/max/800/1*1APKslCDoGX0ho-klL5PbQ.png)

---
class: middle center
## Switch Statements

<p>Similar to IF/ELSE statements. Has a different syntax that is easier to write
in some situations</p>

---
## Switch Statements

```javascript
switch (expression) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
  case value3:
    statement3;
    break;
  default:
    defaultStatement;
}
```
---

## Switch Statements
```javascript
let day = 4;
let dayName;
switch (day) {
  case 1:
    dayName = 'Sunday';
    break;
  case 2:
    dayName = 'Monday';
    break;
  case 3:
    dayName = 'Tuesday';
    break;
  case 4:
    dayName = 'Wednesday';
    break;
  case 5:
    dayName = 'Thursday';
    break;
  case 6:
    dayName = 'Friday';
    break;
  case 7:
    dayName = 'Saturday';
    break;
  default:
    dayName = 'Invalid day';
}
console.log(dayName);
```
---
class: middle center
# Your Turn #3

* http://jsbin.com/ferejed/edit?js,console
???
EXERCISE Switch Statement
---
class: middle center
## Try Catches

* This will save your ass.
---
class: middle center
## Try Catches

<p>Try Catches are our safeguards as developers to prevent an error from
appearing for a user. In case our code breaks, we can hide it or minimize
the "damage".</p>

---
## Try Catches

```javascript
try {
  // code block goes here
} catch (err) {
  // error handling
}
```
---
## Try Catches

```javascript
try {
  alert('Start of try block'); // #1 This line executes

  randomVariable; // error, variable is not defined!

  alert('End of try (never reached)'); // #2 This line is never reached
} catch (err) {
  alert('Error has occurred!'); // #3 This is line executed since an error has occurred.
}

alert('...Then the execution continues'); // #4 Finally, this is executed.
```
---
class: middle center
## Your Turn #4

* http://jsbin.com/xisuhiw/edit?js,console

???
EXERCISE Try/Catch
---
## Try Catch FINALLY

<p>Another component of Try/Catch</p>

---
## Try Catch FINALLY

```javascript
try {
  // Block of code to try
} catch (err) {
  // Block of code to handle errors
} finally {
  // Block of code to be executed regardless of the try..catch result
}
```
---
## Try Catch FINALLY
```javascript
function myFunction() {
    let message = document.getElementById("message");
    message.innerHTML = "";
    let x = document.getElementById("demo").value;
    try {
        if(x == "") throw "Please input a number";
        if(x < 10) throw "Your number is too low!";
        if(x > 25) throw "Your number is too high!";
    }
    catch(err) {
        message.innerHTML = "Input " + err;
    }
    finally {
        document.getElementById("demo").value = "";
    }
}
```
---
class: middle center
# Your Turn #5

* http://jsbin.com/xulefuh/edit?js,console
???
EXERCISE TRY/CATCH/FINALLY - Throw
---
class: middle center
## Ternary Operator

<p>Shorthand IF/ELSE Statement</p>

---
## Ternary Operator
```javascript
condition ? expression on true : expression on false
```
---
## Ternary Operator

## TRADITIONAL IF/ELSE
```javascript
let age = 17;

if (age >= 18) {
  ('Welcome to our site.');
} else {
  ('Sorry, you must be 18 or older to enter');
}
```

## TERNARY
```javascript
let age = 17;

const isOldEnough = age >= 18 ? 'Welcome to our site.' : 'Sorry; you must be 18 or older to enter.';
```
---
class: middle center

# Your Turn! #6

* http://jsbin.com/vesayer/edit?js,console

???
EXERCISE TERNARY

---
class: middle center
## Some More Practice

* http://jsbin.com/pigopin/edit?js,console

---
class: middle center
## If We Have Time...

* http://jsbin.com/dunefid/edit?js,console
