---
title: "jQuery & Bootstrap" 
courseId:  "FSWG101"
cirriculum: 
  - "Web / Full Stack / Software Development"
type: "slide"
draft: false
---

class: middle center

## jQuery

.left[

* fast, small, and feature-rich JavaScript library
* makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler
* provides a paradigm for event handling that goes beyond basic DOM element selection and manipulation.
  ]

---

## ok, but why?

```js
function changeBachground(color) {
Document.body.style.background = color;
}

Onload=changeBackground (‘red’);
```

**OR**

```js
$ (‘body’) .css (‘background’, ‘#ccc’);
```

---

## or another

```js
var d = getElementsByClassName("yo");
for (var i = 0; i < d.length; i++) {
  d[i].className = d[i].className + " selected";
}
```

**OR**

```js
$(".yo").addClass("selected");
```

---

class: middle center

## ajax calls

* AJAX = Asynchronous JavaScript and XML.
* Loading data in the background and display it on the webpage, without reloading the whole page.
* Send data to a server - in the background, you know, like a form!

---

## ajax example

# Peasants

```js
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
```

---

## ajax example

# Gong farmer

```js
$("button").click(function() {
  $.ajax({
    url: "demo_test.txt",
    success: function(result) {
      $("#div1").html(result);
    }
  });
});
```

---

# Bootstrap

![inline](https://www.w3schools.com/bootstrap/bs_themes.jpg)

---

# UI Framework

* It includes HTML and CSS based design templates for common user interface
  components like:
  * Typography,
  * Forms,
  * Buttons,
  * Tables,
  * Navigations,
  * Dropdowns,
  * Alerts,
  * Modals,
  * Tabs,
  * Accordion,
  * Carousel and many other as well as optional JavaScript extensions.

---

# yeah, but why?

* Save lots of time —
* Responsive features —
* Consistent design —
* Easy to use —
* Compatible with browsers —
* Open Source — And the best part is, it is completely free to download and use.

---

# What you get

```js
bootstrap/
|—— css/
|   |—— bootstrap.css
|   |—— bootstrap.min.css
|   |—— bootstrap-theme.css
|   |—— bootstrap-theme.min.css
|—— js/
|   |—— bootstrap.js
|   |—— bootstrap.min.js
|—— fonts/
|   |—— glyphicons-halflings-regular.eot
|   |—— glyphicons-halflings-regular.svg
|   |—— glyphicons-halflings-regular.ttf
|   |—— glyphicons-halflings-regular.woff
```

---

# Wiring

```HTML
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Basic Bootstrap Template</title>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <!-- Optional Bootstrap theme -->
    <link rel="stylesheet" href="css/bootstrap-theme.min.css">
</head>
<body>
    <h1>Hello, world!</h1>
    <script src="js/jquery-1.11.3.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
</body>
</html>
```

---

# Bootstrap Grid System

| Features            | Extra small devices Phones (<768px) |                                 Tablets (≥768px) | Medium devices Desktops (≥992px) | Large devices Desktops (≥1200px) |
| ------------------- | :---------------------------------: | -----------------------------------------------: | -------------------------------: | -------------------------------: |
| Max container width |             None (auto)             |                                            750px |                            970px |                           1170px |
| Grid behavior       |       Horizontal at all times       | Collapsed to start, horizontal above breakpoints |
| Class prefix        |              .col-xs-               |                                         .col-sm- |                         .col-md- |                         .col-lg- |
| Max column width    |                Auto                 |                                            ~62px |                            ~81px |                            ~97px |

---
