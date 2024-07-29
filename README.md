
# Object Relational Mapping with E-Commerce Backend

[![License: MIT](https://cdn.prod.website-files.com/5e0f1144930a8bc8aace526c/65dd9eb5aaca434fac4f1c34_License-MIT-blue.svg)](/LICENSE)


## Table of Contents
-[Description](#description)
<br/>
-[Installation](#installation)
<br/>
-[Usage](#usage)
<br/>
-[Contributing](#contributing)
<br/>
-[License](#license)
<br/>
-[Tests](#tests)
<br/>
-[Questions](#questions)
<br/>

## Description

This project works on creating a functioning backend for an e-commerce site that connects to a database to perform CRUD operations.  The data that is being used is information about different categories, products, and tags that belong to products.   The purpose behind this was to practice building a server with Express and to interface with the database using Sequelize.  Sequelize is a great tool that helps build tables in a database using JavaScript by declaring them as classes.  This helps reduce the amount of SQL queries that a programmer has to write and better organizes the data.  During the coding process I had a challenging time creating the one to many relationships between models that referenced one another.  I had to really think about the relationships that the models had with one another and how to creatively weave them together.

## Installation

For this project one can either clone the repo or download the files to be used on a local environment.  In order for application to work Node must be installed.  In addition one must have access to PostgreSQL in order to create and manipulate databases.  Once all these items are installed download all the packages from the package.json file by running the command “npm i”.   

## Usage

This application is used to demonstrate how to fetch, create, update, and delete data from the backend for a retail website.  This is vital so that users can have an easy interface to interact that responsive and accurate.  If one would like  to create the database open the directory ‘db’ in the terminal and type the command “psql -U postgres” which will give the user an option to enter their password.  After run the command “\i schema.sql” which runs this file to create the database that will be used for the program.  Now that the database is ready, create a .env file and input your Postgres credentials.  These credentials will allow Sequelize to connect to the database without having to explicitly write them out, don't forget to put the .env file inside gitignore.  Since all the models for the database are declared, seed the data to the tables by running the command “node seeds/index.js” which will go to the file and add all the data to each table through Sequelize.  Final step is to start the server using the command “node server.js” and hit the specific routes to perform one of the CRUD methods for the specified models.

### Demo Video
[Video Link](https://drive.google.com/file/d/1AQgrPRA8GkEkONhIwqgE5h5lphJOMZEr/view?usp=sharing)
## Contributing

N/A
## License

This repository is covered under the MIT license

## Tests

N/A


## Questions

* GitHub Profile: [EzekielCampos](https://github.com/EzekielCampos)

If you have any additional questions contact me by email at ezcampos603@gmail.com

