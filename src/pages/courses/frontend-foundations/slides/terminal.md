---
title: "Git & The Terminal"
courseId:  "FSWG101"
cirriculum:
  - "Web / Full Stack / Software Development"
type: "slide"
draft: false
---
class: middle center
## The Terminal
---
class: middle center
## We Use GUIS

![](https://cdn.igeeksblog.com/wp-content/uploads/How-to-Open-Folders-in-New-Windows-Instead-of-Tabs-in-Mac-OS-X-Finder.jpg)
???
The modern way we use computers is through Graphical User Interfaces
---
class: middle center
## But We can Do Everything In the Terminal!

![](https://www.imore.com/sites/imore.com/files/styles/xlarge/public/field/image/2016/02/say-terminal-command-screenshot.jpg?itok=jOSHQLCF)

???
But there is an alternative way of using the computer.

---
class: middle center
## Why? Because of Remote Servers

![](https://o.aolcdn.com/images/dims?quality=100&image_uri=http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2Fc4ffd6e734b74ca2a7afac615a9cc603%2F202504538%2Fgoogle-servers-2015-08-20-01.jpg&client=cbc79c14efcebee57402&signature=339081ed93f981751df3cf2ad70eff347c7046dd)
???
We have to use this way in order to communicate with remote servers.
---
class: middle center
## Let's Log Into My Server

???
Example of logging into my remote server that holds my personal website
45.33.122.175
---
class: middle center
## Terminal Vs Finder

![](https://resources.api.exeterlms.com/Resources/bb191206-9773-44dc-9236-135fc2bb22c4?access_token=1d81769f6a9e5c30701bea531ee61245e4bba6bc2d2fe64c2333fb56f3694f1f)
???
Terminal is Finder
---
class: middle center
## Folder Structure

![](https://resources.api.exeterlms.com/Resources/e804f8ad-1e76-4d6f-9fd0-07c0a3ed21c0?access_token=1d81769f6a9e5c30701bea531ee61245e4bba6bc2d2fe64c2333fb56f3694f1f)
???
They are all the same
---
class: middle center
## The Terminal is The Same

#### And It Records The Path
```bash
/Users/prosescholar/Desktop/notable_quotations_of_13th_century_poets.txt
```
???
In the terminal, keep track of the path
---
class: middle center
## Path Example

![](https://resources.api.exeterlms.com/Resources/e82493fd-a256-4d0e-8bf7-c6feb1121cbe?access_token=1d81769f6a9e5c30701bea531ee61245e4bba6bc2d2fe64c2333fb56f3694f1f)
---
class: middle center
## Default Location: Home

# ~
---
class: middle center
## Navigating through the Terminal

<table width="100%">
    <thead>
        <th>Command</th>
        <th>Optional Arguments</th>
        <th>Name</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td><b>mkdir</b></td>
            <td></td>
            <td>Make Directory</td>
            <td>Creates a directory</td>
        </tr>
        <tr>
            <td><b>cd</b></td>
            <td></td>
            <td>Change Directory</td>
            <td>Switch the current directory</td>
        </tr>
        <tr>
            <td><b>ls</b></td>
            <td><b>-la</b> List HIDDEN files as well</td>
            <td>List Directory</td>
            <td>List the contents inside of a directory</td>
        </tr>
        <tr>
            <td><b>rm</b></td>
            <td>
            <b>-f</b> Forces the removal<br>
            <b>-d</b> Allows removal of directory
            </td>
            <td>Remove</td>
            <td>Deletes a file</td>
        </tr>
        <tr>
            <td><b>mv</b></td>
            <td></td>
            <td>Move</td>
            <td>Moves a file to a new location (possibly with a new name)</td>
        </tr>
        <tr>
            <td><b>cp</b></td>
            <td></td>
            <td>Copy</td>
            <td>Copies a file</td>
        </tr>
    </tbody>
</table>
---
class: middle center
## Navigating Shortcuts
<table width="100%">
    <thead>
        <th>Symbol</th>
        <th>Name</th>
        <th>Descripion</th>
    </thead>
    <tbody>
        <tr>
            <td><b>.</b></td>
            <td>Period</td>
            <td>is the current directory</td>
        </tr>
        <tr>
            <td><b>..</b></td>
            <td>Double Period</td>
            <td>The parent directory</td>
        </tr>
        <tr>
            <td><b>~</b></td>
            <td>Tilda</td>
            <td>The home directory</td>
        </tr>
    </tbody>
</table>
---
class: middle center
## Terminal Activity

- Create A Directory titled "Code" in your HOME directory (If you haven't already)
- Inside of that Directory, Create 7 new directories:
- <b>week1</b>, <b>week2</b>, <b>week3</b>, <b>week4</b>, <b>week5</b>, <b>week6</b>, and <b>capstone</b>
- Move 'week1-p' into Week 1

---
class: middle center
## Source Control Solves This

![](https://cdn-images-1.medium.com/max/1600/1*pv9K-4S-KBRkSu0vrPz2eg.jpeg)
---
class: middle center
## Source Control
#### Its what we use to keep track of our codebase. It Can:
- Track our coding history
- Revert changes & mistakes
- Keep tabs of developers "committing code"
- Allow all Developers to work in the same REPOSITORY
---
class: middle center
## Source Control

#### Website Sit on REMOTE REPOS (The production codebase)

<img src="https://www.git-tower.com/learn/content/01-git/01-ebook/en/01-command-line/04-remote-repositories/01-introduction/basic-remote-workflow.png" width="600px" />

---
class: middle center
## Source Control

#### Developers Clone Their Own Version (Local Repo)

* Developers split the work, choosing to work on specific FEATURES

<img src="https://www.git-tower.com/learn/content/01-git/01-ebook/en/01-command-line/04-remote-repositories/01-introduction/basic-remote-workflow.png" width="600px" />

---
class: middle center
## Source Control

#### When A Feature Is Ready

* It is Pushed to the REMOTE repository!

<img src="https://www.git-tower.com/learn/content/01-git/01-ebook/en/01-command-line/04-remote-repositories/01-introduction/basic-remote-workflow.png" width="600px" />

---
class: middle center
## Source Control

#### Other Devs PULL the newest changes

* So they incorporate the new feature and continue working

<img src="https://www.git-tower.com/learn/content/01-git/01-ebook/en/01-command-line/04-remote-repositories/01-introduction/basic-remote-workflow.png" width="600px" />

---
class: middle center
## Most Popular Source Control - Git

![](https://avatars3.githubusercontent.com/u/18133?s=200&v=4)
---
class:middle center
## To Use Source Control, We Run Git Commands

???
Cheatsheet: https://rubygarage.org/uploads/article_image/file/599/git-cheatsheet-5.jpg
---
class:middle center
## Git

![](https://cdn-images-1.medium.com/max/331/1*NP2cIBI4z_O_-JfaGLj1Hg.png)

---
class:middle center
## Before Every Website

* We need to create a repo!
---
class:middle center
## Prework: Installing Git...

* Open the TERMINAL program on your Mac

<img src="https://www.imore.com/sites/imore.com/files/styles/xlarge/public/field/image/2016/02/say-terminal-command-screenshot.jpg?itok=jOSHQLCF" width="400px" />

* Type git
---
class:middle center
## Prework: Create GitHub Account

* https://github.com/

<img src="https://assets-cdn.github.com/images/modules/open_graph/github-mark.png" width="400px" />


---
## Git Configurations

```bash
git config --global user.name "Firstname Lastname"
```

```bash
git config --global user.email "[email you used to register for github]"
```

https://rubygarage.org/uploads/article_image/file/599/git-cheatsheet-5.jpg
---
class: middle center
## Let's Git-ify our ID Card Project

![](https://www.manos.im/static/images/projects/gitify.png)

---
class: middle center
## 1. Go To Github & Create New Repo

* https://github.com/new
---
class: middle center
## 2. Run Git Commands In Terminal

<table>
    <thead>
        <th>Command</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td><b style="color:red">git init</b></td>
            <td>
                Creates new git repository<br>
                <b>DONE ONLY ONCE AT THE VERY BEGINNING OF A NEW PROJECT</b>
            </td>
        </tr>
        <tr>
            <td><b>git add .</b></td>
            <td>add files to be staged</td>
        </tr>
        <tr>
            <td><b>git commit -m "comment"</b></td>
            <td>commit staged files</td>
        </tr>
        <tr>
            <td>
                <b>git push <span style="color:red">-u origin master</span></b>
            </td>
            <td>push files to remote repo</td>
        </tr>
    </tbody>
</table>

<span style="color:red">red</span> = DONE ONLY ONCE IN THE BEGINNING OF A NEW PROJECT!!
---
