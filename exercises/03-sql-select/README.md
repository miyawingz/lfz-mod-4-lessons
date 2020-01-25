# sql-select

This lesson introduces the SQL language and how to execute queries against a PostgreSQL database.

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/sql-select` directory in your terminal.

### Introduction

[Structured Query Language (SQL)](https://en.wikipedia.org/wiki/SQL) is the primary way of interacting with relational databases. It is a powerful way of retrieving, creating, and manipulating data in a relational database.

You may be familiar with **imperative** programming languages such as JavaScript, where you basically tell the JavaScript runtime what to do **and how to do it**.

  - Store this value (variables)
  - Make this choice (conditionals)
  - Repeat these steps (loops)

SQL is different! SQL is a **declarative** programming language. In declarative languages, programmers _describe_ the results they want and the programming environment comes up with its own plan for getting those results. Does this sound familiar? It should! Both HTML and CSS are declarative programming languages! The programmer simply "declares" their intent and the Web browser does its best to output the desired results according to a predefined set of rules. Relational databases interpret SQL and then **dynamically generate a plan of action** to perform the programmer's commands as efficiently as possible.

#### Selecting Columns from a Table

For now, we'll talk about how to _query_ data in a database. This lesson does not cover how to _modify_ any data in the database. Instead, what is presented is how to _read_ data from a database. Consider this table of `"products"` data and imagine if it were _many_ products long:

| productId | name        | description                | price | category |
|-----------|-------------|----------------------------|-------|----------|
| 85        | ShamWow     | Soaks up so much liquid!   | 20    | cleaning |
| 24        | ShakeWeight | Makes you really strong!   | 30    | fitness  |
| 91        | OxyClean    | A versatile stain remover! | 10    | cleaning |

Querying a database typically takes the form of a **`select`** statement.

Here is an example `select` statement that gets the `"name"` and `"price"` of all `"products"`.

```sql
select "name",
       "price"
  from "products";
```

The result set would look like this:

| name         | price |
|--------------|-------|
| Shake Weight | 30    |
| ShamWow      | 20    |
| OxyClean     | 10    |

Here are a few things to note about that example `select` statement. Look back at the example to confirm.

- The query **starts with the `select` keyword**.
- The `select` keyword is followed by **a comma-separated list of column names**, each surrounded by `"` double quotes.
- The column names are followed by a **`from` clause specifying which table** to retrieve the data from.
- The query **must end in a `;` semicolon**.
- SQL keywords such as `select` and `from` are **not** case-sensitive.
- SQL does not _have_ to be indented, but you should do it anyway for consistent style and therefore readability.

#### Selecting All the Things

It is possible to select _all_ of the columns in a table by replacing the list of column names with an `*` aterisk.

```sql
select *
  from "products";
```

The result set *might* look like this:

| productId | name        | description                | price | category |
|-----------|-------------|----------------------------|-------|----------|
| 85        | ShamWow     | Soaks up so much liquid!   | 20    | cleaning |
| 91        | OxyClean    | A versatile stain remover! | 10    | cleaning |
| 24        | ShakeWeight | Makes you really strong!   | 30    | fitness  |

Here are a few things to note about the above example `select` statement. Look back at the example to confirm.

- **The order of the results is _not_ predictable**.
- The `*` asterisk is _not_ in quotes.

#### Sorting Results

As mentioned above, it should never be assumed that rows retrieved from a table will be returned in a specific, predictable order. However, it is possible to include an **`order by`** clause in the `select` statement to control the order of the result set.

```sql
select *
  from "products"
 order by "price";
```

The result set would look like this:

| productId | name        | description                | price | category |
|-----------|-------------|----------------------------|-------|----------|
| 91        | OxyClean    | A versatile stain remover! | 10    | cleaning |
| 85        | ShamWow     | Soaks up so much liquid!   | 20    | cleaning |
| 24        | ShakeWeight | Makes you really strong!   | 30    | fitness  |

Here are a few things to note about the example `select` statement. Look back at the example to confirm.

- The `order by` clause comes _after_ the `from` clause.
- The `order by` clause is **followed by a column name in `"` double quotes**.
- The default sort order of the results is **ascending order**.

#### Filtering Results

Sometimes we want to get a subset of all rows in a table. Considering our original table of data, it is possible to specify which rows should be returned. This is done using a **`where`** clause.

```sql
select "productId",
       "name",
       "price"
  from "products"
 where "category" = 'cleaning';
```

The result set would look like this:

| productId | name        | price |
|-----------|-------------|-------|
| 85        | ShamWow     | 20    |
| 91        | OxyClean    | 10    |

Here are a few things to note about the above example. Look back at the example to confirm.

- Any rows that do not have a `"category"` of `'cleaning'` have been left out.
- The `where` clause comes _after_ the `from` clause.
- The `where` clause is checking the `"category"` of each row in the table.
- Text values, such as `'cleaning'` are wrapped in `'` single quotes; not double quotes!
- The value of the `"category"` column is being **compared using a single `=` equals sign**. (Other comparisons like `<`, `>`, and `!=` are available too).
- Don't forget: unless the `select` statement includes an `order by` clause, the order of the result set is not guaranteed.

#### Getting Fewer Results

Database tables in large systems can contain _millions_ of rows. As humans we cannot really understand that much information all at once. Plus, the types of problems that we are solving usually involve a few pieces of data at a time. SQL provides us with the ability to **`limit`** the number of rows included in a result set.

**Before you look at the example results for this `select` statement, try to predict what the results will be!** Here is a reminder of the initial table data we're working with:

| productId | name        | description                | price | category |
|-----------|-------------|----------------------------|-------|----------|
| 85        | ShamWow     | Soaks up so much liquid!   | 20    | cleaning |
| 24        | ShakeWeight | Makes you really strong!   | 30    | fitness  |
| 91        | OxyClean    | A versatile stain remover! | 10    | cleaning |

```sql
select "name",
       "description"
  from "products"
 order by "price" desc
 limit 1;
```

Before we look at the result set, here are some things to note about the example `select` statement:

- The `limit` clause **comes last**.
- The `limit` clause includes a **literal integer number** with no quotes to specify the maximum number of rows that should be returned.
- The sort order of the `order by` clause is switched to **descending order** with the `desc` keyword.

And here is the result set. We've selected the name and description of the most expensive product in the table.

| name        | description              |
|-------------|--------------------------|
| ShakeWeight | Makes you really strong! |

### Exercise

For this exercise, you will be authoring queries in individual `.sql` files in the exercise directory and then executing them against the `pagila` DVD Rental database. If you have not set up the `pagila` database, then you probably skipped the [`postgres-database`](../postgres-database) lesson.

Before you can begin, it's important to confirm that the PostgreSQL database server is running. The status should be **`online`**. You can check with the following command:

```bash
sudo service postgresql status
```

If your database server is not online, then you can start it with the following command:

```bash
sudo service postgresql start
```

To start the `pgweb` GUI tool for PostgreSQL, run the following command in a separate terminal session, then visit `http://localhost:8081` in your browser:

```bash
pgweb --db=pagila
```

You can execute each `.sql` file that you write with the following command and its results will be printed to STDOUT (your terminal):

```bash
psql -d pagila -f name-of-file.sql
```

1. `all-actors.sql`

    Get all columns of all rows in the `actors` table.

1. `actor-names.sql`

    Get the `actorId`, `firstName`, and `lastName` of all actors.

1. `actor-forty.sql`

    Get all columns for the actor with the `actorId` of `40`.

1. `ten-actor-first-names.sql`

    Get the `actorId` and `firstName` of 10 actors.

1. `two-kilmers.sql`

    Get the `actorId` and `firstName` of only two actors with the `lastName` of `'Kilmer'`.

1. `all-categories.sql`

    Get all columns of all rows in the `categories` table.

1. `all-customers.sql`

    Get all columns of all rows in the `customers` table.

1. `inactive-customers.sql`

    Get all columns of all customers that have an "isActive" status of `false`.

1. `five-customer-emails.sql`

    Get the `customerId`, `firstName`, `lastName`, and `email` of 5 customers.

1. `second-store-customers.sql`

    Get the `email` of all customers that are registered at the DVD store with the `storeId` of `2`.

1. `all-languages.sql`

    Get all columns of all rows in the `languages` table.

1. `all-films.sql`

    Get all columns of all rows in the `films` table.

1. `twenty-films-of-06.sql`

    Get the `title`, `description`, and `releaseYear` of `20` films released in `2006`.

1. `r-rated-films.sql`

    Get the `filmId`, `title`, `description`, and `length`, of all R-rated films.

1. `expensive-films.sql`

    Get the `10` films with the highest `replacementCost`.

1. `cheap-to-rent.sql`

    Get the `filmId` and `title` of `50` films that cost less than `1` dollar to rent.

1. `west-bengali-postal-codes.sql`

    Get the `line1` and `postalCode` of every address in the `'West Bengali'` district.

### Submitting Your Solution

When your solution is complete, return to the root of your `lfz-mod-4-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).

### Quiz

- What is SQL and how is it different from languages like JavaScript?
- How do you retrieve specific columns from a database table?
- How do you filter rows based on some specific criteria?
- What are the benefits of formatting your SQL?
- What are four comparison operators that can be used in a `where` clause?
- How do you limit the number of rows returned in a result set?
- How do you retrieve all columns from a database table?
- How do you control the sort order of a result set?
