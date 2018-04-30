---
title: "JavaScript Decision Constructs" 
courseId:  "CFSG105"
cirriculum: 
  - "Software Development"
type: "slide"
draft: false
---

class: middle

# Boolean Logic

### It's true or false, right?

---

class: middle

# Naming, variables like

* var hasThing;
* let isOfThing;
* const hasEnabledThing;

---

class: middle

# Boolean Operators

* && (AND)
  * both must evaluate to true
* || (OR)
  * only one needs to evaluate to true
* ! (NOT)
  * inverts the bool

---

class: middle

## Examples

```javascript
true && true; //output is true

false && true; //output is false

false || true; //output is true

!true; //output is false

(false && !false) || true; // ??
```

---

class: middle

# Relational Operators

* Greater Than, Less Than
  * `> < >= <=`
* Not equal
  * `!=`
* Equality
  * `==`
* Wha?
  * `===`

---

class: middle center

# So it's pretty straight forward....

--

# Truthy or Falsey

---

class: middle

## We get the following as the so-called "falsy" values:

* undefined
* null
* false
* +0, -0, and NaN
* ""

### what's _NaN_ ?

---

```js
//Todo's
var a = new Boolean(false);
var b = new Number(0);
var c = new String("");
//What is d ? True or False ?
var d = Boolean(a && b && c);

var e = []; // empty array -- truthy or falsy?
var f = {}; // empty object -- truthy or falsy?
var g = function() {}; // empty function -- truthy or falsy?
//What is 'pants' True or False ?
var pants = Boolean(e && f && g);
```

---

class: middle

# Decision Constructs

* if and if-else statements
* flow control

```javascript
const evaluateSomething = true;

if (evaluateSomething) {
  doStuff();
}

//Evaluates the condition. In this case the value of "evaluateSomething"
//this will execute if the condition is true
```

---

class: middle

# Decision Constructs

* and the if-else

```javascript
const evaluateSomething = false;

if (evaluateSomething) {
  doStuff();
} else {
  otherwiseDoThis();
}
```

---

class: middle

# Decision Constructs

* and the else if part

```javascript
const evaluateSomething = false;
const evaluateOtherThing = true;

if (evaluateSomething) {
  doStuff();
} else if (evaluateOtherThing) {
  otherwiseDoThis();
}
```

---

### Nested if Statements :frowning:

```js
if (Check#1)
{
    CodeBlock#1
    if (Check#2)
    {
        CodeBlock#2
        if (Check#3)
        {
            CodeBlock#3
            if (Check#4)
            {
                CodeBlock#4
                if (Check#5)
                {
                    CodeBlock#5
                    if (Check#6)
                    {
                        CodeBlock#6
                        if (Check#7)
                        {
                            CodeBlock#7
}
```

---

class: middle

#Ternary Operator (?:)
`condition ? if-true-execute-this : if-false-execute-this;`
--

```js
var now = new Date();
var greeting = "Good" + (now.getHours() > 17 ? " evening." : " day.");
// greeting will evaluate to "Good day."
```

---

class: middle

## JS distinguishes expressions and statements

* ## Expression: produces a value

* ## Statements: performs an action

---

#Todo

```js
function dinnerMenu(item) {
  if (!item) {
    console.log("Having meat loaf");
  } else {
    console.log("Having ice cream");
  }
}
//TODO
//Call the the function 3 separate times
//Once with a string, number, and a boolean
//Be sure to get ice cream for dinner each time!
```

## [Second Lab](http://jsbin.com/hamiyow/1/edit?js,console)

---

class: middle

# Strings and Template Literals

* Useful string methods
  * `split()`
  * `toLowerCase()`
  * `trim()`
  * `replace()`
  * [Learn More!](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

---

class: middle

# String concatenation

* `"kittens" + "are cute"` // kittensare cute
* `"dogs " + "are fine"` // dogs are fine

--

```javascript
const pants = "dockers";

console.log("I wear " + pants); // I wear dockers

//ES2015
console.log(`I wear ${pants}`); // I wear dockers
```

---

class: middle

## Math

* there are some math methods
* when you need one, look it up, no really

```javascript
// Returns a random integer between min (included) and max (included)

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

---
