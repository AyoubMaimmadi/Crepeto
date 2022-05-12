# Crepeto

- Final project for CSC3326 - Database Systems
- An Online Restaurant Management System
- Created using React, Node.js, Express, and PostgreSQL

# Creating a new user for testing

- To test the application with a local PostgreSQL database,you need to create a new user.
- For testing purposes, a new user, `dev`, will be created, with a password of `password1`.
- To create a new user, enter `CREATE ROLE dev WITH LOGIN PASSWORD 'password1';`.
- To allow the new user to create a database, enter `ALTER ROLE dev CREATEDB;`.
- To check if the new user was successfully created, enter `\du`.
- Enter `\q` to quit the current session.

# Creating and connect to a new local database

- A new local database needs to be created with the appropriate settings to test the application locally.
- To connect to Postgres using the created `dev` user, enter `psql -d postgres -U dev`.
- To create a new database, enter `CREATE DATABASE crepeto;`.
- To check if the `crepeto` database was successfully created, enter `\list`.
- To connect to the `crepeto` database, enter `\c crepeto`, or quit the current session by entering `\q`, and then enter `psql -d crepeto -U dev`.

# Creating tables for the database

- To create a new table, enter:

```
CREATE TABLE {table_name} (
  {primary_key_field} SERIAL PRIMARY KEY,
  {column_one_name} {dataType},
  {column_two_name} {dataType}
)
```

- For the crepeto application, 6 tables need to be created:

```
CREATE TABLE customer (
customer_id SERIAL PRIMARY KEY,
name VARCHAR(255),
phone VARCHAR(255),
email VARCHAR(255),
address VARCHAR(255)
);

CREATE TABLE billing (
MonthyBilling_id SERIAL PRIMARY KEY,
revenue VARCHAR(255),
expense VARCHAR(255),
profit VARCHAR(255),
);

CREATE TABLE supplier (
supplier_id SERIAL PRIMARY KEY,
name VARCHAR(255),
address VARCHAR(255),
phone VARCHAR(255)
);

CREATE TABLE product (
product_id SERIAL PRIMARY KEY,
name VARCHAR(255),
quantity INTEGER,
price FLOAT(10),
supplier_id INTEGER REFERENCES supplier(supplier_id)
);

CREATE TABLE orders (
order_id SERIAL PRIMARY KEY,
order_name VARCHAR(255),
order_date DATE,
order_time DATE,
product_quantity INTEGER,
customer_id INTEGER REFERENCES customer(customer_id),
product_id INTEGER REFERENCES product(product_id)
);

CREATE TABLE employee (
employee_id SERIAL PRIMARY KEY,
name VARCHAR(255),
address VARCHAR(255),
phone VARCHAR(255),
email VARCHAR(255),
salary VARCHAR(255)
);
```

# Running the project

- To run the client, `cd` into the client directory, and enter `npm or yarn start`.
- To run the server, `cd` into the server directory, and enter `npm or yarn start`.
- The client, server, and database must all be online and running for the crepeto application to be fully functional.
- To check the status of the client, go to `localhost:3000` on the browser.
- To check the status of the server, go to `localhost:3090` on the browser.
