# Product List - CRUD API (server side)

Start a Product List - CRUD API quickly using Node, Express & Postgres. (This is the server side part)

Serves four requests (get, post, put, delete) from one page with a separate function for each.



**Dependencies**

We use **express** to serve the API, **body-parser** to parse responses, **postgres** for the database, **knex** as the query engine, **dotenv** to protect environment variables, **helmut** to add proper headers, **cors** to prevent/allow XSS, **morgan** as our logger, and **nodemon** as a dev dependency to watch for changes.

All dependencies are included in the cloned project.

## Instructions

**1. Clone the repo**

```
git clone https://github.com/kirkwg/hktv-product-reactfe-api.git
```

**2. CD into the project**

```
cd hktv-product-reactfe-api
```

**3. Install dependencies**

```
npm install
```

**4. Connect to Postgres** [i.e. get into postgres command prompt]

```
psql -U postgres 
postgres=# \conninfo

```

**Note:** For Windows, you need to download and install your [PostgreSQL](https://www.postgresql.org/download/windows/).

**Note:** You can use Postgres or MYSQL. We are using Postgres. If you would like to use MYSQL instead of Postgres you will need to `npm uninstall pg` and `npm install mysql`. Then edit the above command to start MYSQL started on your computer.

**5. Create a database**

Change the database name (here use hktvapi) to whatever you would like to name the database. Be sure to also change the database name in **server.js** to whatever you name the database. Then connecting to DB by \c hktvapi

```
create database hktvapi
postgres=# \c hktvapi
```

**6. Create a database table**

Use command to create and initial check. Try insert 2 records and select * to check if all goes well initially. Exit postgres by \q. Change the table name to whatever you would like to name the table.

```
CREATE TABLE products (
	ID SERIAL PRIMARY KEY,
	name VARCHAR(30) NOT NULL,
	code VARCHAR(30) NOT NULL,
	weight int DEFAULT NULL,
	quantity int DEFAULT NULL,
	location VARCHAR(10) DEFAULT NULL
);
hktvapi=# INSERT INTO products (name, code, weight, quantity, location)
hktvapi-#   VALUES ('face mask', 'FM-HKTV01', 100, 65, 'TKO'), ('face mask N99', 'FMN99-HKTV01', 200, 5, 'TSW');
hktvapi=# SELECT * FROM products;

hktvapi=# \q
```

**7. Start the node server**

```
cd hktv-product-reactfe-api
npm start
```



## Product List - CRUD (Frontend side)

Please refer and view the [repository for the frontend part](https://github.com/kirkwg/hktv-product-reactfe) that **goes along with this server API**. It uses React and Bootstrap to display a responsive data table. It serves as the perfect starter for the frontend, however, you can use any frontend to access this API.

## Further Information
1. You need 2 command terminals: one for starting the node server and one for starting the client
2. Browser URL for node server will be http://localhost:3000/
3. Browser URL for client/frontend will be http://localhost:3001/
4. To test server side API, i.e. use postman as a testing tool and use following APIs:
   1. GET call for obtaining all the records, url should be : `http://localhost:3000/crud`
   2. GET call for single record by id, for eg : `http://localhost:3000/customers/1`
   3. POST call for bulk create records : `http://localhost:3000/bulk` This call needs a body to be passed (used for importing a csv into the DB)
   4. POST call for single create records `http://localhost:3000/crud` This call needs a body to be passed
   5. DELETE call for record deletion by id, e.g. `http://localhost:3000/crud/2`
   6. PUT call to update a single record by id, e.g. `http://localhost:3000/crud/2`

## Reference Articles
1. [CRUD Starter API](https://medium.com/@olinations/build-a-crud-template-using-react-bootstrap-express-postgres-9f84cc444438?source=friends_link&sk=51028bf98ff92bc659d3edbb539a82bb)
2. [PostgreSQL basic setup](https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/)