---
title: "Sample Foundations"
courseId:  "SSWG101"
cirriculum:
  - "Workshops"
  - "Sample Town"
type: "course"
draft: True
---

--> Contents below this line come from the course index.md <--

### Table of Contents

#### Creating a course

1. Every Course must have it's own folder under `src/pages/courses`
2. There needs be an `index.md` in the root of that folder, with the following:

```YAML
---
title: "Sample Foundations"
courseId:  "SSWG101"
cirriculum:
  - "Web / Full Stack / Software Development"
  - "Sample Town"
type: "course"
draft: true
---
```

* title: title of your course
* courseId: LMS course ID
* cirriculm: This can be multiple, or singular. Options are
  * "Web / Full Stack / Software Development"
  * "Data Science"
  * "Cyber Security"
* type: as it relates to the content.
  * "course"
  * "slide"
  * "syllabus"
* draft: boolean. true will not be published.

3. There needs to be a syllabus.md in the root of the folder, that also starts with a YAML file.

* The syllabus markdown also has a sprinkling of HTML to format for the 2 column per day section.

```YAML
---
title: "Sample Town Foundations Syllabus"
courseId:  "SSWG101"
cirriculum:  
  - "Web / Full Stack / Software Development"
type: syllabus
draft: true
---

### Day 1

<div class="row">
<div class="column">

#### 1. Introduction to Meow

* Source code block
* Source code block
* Source code block
* Source code block

</div>
<div class="column">

#### 2. Simple Syrup

* Source code block
* Source code block
* Source code block
* Source code block

      </div>

  </div>

---
```

4. A sub-folder called `slides` that will keep all the slide presentations that pertain to that course. It of course has it's own YAML that needs to be at the top of each file.

```YAML
---
title: "How To"
courseId:  "FSWG101"
cirriculum:
  - "Web / Full Stack / Software Development"
type: "slide"
draft: true
---
```
