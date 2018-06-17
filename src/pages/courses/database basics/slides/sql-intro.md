---
title: "Database Basics"
courseId:  "FSWG103"
cirriculum:
  - "Web / Full Stack / Software Development"
type: "slide"
draft: true
---

class: middle center

## Relational Database Systems

.left[

* Structured Query Language
* concept called a 'transaction'
  ]

---

class: middle center

## Offerings

.left[

* MySQL
* Postgresql
* SQLite
* Oracle
* Microsoft SQL Server
* IBM DB2
* Sybase ASE
  ]

---

class: middle center

## DDL Data Definition Language

.left[

* _Create:_ For the creation of tables and other objects in your database. There are over 50 different objects you can create within a database.
* _Alter:_ Many of the objects you create can be altered after creation, but not all. The benefit here is that altering an object is an alternative to dropping and re-creating an object. This can come in handy when an object may contain thousands or millions of rows of data.
* _Drop:_ The opposite of create, and analogous to a delete. If you drop an object, you not only delete the object definition but also any data stored inside of it.
  ]

---

class: middle center

## DML Data Manipulation Language

.left[

* _Insert:_ For adding data to a table.
* _Select:_ For retrieving data from a table.
* _Delete:_ For removing data from a table.
* _Update:_ Alters data in a row of a table, 'updating' existing values to the new values you provide.
  ]

---

class: middle center

## Relationships

.left[
In a Relational Database, all of the tables will somehow be connected. We will learn more about the connection of tables, but its important to understand what type of relationships exist.

* One-to-one
* One-to-Many
* Many-to-Many
  ]

---

class: middle center

## One-to-One

A One-to-One relationship exists when one row in a table is linked to only one row in another table. For example, in a customer database, each customer has only one customer ID and that ID is only assigned to one person.

---

## One-to-Many

A One-to-Many relationship exists when one row in a table is linked to many rows in another table. An example could be that one Support Agent is assigned to many customers and only that specific support agent will be linked to many customers.

---

class: middle center

## Many-to-Many

A Many-to-Many relationship exists when many rows in a table are linked to many rows in another table. For example, there are many products in a store and many customers can buy those products.

---

class: middle center

## Select

.left[

* SELECT [column names] FROM table_name
* WHERE for filtering
  * SELECT [column names] FROM table_name WHERE [row restrictions]
* Fuzzy matching
  * SELECT Name FROM tracks WHERE Name LIKE 'the%'
* Ordering
  * SELECT Name FROM tracks ORDER BY Name DESC
* GroupBy
  * SELECT ArtistId, count(ArtistId) FROM albums GROUP BY ArtistId
    //temp column ArtistId

<!--SELECT user_id, count(user_id) FROM books GROUP BY user_id-->

## ]

class: middle center

## Insert / Create

.left[

* INSERT INTO [table name] (column list) VALUES (value list)
* CREATE TABLE customersToCall (Name VARCHAR(60), Phone VARCHAR(24))
* SELECT (FirstName || ' ' || LastName) as Name, Phone from customers where Country = 'Brazil'
  ]

---

class: middle center

## MAKING TABLES

## make sure it has an ID

users:

* first name
* last name
* address
* phone number

books:

* title
* author
* genre
* usersId
* publishDate
