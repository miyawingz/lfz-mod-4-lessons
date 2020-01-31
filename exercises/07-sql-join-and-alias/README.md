# sql-join-and-alias

Get related data from two or more tables using `join` in your `select` statements.

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/sql-join-and-alias` directory in your terminal.

#### Basic Syntax and Example

A SQL `select` statement with a `join` is a means of retrieving related data from two or more database tables. Consider the following two tables:

##### `grades`

| gradeId | name      | course   | grade | instructorId |
|---------|-----------|----------|-------|--------------|
| 85      | Jane H    | Web Dev  | 98    | 20           |
| 24      | Katie M   | Web Dev  | 97    | 42           |
| 91      | Andrew A  | Web Dev  | 92    | 20           |
| 37      | Jasmine P | Web Dev  | 100   | 42           |

##### `instructors`

| instructorId | name    | email                   |
|--------------|---------|-------------------------|
| 42           | Jacob M | jacob@learningfuze.com  |
| 20           | Tim D   | tim@learningfuze.com    |

To get a grade with the instructors information, it can look something like this:

```sql
SELECT *
  FROM "grades"
  JOIN "instructors"
  USING ("instructorId")
```

**HOWEVER** there is a problem with this query as it will not give us all the data from both tables like expected. Both tables have a `"name"` column, but in the results there can only be one `"name"` column. If you have duplicate column names the table that is being joined, `"instructors"` in this case, will win. So we will end up with the following result from the query:

| gradeId | course  | grade | instructorId | name    | email                  |
|---------|---------|-------|--------------|---------|------------------------|
| 85      | Web Dev | 98    | 20           | Tim D   | tim@learningfuze.com   |
| 24      | Web Dev | 97    | 42           | Jacob M | jacob@learningfuze.com |
| 91      | Web Dev | 92    | 20           | Tim D   | tim@learningfuze.com   |
| 37      | Web Dev | 100   | 42           | Jacob M | jacob@learningfuze.com |

**Note** in the above result the students names are missing. An easy way to fix this is with using an alias for a duplicate column name:

```sql
SELECT "gradeId", "grades"."name" AS "student", "course", "grade", "instructors"."name" AS "instructor", "email"
  FROM "grades"
  JOIN "instructors"
  USING ("instructorId")
```

Using aliases allows us to rename some column names so we can see all of our data. Note in the query that the table name comes before the column name for any duplicate column names. If both tables have a column name in common you must reference the table first so the database knows which `"name"` column you are referring to:

| gradeId | student   | course  | grade | instructorId | instructor | email                  |
|---------|-----------|---------|-------|--------------|------------|------------------------|
| 85      | Jane H    | Web Dev | 98    | 20           | Tim D      | tim@learningfuze.com   |
| 24      | Katie M   | Web Dev | 97    | 42           | Jacob M    | jacob@learningfuze.com |
| 91      | Andrew A  | Web Dev | 92    | 20           | Tim D      | tim@learningfuze.com   |
| 37      | Jasmine P | Web Dev | 100   | 42           | Jacob M    | jacob@learningfuze.com |

There is one more useful thing we can do with aliases, we can use them for our table names to help shorten what we have to type in other parts of the query:

```sql
SELECT "gradeId", g."name" AS "student", "course", "grade", "instructorId", i."name" AS "instructor", "email"
  FROM "grades" AS g
  JOIN "instructors" AS i
  USING ("instructorId")
```

**Note** This query will produce the exact same results as the query without the table name aliases. 

#### Selecting Specific Rows with a Join

Using `JOIN` does not affect how the `WHERE` clause works. You can still use all the same things you can in any `SELECT` statement like, `GROUP BY` and `LIMIT`. Here is an example of getting one student with the instructors information included:

```sql
SELECT "gradeId", g."name" AS "student", "course", "grade", "instructorId", i."name" AS "instructor", "email"
  FROM "grades" AS g
  JOIN "instructors" AS i
  USING ("instructorId")
  WHERE "gradeId" = 24
```

| gradeId | student   | course  | grade | instructorId | instructor | email                  |
|---------|-----------|---------|-------|--------------|------------|------------------------|
| 24      | Katie M   | Web Dev | 97    | 42           | Jacob M    | jacob@learningfuze.com |

#### `USING` VS. `ON`

An important part of a `JOIN` is telling the database which columns from each table to join the data on. In the previous examples we used the `USING` clause, but `USING` only works if the column names are the exact same in both tables. So what do we do if we want to join two tables on columns that don't have the same exact name? This is where the `ON` clause comes in so given the following tables we would need to use `ON` instead of `USING`:

##### `grades`

| id | name      | course   | grade | instructorId |
|----|-----------|----------|-------|--------------|
| 85 | Jane H    | Web Dev  | 98    | 20           |
| 24 | Katie M   | Web Dev  | 97    | 42           |
| 91 | Andrew A  | Web Dev  | 92    | 20           |
| 37 | Jasmine P | Web Dev  | 100   | 42           |

##### `instructors`

| id | name    | email                   |
|----|---------|-------------------------|
| 42 | Jacob M | jacob@learningfuze.com  |
| 20 | Tim D   | tim@learningfuze.com    |

In this example we want to join the tables on the `"grades"."instructorId"` and `"instructors"."id"` columns. Since the column names are different in each table we can't use `USING`, we must use `ON`.

```sql
SELECT g."id" AS "gradeId", g."name" AS "student", "course", "grade", i."id" AS "instructorId", i."name" AS "instructor", "email"
  FROM "grades" AS g
  JOIN "instructors" AS i
  ON g."instructorId" = i."id"
  WHERE "gradeId" = 24
```

**Note** In short `USING` works only when the column names are the same. If the column names you want to join do not match you must use `ON`. Planning out your database and sticking to naming conventions can help simplify your queries.

### Exercise

For this exercise, you will be setting up a Node.js project and creating 2 endpoints for an e-commerce site.

Before you can begin, it's important to confirm that the PostgreSQL database server is running. The status should be **`online`**. You can check with the following command:

```bash
sudo service postgresql status
```

If your database server is not online, then you can start it with the following command:

```bash
sudo service postgresql start
```

#### Setup

1. Initialize npm in the exercise folder:
    - ```bash
        npm init -y
      ```
1. Install express
1. Create a new database named `theJoinStore` from the command line:
    - ```bash
        createdb theJoinStore
      ```
1. Import the provided `schema.sql` from the command line:
    - ```bash
        psql -d theJoinStore -f schema.sql
      ```
1. Import the sample `data.sql` from the command line:
    - ```bash
        psql -d theJoinStore -f data.sql
      ```
1. Create an `index.js` file and do the initial setup for an `express` server

#### Endpoints

1. Create an endpoint that will return a list of products with the suppliers name the product name. The endpoint should receive a suppliers ID and only products from that supplier should be returned.
    - **URL:** `/api/products/suppliers/:id`
    - **Example Output:**
        ```JSON
          {
            "products": [
              {
                "product": "Roadrunner Trap",
                "supplier": "Acme Supply Co"
              },
              {
                "product": "Oversized Target",
                "supplier": "Acme Supply Co"
              },
              {
                "product": "Anvil",
                "supplier": "Acme Supply Co"
              }
            ]
          }
        ```
1. Create a second endpoint that will return a list of products based on the suppliers state. The endpoint should utilize a query string parameter to receive the two letter state abbreviation.
    - **URL:** `/api/products/suppliers?state=??`
    - **Example Output:**
        ```JSON
          {
            "products": [
              {
                "city": "Los Angeles",
                "product": "Fedora",
                "state": "CA",
                "supplier": "Hats R Us"
              },
              {
                "city": "Riverside",
                "product": "Phillips Head Screwdriver",
                "state": "CA",
                "supplier": "Tool Time LLC"
              },
              {
                "city": "Los Angeles",
                "product": "Baseball Hat",
                "state": "CA",
                "supplier": "Hats R Us"
              },
              {
                "city": "Los Angeles",
                "product": "Top Hat",
                "state": "CA",
                "supplier": "Hats R Us"
              },
              {
                "city": "Los Angeles",
                "product": "Trucker Hat",
                "state": "CA",
                "supplier": "Hats R Us"
              },
              {
                "city": "Riverside",
                "product": "Needle Nose Pliers",
                "state": "CA",
                "supplier": "Tool Time LLC"
              },
              {
                "city": "Riverside",
                "product": "Hammer",
                "state": "CA",
                "supplier": "Tool Time LLC"
              }
            ]
          }
        ```

#### Extra Challenge (Not Required)
For an extra challenge look into `GROUP BY` and `aggregate` functions in PostgreSQL. Specifically look into the `json_agg` aggregate function. Then try changing the output of your endpoints to match the following:

1. For get products by suppliers ID (`/api/products/suppliers/:id`) make the data match the below example output:
    - **Example Output:**
        ```JSON
          {
            "products": [
              "Roadrunner Trap",
              "Oversized Target",
              "Anvil"
            ],
            "supplier": "Acme Supply Co"
          }
        ```
1. For get products by suppliers state (`/api/products/suppliers?state=??`) make the data match the below example output:
    - **Example Output:**
        ```JSON
          [
            {
              "city": "Los Angeles",
              "products": [
                "Top Hat",
                "Baseball Hat",
                "Fedora",
                "Trucker Hat"
              ],
              "state": "CA",
              "supplier": "Hats R Us"
            },
            {
              "city": "Riverside",
              "products": [
                "Phillips Head Screwdriver",
                "Hammer",
                "Needle Nose Pliers"
              ],
              "state": "CA",
              "supplier": "Tool Time LLC"
            }
          ]
        ```

### Submitting Your Solution

When your solution is complete, return to the root of your `lfz-full-stack-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).

### Quiz

- How do you get related data from two separate tables?
- What is the difference between `USING` and `ON`?
- Why are aliases useful?
