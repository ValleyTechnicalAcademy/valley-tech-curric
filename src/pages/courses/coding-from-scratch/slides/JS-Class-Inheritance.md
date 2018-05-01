---
title: "JavaScript Class Inheritance" 
courseId:  "CFSG105"
cirriculum: 
  - "Web / Full Stack / Software Development"
type: "slide"
draft: false
---

class: middle

## Every object in JavaScript has an internal property called [[Prototype]].

--
The double square brackets that enclose [[Prototype]] signify that it is an internal property, and cannot be accessed directly in code.

```js
let x = {};

Object.getPrototypeOf(x);

//Output
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, …}
```

---

class: middle

### It is important to note that .**proto** is a legacy feature and should not be used in production code, and it is not present in every modern browser. However, we can use it throughout this article for demonstrative purposes.

```js
x.__proto__;

//Output
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, …}
```

---

class: middle center

## It is important that every object in JavaScript has a [[Prototype]] as it creates a way for any two or more objects to be linked.

???
When you attempt to access a property or method of an object, JavaScript will first search on the object itself, and if it is not found, it will search the object's [[Prototype]]. If after consulting both the object and its [[Prototype]] still no match is found, JavaScript will check the prototype of the linked object, and continue searching until the end of the prototype chain is reached.

At the end of the prototype chain is Object.prototype. All objects inherit the properties and methods of Object. Any attempt to search beyond the end of the chain results in null.

---

## In our example, x is an empty object that inherits from Object. x can use any property or method that Object has, such as toString().

--

```js
x.toString();

//output
[object Object]
```

???
let y = [];
If we take a look at the [[Prototype]] of the new y array, we will see that it has more properties and methods than the x object. It has inherited everything from Array.prototype.

`y.__proto__;`
[constructor: ƒ, concat: ƒ, pop: ƒ, push: ƒ, …]

---

class: middle

## Class Inheritance

* why do use it?
* now we dev at a meat shop
* [Good Article](https://www.thoughtworks.com/insights/blog/composition-vs-inheritance-how-choose)

---

class: middle

Composition over inheritance (or composite reuse principle) in object-oriented
programming is the principle that classes should achieve polymorphic behavior
and code reuse by their composition (by containing instances of other classes
that implement the desired functionality) rather than inheritance from a base or
parent class.[2] This is an often-stated principle of OOP, such as in the
influential book Design Patterns.[3]

---

class: middle center

> Wha?

---

```javascript
let meat1 = {
  name: "Pork Chop",
  price: 8.33,
  calculateTax() {
    return this.price * 0.08;
  }
};

let meat2 = {
  name: "Flank Steak",
  price: 2.99,
  calculateTax() {
    return this.price * 0.08;
  }
};

let meat3 = {
  name: "T-Bone",
  price: 3.89,
  calculateTax() {
    return this.price * 0.08;
  }
};
```

---

class: middle center

![inline](http://ustutorials.com/tutorials-images/Javascript-Objects-Treasure-Map.jpg)

---

class: middle

# Function Constructor

```javascript
var Meat = function(name, price, cut) {
  this.name = name;
  this.price = price;
  this.cut = cut;
  this.calculateTax = function() {
    return this.price * 0.08;
  };
};

let dinner = new Meat("porkchop", 10.99, "butt");
let steak = new Meat("steak", 10.99, "t-bone");
let vegan = new Meat("Soy", 10.99, "ewwww");
console.log(dinner.calculateTax());
```

???

```js
function Produce(name, price) {
this.name = name;
this.price = price;
this.calculateTax = function() {
return this.price \* 0.08;
}
}

let apple = new Produce('apple', 2.05);
let pinnapple = new Produce('pinnapple', 5.85);
console.log(apple);
// http://jsbin.com/rosijuxexa/2/edit?js,console

var Meat = function(name, price, cut) {
this.name = name;
this.price = price;
this.cut = cut;
};
Meat.prototype = {
calculateTax: function() {
return this.price \* .08;
}
}
```

---

# Still not sure?

???

```js
// Initialize constructor functions
function Hero(name, level) {
  this.name = name;
  this.level = level;
}

function Warrior(name, level, weapon) {
  Hero.call(this, name, level);

  this.weapon = weapon;
}

function Healer(name, level, spell) {
  Hero.call(this, name, level);

  this.spell = spell;
}

// Link prototypes and add prototype methods
Warrior.prototype = Object.create(Hero.prototype);
Healer.prototype = Object.create(Hero.prototype);

Hero.prototype.greet = function() {
  return `${this.name} says hello.`;
};

Warrior.prototype.attack = function() {
  return `${this.name} attacks with the ${this.weapon}.`;
};

Healer.prototype.heal = function() {
  return `${this.name} casts ${this.spell}.`;
};

// Initialize individual character instances
const hero1 = new Warrior("Bjorn", 1, "axe");
const hero2 = new Healer("Kanin", 1, "cure");
```

[Link](https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript)

---

#Exercise
Use the example of Meat to create a Function Constructor for a Van. It should have the following properties.

* make
* model
* seating (number)
* speed
* **AND** a method called 'increaseSpeedBy'. This method will take 1 argument, a number, and increase the current speed by that amount, _and_ return the new speed.

Once we've created our Van Class, let's make 3 instances of it.

---

class: middle

# Error Handling

* Be a good developer
* handling all possible cases.....safely
* you only get 1 throw, no more!!!

---

![](https://javascript.info/article/try-catch/try-catch-flow@2x.png)

---

class: middle

```javascript
try {
    Block of code to try
}
catch(err) {
    Block of code to handle errors
}
finally {
    Block of code to be executed regardless of the try / catch result
}
```

---

class: middle

```javascript
let puppies;

try {
  let result = puppies.peedInTheToilet();
} catch (ex) {
  console.log("oops!");
}
```

---

class: middle

```javascript
function productOrderValidationTask(productName, quantity) {
  try {
    if (quantity <= 0) {
      throw new Error(
        `You need to enter a quantity for ${productName} greater than zero!`
      );
    } else {
      return true;
    }
  } catch (ex) {
    console.log(`${ex.name}: ${ex.message}`);
  }
}

productOrderValidationTask("Milk", 2);
productOrderValidationTask("Cheese", 0);
```

---
