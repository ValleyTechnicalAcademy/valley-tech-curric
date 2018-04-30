---
title: "JavaScript Loops" 
courseId:  "CFSG105"
cirriculum: 
  - "Software Development"
type: "slide"
draft: false
---

class: middle

# Loops

## But first Arrays and Objects

---

class: middle center

# Arrays

### arrays are used to store multiple values in a single variable.

.left[

```js
var car1 = "Saab";
var car2 = "Volvo";
var car3 = "BMW";
```

## ]

# Lame

---

class: middle center

# This is way cooler

```js
var cars = ["Saab", "Volvo", "BMW"];
```

---

class: middle center

# Declaring Arrays with '[]'

* `var cars = new Array("Saab", "Volvo", "BMW");`
* `var person = [];`

---

class: middle

.center[

# Access (index into) an Array item

]

* Count starts at Zero
* New items are added to the end

```js
var cars = new Array("Saab", "Volvo", "BMW");
cars[0]; //"Saab"
cars[1]; //"Volvo"
cars[3]; // ??
```

---

# Array Methods

* length
* push()
* pop()
* indexOf()

[Complete Listing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

---

class: middle center

# So, remember Loops ?

---

class: middle

## Loop Constructs

* silly powerful
* for - loops through a block of code a number of times.
* Loops offer a quick and easy way to do something repeatedly. This chapter of the JavaScript Guide introduces the different iteration statements available to JavaScript.

```javascript
for (var i = 0; i < 5; i++) {
  console.log(i);
}
```

## [Details](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

---

Let's do some!

* [Pluralize Animals](http://jsbin.com/boyegeq/2/edit?js,console)
* [Empty Array](http://jsbin.com/fagefac/9/edit?js,console)
* [Does Array Contain](http://jsbin.com/ligivo/1/edit?js,console)

---
