---
title: "Intro to Web Development"
courseId:  "WSWD101"
cirriculum:
  - "Workshops"
type: "slide"
draft: false
---

class: middle center

# WELCOME TO WEB DEVELOPMENT

---

class: middle center

# Who are we?

---

class: top center

![inline](http://www.valleytechnicalacademy.com/wp-content/uploads/2018/05/workshop_image.png)

Next class Starting: <b>June 11</b>

---

class: top center

# APPS ARE EVERYWHERE

![inline](https://sjunkins.files.wordpress.com/2014/06/iste-posters-001.jpg)

---

# AND THE FIELD IS GROWING

.left[
* https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm
* Expected Growth of 24% by 2026
* $103k median salary
]

---

# Stack Overflow Developer Survey 2018

.left[
* https://insights.stackoverflow.com/survey/2018/#salary
]

---
class: middle center
![inline](https://mir-s3-cdn-cf.behance.net/project_modules/disp/4e580610140389.560e007145f42.png)

---
class: center
![inline](https://image.slidesharecdn.com/webdevhtml5-141007180302-conversion-gate02/95/web-development-technologies-and-tools-2-638.jpg?cb=1412705110)

Believe it or not, it's easier to get into than ever before

---

class: center

# HTML: The Blueprint of the Website

---
#  H T M L

![inline](http://www.99lime.com/_bak/topics/html-is-easy/assets/example4.jpg)

Hyper-Text Markup Language is the core of all websites
Provides the web browsers a blueprint of all content with formatting

---
class: center

![inline](http://www.valleytechnicalacademy.com/wp-content/uploads/2018/05/Screen-Shot-2018-05-02-at-4.36.10-PM.png)


This is HTML

---
class: middle center
# HTML is made up of ELEMENTS </>
---
class: center

## Syntax

![inline](http://www.valleytechnicalacademy.com/wp-content/uploads/2018/05/Screen-Shot-2018-05-02-at-4.38.52-PM.png)

---

class: center

## HTML Elements Can Store Data
### This type of data is called an “attribute”

---
class: center
## Attributes

![inline](http://www.valleytechnicalacademy.com/wp-content/uploads/2018/05/Screen-Shot-2018-05-02-at-4.41.08-PM.png)

---
class: center
## Attributes: Names & Values

![inline](http://www.valleytechnicalacademy.com/wp-content/uploads/2018/05/Screen-Shot-2018-05-02-at-4.42.50-PM.png)

---
class: center
![inline](http://www.valleytechnicalacademy.com/wp-content/uploads/2018/05/Screen-Shot-2018-05-02-at-4.42.57-PM.png)

---
class: center
## Self Closing Tags

![inline](http://www.valleytechnicalacademy.com/wp-content/uploads/2018/05/Screen-Shot-2018-05-02-at-4.43.08-PM.png)

---
## More Tags

All HTML Tags are listed here: http://www.htmldog.com/references/html/tags/
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head
Don’t try to memorize them! Simply refer back to documentation as needed.
Some tags:

<p> Stands for paragraph; paragraphs go in here </p>
<header> for headers </header>
<nav> for navigation bars </nav>
<footer> for footers </footer>
---
## Ordered & Unordered Lists
Ordered & Unordered Lists

<ul>
	<li>List Item</li>
</ul>
<ol>
	<li>List Item</li>
</ol>
---
## Common Tags

Headings:
<h1> </h1> - Heading 1 (Largest Heading)
<h2> </h2> - Heading 2 (Next Largest Heading)
<h3> </h3> - Heading 3

Containers:
<html> </html> - Wraps the entire page
<head> </head> - Wraps the header of the page
<body> </body> - Wraps the main content
<div> </div> - IMPORTANT. Stands for Division. It’s what is used 100% of websites
<p> </p> - Wraps individual Paragraphs
Others:
<strong> (bold), <em> (emphasis)
<img> (images), <a href> (links), <li> (list items) , <title> (title),
<br> (line break), <table> (tables), <!-- --> (comments)
---
class: center
# Exercise: Let’s Make A Site Together

https://codepen.io/pen/?editors=1100
---
class: center
# CSS: Let’s Get Stylin’
---

### HTML: Hypertext Markup Language – (Content)

### CSS: Cascading Style Sheets – (Appearance)

#### HTML/CSS are the “languages of the web.” Together they define both the content and the aesthetics of a webpage – handling everything from the layouts, colors, fonts and  content placement.  (JavaScript is the third – handling logic, animation, etc.)

---
#HTML Alone

### Like creating pages in “Notepad.”

### Can only write unformatted text.

---

# HTML with CSS

### Like creating pages in Photoshop!

### Can format text, page settings, alignment, etc. based on “highlighting” and menu options.

---
class: center

![inline](http://www.valleytechnicalacademy.com/wp-content/uploads/2018/05/Screen-Shot-2018-05-02-at-4.43.31-PM.png)
---

class: center
![inline](http://www.valleytechnicalacademy.com/wp-content/uploads/2018/05/Screen-Shot-2018-05-02-at-4.43.42-PM.png)

---

class: center

![inline](http://www.valleytechnicalacademy.com/wp-content/uploads/2018/05/Screen-Shot-2018-05-02-at-4.43.52-PM.png)

---
# With some CSS...
class: center
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
class: center
## Believe it or not, HTML / CSS is all you need
to develop a vivid, full-blown website.

https://limitless-earth-17554.herokuapp.com/

---
class: center
# Online Coding Resources


![inline](https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg)


![inline](https://upload.wikimedia.org/wikipedia/en/a/a3/Treehouse%27s_logo_%28Jan_2015%29.png)

---
class: middle center
# Another Option: Us!

--
### Upcoming Workshops Every Thursday @ 6:30


.middle[
* May 3rd: CSS Tips & Tricks!
* May 10th: Goal-Directed Design
* May 17th: Intro to iOS Mobile Development
* May 24th: Intro to JavaScript
* May 31st: Getting Started in Web Development
]

---


class: middle center

![inline](http://www.valleytechnicalacademy.com/wp-content/uploads/2018/05/workshop_image.png)

Thank you! </>
