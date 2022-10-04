# 13 Object-Relational Mapping (ORM): E-Commerce Back End

## Description 

To build the back end for an e-commerce site by modifying starter code and configure a working Express.js API to use Sequelize to interact with a MySQL database.

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database


## Technologies

Javascript
Node.js
Sequelize
MySQL2
Express
Dotenv


## Installation

Install dependencies

npm init --y
npm install express sequelize mysql2
Open up MySQL shell and input

source db/schema.sql
and

use ecommerce_db
Then quit MySQL shell and input the following in your terminal

npm run seed
to start running application simply input

node server.js
Open up Insomnia core to GET, POST, PUT and DELETE from different routes.

## Walkthrouh Video
https://drive.google.com/file/d/1z8cUXRjA6uzoLH7Yc-TRawHenbMfK9RZ/view


