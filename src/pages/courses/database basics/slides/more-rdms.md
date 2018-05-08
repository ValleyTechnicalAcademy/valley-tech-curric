---
title: "Database Joins"
courseId:  "FSWG103"
cirriculum:
  - "Web / Full Stack / Software Development"
type: "slide"
draft: false
---

class: middle center

## Joins

.left[

* _Join:_ SQL Command to join two or more tables together.
* _Inner Join:_ SQL command to join two tables, only including records which have data present in both tables.
  * **An inner join only includes the specified columns from a row if it can be paired up with a row in the joined table.**
* _Outer Join:_ SQL command to join two tables, including all of the records from one table, along with the matching values from the other.
  * **if a matching row exists in the other table, then those columns are included as well.**
    ]

---

class: middle center
![inline](https://i.stack.imgur.com/ytO9K.png)

---

```sql
SELECT Name, Title
FROM tracks
JOIN albums ON tracks.AlbumId = albums.AlbumId //USING (AlbumId)
WHERE ArtistId = 1

--another join
SELECT title, (first_name || " " || last_name) as name
FROM books
JOIN users ON books.user_id = users.user_id
```

---

class: middle center

## Views

* represent a query to the user as a table would appear.

---

class: middle center

## Transactions

* Transactions: A Transaction is a means of grouping database actions into a reversible batch.
* Discussed yesterday, recordered linear BEGIN, ROLLBACK, END/COMMIT

---

class: middle center

## Procedures

* Stored Procedure: A reusable sql query which is optimized for performance.

```sql
CREATE PROCEDURE NewApplicationUser (@UserName VARCHAR(50), @password VARCHAR(50)
AS
BEGIN
DECLARE @user_id INT
INSERT INTO Users VALUES (@UserName)
SELECT @user_id = user_id FROM Users WHERE UserName = @UserName
INSERT INTO Passwords VALUES (@user_id, @password)
END
```

---

# Creating a table

```sql
--creating a persons table
CREATE TABLE Persons (
    Person_id int NOT NULL PRIMARY KEY,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
);

--creating an orders table
CREATE TABLE Orders (
    Order_id int NOT NULL PRIMARY KEY,
    OrderNumber int NOT NULL,
    Person_id int FOREIGN KEY REFERENCES Persons(Person_id)
);
```

---

class: middle center

## HandsOnChallenge

.left[

* create a new database called 'biblioteca'
* create a table called users
  1. It will have the following fields: firstname, lastname, email, phonenumber
  2. All fields are required!
  3. Add 5 of your favorite literate friends.
* create a table called genres
  1. It will have the following fields: genre_type
  2. Add 3 types of book genre, like fiction, kids
* create a table called books
  1. It will have the following fields: title, author, year, genre_id (refering to the genre type from that table)and user_id (this will be the user who has this book) **HINT** like a foreign key, 'member?
  2. All fields are required!
  3. Add 10 books, each of your users should have 2 books
     ]

---

class: middle center

## HandsOnChallenge

.left[

1. Query 'books' to show title, and user's fullname that has checked out this book
2. Query 'books' and show a total count of books by genre with the genre type(group by) ordered from most to least
3. Query 'users' to show fullname, book title, authory, and genre type. Order by book title.
   ]

---

class: middle center

### Pirates HandsOnChallenge

.left-column[

.left[

###### Pirates - 10

1. Family Name
2. Rank
3. Beard (Boolean)
4. Nick Name
5. Birth Country
6. Worth. (Value in shillings)
7. Date of Death
8. Primary Key(Pirate_Id)
   ] ]

.right-column[

##### Ships - 10

9. Crew Size
10. Name
11. Ship Class
12. Number of Cannons
13. Primary Key(Ship_id)

##### Ownerships table

1. Primary Key(owner_id)
2. Country Of Origin
3. Current Owner, must be pirate. _HINT_ Foreign Key(Pirate_Id)
4. Ship Reference (Foreign Key Ship_Id)

]
