# Advance Filtering and Sorting
 This feature allows users to efficiently search through a data dump and apply advanced filters to narrow down their results based on specific criteria. Additionally, various sorting options are available to organize the data in a desired order.

## Tech Stacks
**DataBase:** PostgreSQL

**Language:** JavaScript

**Environment:** Node.js v20.2.0

**Framework:** Express.js 


## Installations
After cloning the repository run the command `npm install` or run the following comands on the terminal

```bash
  npm init -y
  npm install express
  npm install pg
  npm install pg hstore
  npm install sequelize
  npm install express-validator
  npm install squelize-cli
  npm install nodemon
  npm install dotenv
```
## USERS API

### Get Users

```http
   /users?take=''&skip=''&order=''&orderby=''&fname=''&lname=''&description=''
```
| Query Parameters | Type        | Description                |
| :--------        | :-------    | :------------------------- |
| `take`           | `int > 0`   | **Optional**. used to set limit for Pagination |
| `skip`           | `0<int<250k`| **Optional**. used to set offset for Pagination |
| `order`          | `string`    | **Optional**. used to set the order for sorting |
| `order`          | `string`    | **Optional**. used to define the column for ordering the data |
| `fname`          | `string`    | **Optional**. used to define filter for first_name |
| `lname`          | `string`    | **Optional**. used to define filter for last_name |
| `description`    | `string`    | **Optional**. used to define filter for description |


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`USER_NAME`

`PASSWORD`

`DATABASE`

`HOST`

`DIALECT`


## Database Schema
### users

| Column     | Type    | Constraints |
| ---------- | ------- | ----------- |
| id         | integer | PRIMARY KEY |
| fname      | string  |             |
| lname      | string  |             |
| description| string  |             |
| createdAt  | date    |             |
| updatedAt  | date    |             |


## Features

- Efficiently search and retrieve subsets of data that match their defined search criteria which include filtering and sorting features.

- Explore large datasets and extract relevant information quickly and accurately.

- Facilitate data analysis by organizing and sorting data based on different criteria.

## Author

Umer Atiq

- GitHub: [umeratiq99](https://github.com/umeratiq99)

