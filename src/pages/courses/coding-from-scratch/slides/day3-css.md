---
title: "DAY 3 - CSS Gives It Style"
courseId:  "CFSG105"
cirriculum:
  - "Web / Full Stack / Software Development"
type: "slide"
draft: false
---
class: middle center
# CSS Gives It Style
---

class: middle
### HTML: Hypertext Markup Language – (Content)

### CSS: Cascading Style Sheets – (Appearance)

#### HTML/CSS are the “languages of the web.” Together they define both the content and the aesthetics of a webpage – handling everything from the layouts, colors, fonts and  content placement.  (JavaScript is the third – handling logic, animation, etc.)

---
class: middle center
#HTML Alone

### Like creating pages in “Notepad.”

### Can only write unformatted text.

![inline](https://vignette.wikia.nocookie.net/htmlcss/images/2/29/Notepad_Logo.png/revision/latest?cb=20101004230208)

---
class: middle center
# HTML with CSS

### Like creating pages in Photoshop!

### Can format text, page settings, alignment, etc. based on “highlighting” and menu options.

![inline](https://usercontent2.hubstatic.com/12801103_f520.jpg)

---
class: center

# HTML Code
![inline](http://www.valleytechnicalacademy.com/wp-content/uploads/2018/05/Screen-Shot-2018-05-02-at-4.43.31-PM.png)
---
class: center
# HTML Code
![inline](http://www.valleytechnicalacademy.com/wp-content/uploads/2018/05/Screen-Shot-2018-05-02-at-4.43.42-PM.png)

---
class: center
# HTML Code

![inline](http://www.valleytechnicalacademy.com/wp-content/uploads/2018/05/Screen-Shot-2018-05-02-at-4.43.52-PM.png)

---
class: center
# With some CSS...
![inline](http://www.valleytechnicalacademy.com/wp-content/uploads/2018/05/Screen-Shot-2018-05-02-at-4.44.04-PM.png)

---
class: center
# ... you can create this.
![inline](http://www.valleytechnicalacademy.com/wp-content/uploads/2018/05/Screen-Shot-2018-05-02-at-4.44.11-PM.png)

---
## CSS Syntax

.left[
* CSS works by hooking onto selectors added into HTML using “classes and identifiers.”

* Once hooked, we apply styles to those HTML elements using CSS.
]

![inline](http://www.valleytechnicalacademy.com/wp-content/uploads/2018/05/Screen-Shot-2018-05-02-at-4.44.28-PM.png)

---
class: middle center
# CSS Example

``.bigBlue
{
	font-size: 100px;
	color: blue;
}``

``<p class=“bigBlue”>Header</p>``

---
# CSS Properties
.left[
* Font / Color: color: Sets color of text.
* font-size: Sets size of the font.
* font-style: Sets italics.
* font-weight: Sets bold .
* Alignment / Spacing:
* Padding-top(bottom/left/right): Adds space between element and its own border.
* Margin-top (bottom/left/right): Adds space between element and surrounding elements.
* Float: Forces elements to the sides, centers, or tops.
* background-color: sets background color.
* background-image: sets background image.
]

---
class: middle center
## Believe it or not, HTML / CSS is all you need
to develop a vivid, full-blown website.

## CSS Syntax

.left[
* CSS works by hooking onto selectors added into HTML using “classes and identifiers.”

* Once hooked, we apply styles to those HTML elements using CSS.
]

![inline](http://www.valleytechnicalacademy.com/wp-content/uploads/2018/05/Screen-Shot-2018-05-02-at-4.44.28-PM.png)

---

class: middle center
## 3 Types of Selectors:

.left[
* Elements
* Classes
* IDs
]

---
class: center
## Element Selector

![inline](http://www.valleytechnicalacademy.com/wp-content/uploads/2018/05/2018-05-03_0840.png)

---
class: center
## Class Selector

![inline](http://www.valleytechnicalacademy.com/wp-content/uploads/2018/05/2018-05-03_0840b.png)

---
class: center
## ID Selector

![inline](http://www.valleytechnicalacademy.com/wp-content/uploads/2018/05/2018-05-03_084c.png)

---
class: center
## Trick: The Google Developer Console

![inline](http://www.valleytechnicalacademy.com/wp-content/uploads/2018/05/2018-05-03_0843.png)

--

.middle[
![inline](http://www.valleytechnicalacademy.com/wp-content/uploads/2018/05/2018-05-03_0844.png)
]

---
class: center
# Exercise: Let’s Continue On Our Website

https://codepen.io/pen/?editors=1100

---
class: middle center

# CSS Box Model

---
class: middle center

![](https://internetingishard.com/html-and-css/css-box-model/css-box-model-73a525.png)

---
class: middle
## https://codepen.io/hexagonstorms/pen/MXmYme

---
class: middle center
# CSS Floats

---
# Floats

* By default, every HTML element displayed in the browser is governed by a concept called “flow.”

* This means that HTML elements force their adjacent elements to flow around them.

---
class: middle center
![](https://i.imgur.com/ycTUjqo.png)
???
float right example
---
class: middle center
![](https://i.imgur.com/WXzltVV.png)
???
html/css
---
class: middle center
![](https://i.imgur.com/DMzIPSm.png)
???
ideal
---
class: middle center
![](https://i.imgur.com/1JBlT8B.png)
???
non-ideal
---

class: center

![](https://i.imgur.com/tVCWnfu.png)

### Sometimes when elements don’t match up in size, we get situations like the above…
---
class: middle center

![](https://i.imgur.com/vX1lbV0.png)

---
# Float Activity

![](https://i.imgur.com/LPvXsae.png)

* https://codepen.io/hexagonstorms/pen/aKWzpy

---
class: middle center
# CSS Positioning

---
# 4 Types of Positioning:

1. Static (Default)

- Most common. All elements are this by default.
---
# 4 Types of Positioning:

2. Relative

- Allows for some manipulation by the CSS Properties: LEFT, TOP, RIGHT, BOTTOM
---
# 4 Types of Positioning:

3. Absolute

- Allows of ABSOLUTE manipulation by the CSS Properties: LEFT, TOP, RIGHT, BOTTOM
- Is Anchored by an RELATIVE element.
---
# 4 Types of Positioning:

4. Fixed

- Stays in it's precise spot, regardless of page scrolling
- Allows of ABSOLUTE manipulation by the CSS Properties: LEFT, TOP, RIGHT, BOTTOM
- Is Anchored by an RELATIVE element.

---
class: middle center
# Guess the Position Type

https://codepen.io/hexagonstorms/pen/YvVPLR

---
class: middle center

<img src="https://i.imgur.com/HYnGJWU.png" width="75%">
