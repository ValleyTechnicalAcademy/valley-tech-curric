---
title: "React Intro"
courseId:  "FSWG105-RT"
cirriculum:
  - "Web / Full Stack / Software Development"
type: "slide"
draft: true
---

class: middle center
![inline](https://cdn-images-1.medium.com/max/700/1*yQPzM3BaubJgWQkoL29iOw.png)

---

class: middle center

## Cool, who are you?

.left[

* Josue Plaza
* Full Stack Instructor @ Valley Tech
* I Enjoy JavaScript, no really
* Recovering journalism major
  ]

---

class: middle center

## So what is React ?

---

class: middle center

## What it's not

.left[

* An event system (other than vanilla DOM events)
* Any AJAX capabilities whatsoever
* router for routing things like redirects
* Fetch (or axios) for HTTP requests
* A wide variety of techniques for CSS encapsulation
* Enzyme for additional unit-testing utilities.
* Any form of a data layer
* Promises
* Any application framework at all
* Opinions of any sort of the above
* Any idea how implement the above
  ]

---

class: middle center

## Ummm, ok, I guess I still want to know ?

![inline](http://www.tvovermind.com/wp-content/uploads/2017/03/Ted.jpg)

---

class: middle center

## Hard Sell

> React gives you the full power of JavaScript in all aspects of your application instead of giving you a watered-down way to control interactions.

~ someone on internet

---

class: middle center

## The DOM

![inline](https://cdn.css-tricks.com/wp-content/uploads/2013/12/dom-dom-dom-dom.jpg)

---

class: middle center

## Only peasants manually manipulate the DOM

![inline](http://adscam.typepad.com/.a/6a00d8341bfa1853ef0120a60bc023970b-800wi)

---

class: middle center

# React ...is rad

---

class: middle center

## What is it

.left[

* React is ONLY THE VIEW LAYER.
* You DO NOT GET any of the following:
  ]

---

class: middle center

### NOPE

.left[

* An event system (other than vanilla DOM events)
* Any AJAX capabilities whatsoever
* React-router for routing
* Fetch (or axios) for HTTP requests
* A wide variety of techniques for CSS encapsulation
* Enzyme for additional unit-testing utilities.
* Any form of a data layer
* Promises
* Any application framework at all
* Any idea how implement the above
  ]

---

class: middle center

## So why am i learning this?

---

class: middle center

## Only peasants manually manipulate the DOM

---

class: middle center

## Fast render with Virtual DOM

![inline](https://image.slidesharecdn.com/react-webinar-161101082735/95/react-webinar-with-codepolitan-17-638.jpg)

---

class: middle center
![inline](https://image.slidesharecdn.com/reacttalk-140508080139-phpapp01/95/reactjs-om-a-handson-walkthrough-of-better-ways-to-build-web-uis-8-638.jpg?cb=1399536390)

---

class: middle center

# HTML is Javascript? shut your mouth!

.left[

* it's not HTML, it's markup, say it out out loud
* Resuable components
* small, simple, concise components
* Bundling Javascript and HTML into JSX makes components easily understandable.
* Embedding Expressions in JSX
* no special template logic
  ]

---

## Like so

```js
const elements1 = document.querySelectorAll("div");
const elements2 = document.getElementsByTagName("div");
const newElement = document.createElement("div");

document.body.appendChild(newElement);
elements1.length === elements2.length; // false
```

---

class: middle center

## Instead

.left[

1. Declare what we want our web app to look like
2. Pass it our data
3. There is no step 3

* (This declaration is refered to as a component)
  ]

---

class: middle center

## HTML is Javascript? shut your mouth!

.left[

* it's not HTML, it's markup, say it out out loud
* Resuable components
* small, simple, concise components
* Bundling Javascript and HTML into JSX makes components easily understandable.
* Embedding Expressions in JSX
* no special template logic, just more JavaScript
  ]

---

.middle[## JSX what ?]

```js
render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }
```

---

class: middle center

# All the dev things

.left[

* great tooling (react cli, redux, create-react-app, webpack, rollup, npm, yarn...)
* vibrant community, help, tutorials,
  ]

---

class: middle center

### With that

> "React is not just a library, but an idea,a concept to executed anyway you like or see fit to"

~someone giving a presentation
