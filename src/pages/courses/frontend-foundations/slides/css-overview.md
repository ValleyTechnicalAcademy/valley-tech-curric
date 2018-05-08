---
title: "CSS Review"
courseId:  "FSWG101"
cirriculum:
  - "Web / Full Stack / Software Development"
type: "slide"
draft: false
---

class: middle center

## HTML5

.left[

* Review

* Node: In the HTML Document Object Model (DOM), everything is a node.
* Tag: The beginning of an HTML element, usually denoted with angle brackets
  surrounding a tag type. Ex: <p>
* Element: A distinct component of an HTML document, usually comprised of
  start and end tags surrounding some kind of content. Ex: <p></p>
* Attribute: Modifications to a given element.
  ]

---

class: middle left

* Navitgation
  * Just Fancy styled Links
* Cross Browser
  * GROSS
  * Friends don't let friends support Internet Explorer 8
  ```
  <!--[if lt IE 9]>
  the code here will only run if browser is older than IE 9
  <![endif]-->
  ```

---

## CSS3 Review

.left[

* Selectors

* ID: denoted a hash symbol (#) #container { color:black }

* Class: denoted by a period (.) .leftColumn { color:red }

* Element: denoted by the tag name nav { height: 45px; width: 100%; }

* States
  * :link
  * :vistied
  * :hover
  * :active
  * :focus <a class="navlink" href="#">Home</a> a.navlink:hover { color: green;
    }
    ]

---

class: left

### Elements

* ::before
  * adds content text or a shape before the HTML element is selected.
* ::after
  * adds content text or a shape after the HTML element is selected.
* ::first-letter ::first-line

---

class: left

### Properties

* margin
* border
* padding
* font
* background
* display
  * display: none
  * display: inline
  * display: block
  * visibility: hidden
    [LEARN ME](https://resources.api.exeterlms.com/Resources/5cdb8f9b-3ac6-4ac7-93fe-83dd21bb5032)

---

* Position
  * relative
  * absolute
  * fixed
  * top, right, bottom or left

```
  <style>
    div {color:yellow; width:200px; height:50px; background:gray;}
  </style>
  <div>Some text here</div>
```

---

## Cassacading Inheritance

* **Ordering** - from least important to most

  1. Importance (!important) - Overuse of !important is not good.
  2. Specificity :-/
     * [Sample](http://jsbin.com/nahovis/2/edit?html,css)
  3. Source Order
     * [Sample](http://jsbin.com/pefuta/4/edit?html,css)

  * Inheritance
    * [Sample](http://jsbin.com/kiraseb/4/edit?html,css)

---

## **Styling Fonts**

.left[

* the web browser is going to rely on the user's system
* [Common Fonts](http://www.ampsoft.net/webdesign-l/WindowsMacFonts.html)
* ems for relative font sizing
* @font-face (Go get me some fonts!) \* @font-face { font-family: roboto-thin; src:
  url(https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-thin-webfont.ttf);
  }
  ]

---

### Challenge

* [BOOM](https://codepen.io/Jtomchak/pen/jwQNpW/?editors=1100)
* [Make it look like](https://upload.wikimedia.org/wikiversity/en/b/bd/Css1_1.png)

---

## **Media Queries**

.left[

* in CSS3, we are able to target specific screen sizes.
* used extensivly for 'responsive design'
* queries used
  * width and height of the viewport
  * width and height of the device
  * orientation (is the tablet/phone in landscape or portrait mode?)
  * resolution
  * there is a pile, most used
    1. width , min-width , max-width
    2. height , min-height , max-height
* @media (max-width: 768px) and (orientation: portrait) { //these would only
  to screens width 768 or less //like your mobile computing device }
* viewport patch
  * <meta name="viewport" content="width=device-width, initial-scale=1.0">
* [ALL THE SIZES](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)
  ]

---

## **Style and Layout**

.left[

* Position
  * Static
    * stacks elements, the default
  * Relative
    * position in some direction
  * Absolute
    * position relative to the body of the document
  * Fixed \* position on the page, not the document, stays even when scrolling
    ]

---

## **Responsive versus adaptive**

.left[

* responsive: respond to the size of the browser at any given point
  * fluid and flexible
* adaptive: adaptive websites adapt to the width of the browser at a specific
  points. more like a snap too.
* [Animated Example](https://cdn.css-tricks.com/wp-content/uploads/2015/11/rwd-vs-adapt-example.gif)
* [More Examples](https://www.fastcodesign.com/3038367/9-gifs-that-explain-responsive-design-brilliantly)
  ]

---

## Challenge 2

* [BOOM](https://codepen.io/Jtomchak/pen/OgaLGL/)
* [Make it look like](http://lewagon.github.io/html-css-challenges/03-box-model/)

---

## **Resources**

.left[

* [Super Guide](https://www.smashingmagazine.com/mastering-css-principles-comprehensive-reference-guide/)
* [Super Duper Guide](https://www.simplilearn.com/css3-resources-ultimate-list-article)
* Pre-processors
  * Less, Sass, Scss, Stylus, Css-Crush, Myth, Rework
  * Cool, but why?
    * Color (client color scheme)
    * Duplication (all the browsers all the radius corners)
    * Cascade (deeply nested)
    * Calculation (font size plus wha?)
    * Importing (double gross)
  * Compiles to CSS
    ]

---

## Bootstrap 3

* Grid and Layout
*

---

## Challenge 3

* Now add Bootstrap 3 to your movie favs page
* change the first card into a Jumbotron
* social card will now be buttons, tastfully placed and socially themed
* make your 3 movies into a col-md
* last card as a footer
* SCSS style use
* color theme, palette
*

---
