# Flimg

A clone of Flickr, my take on another image hosting service.

# Index

[MVP Features](https://github.com/jess-chris/flimg-app/wiki/Features) | [Database Schema](https://github.com/jess-chris/flimg-app/wiki/Database-Schema)

# Technologies Used
Javascript | NodeJS | Postgresql | Sequelize | Express | React

# Getting Started

1. Clone the repository.
    * `git clone git@github.com:jess-chris/flimg-app.git`

2. Install package dependencies from root directory.
    * `npm install`

3. Create a Postgresql user with CREATEDB and Password in PSQL.
    * `CREATE USER <username> WITH CREATEDB PASSWORD <'user password'>`

4. In the backend directory create a .ENV file similar to the example found there as well.

5. Provide the username and password for the created user inside of the .env file, along with a name for the database, a securely generated string of characters for the JWT_SECRET, and the port you wish to run the server on.

6. Add a proxy line to the frontend package.json file, making sure to match the specified port for the backend.
    * `"proxy": "http://localhost:PORTNUMBERHERE"`

7. Create Database, Migration, and Seed models. 
    * `npx dotenv sequelize db:create`
    * `npx dotenv sequelize db:migrate`
    * `npx dotenv sequelize db:seed:all`

8. Start backend service in respective directory.
    * `npm start`

9. Start front end service in respective directory, should open a page in your default browser. Ohterwise located at http://localhost:3000.
    * `npm start`

# Features

Logged in users can do the following:
  * Add, View, Edit, and Delete Photos.
  * Add, view, and Delete Albums.
