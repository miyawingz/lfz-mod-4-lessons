# sql-insert

This lesson covers adding data to a SQL table using `insert` statements.

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/sql-insert` directory in your terminal.

#### Basic Syntax and Example

An SQL `insert` statement is a means of adding rows to a table. Consider the following `"products"` table:

| productId | name        | description                | price | category |
|-----------|-------------|----------------------------|-------|----------|
| 85        | ShamWow     | Soaks up so much liquid!   | 20    | cleaning |
| 24        | ShakeWeight | Makes you really strong!   | 30    | fitness  |
| 91        | OxyClean    | A versatile stain remover! | 10    | cleaning |

To add a row to this table, we would likely execute the following command:

```sql
insert into "products" ("name", "description", "price", "category")
values ('Ostrich Pillow', 'Feel comfy and cozy!', 99, 'self care');
```

Selecting all of the data from the `"products"` table would now include the inserted row:

```sql
select *
  from "products";
```

| productId | name           | description                | price | category  |
|-----------|----------------|----------------------------|-------|-----------|
| 85        | ShamWow        | Soaks up so much liquid!   | 20    | cleaning  |
| 24        | ShakeWeight    | Makes you really strong!   | 30    | fitness   |
| 91        | OxyClean       | A versatile stain remover! | 10    | cleaning  |
| 102       | Ostrich Pillow | Feel comfy and cozy!       | 99    | self care |

Here are a few things to notice about the example `insert` statement. Look back at the example to confirm.

- The statement begins with the **`insert` keyword**.
- The table to `insert into` is specified in `"` double quotes.
- The list of columns being inserted is wrapped in `()` parenthesis.
- The `values` being inserted are also wrapped in `()` in parenthesis **in the same order as the columns they belong to**. In SQL, a list of values is referred to as a **tuple**.
- Text values are wrapped in `'` single quotes.
- Numeric values are represented with literal numbers (or decimals if applicable).
- In this particular statement, the `"productId"` was left out. This is because tables are often configured to auto-generate identifier attributes to avoid accidental duplicates.

#### Returning Auto-Generated Attributes

In PostgreSQL it's possible to get the full inserted row back from the database, including it's auto-generated attribute(s), like a `productId`. This is done with a `returning` clause. Otherwise, it would be necessary to make a separate query to the database just to get the auto-generated attributes.

```sql
insert into "products" ("name", "description", "price", "category")
values ('Ostrich Pillow', 'Feel comfy and cozy!', 99, 'self care')
returning *;
```

And the output result might look like this:

| productId | name           | description          | price | category  |
|-----------|----------------|----------------------|-------|-----------|
| 102       | Ostrich Pillow | Feel comfy and cozy! | 99    | self care |

If you only want specific values back, you can use a comma-separated list of column names instead of an `*` asterisk.

#### Adding Multiple Rows

Data rows can be batch inserted into a database table by specifying more than one **tuple** of values, separated by commas. Below we are inserting two new rows into the `"products"` table.

```sql
insert into "products" ("name", "description", "price", "category")
values ('Ostrich Pillow', 'Feel comfy and cozy!', 99, 'self care'),
       ('Tater Mitts', 'Scrub some taters!', 6, 'cooking')
returning *;
```

And because of the `returning` clause, they'd both be included in the statement's output:

| productId | name           | description          | price | category  |
|-----------|----------------|----------------------|-------|-----------|
| 102       | Ostrich Pillow | Feel comfy and cozy! | 99    | self care |
| 103       | Tater Mitts    | Scrub some taters!   | 6     | cooking   |


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

1. `insert-actor.sql`

    Add an actor to the `"actors"` table. And retrieve the resulting row. The `"actorId"` and `"updatedAt"` are auto-generated.

1. `insert-languages.sql`

    Add `'HTML'`, `'CSS'`, and `'JavaScript'` to the languages table and retrieve the resulting rows. The `"languageId"` and `"updatedAt"` are auto-generated.

### Submitting Your Solution

When your solution is complete, return to the root of your `lfz-mod-4-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).

### Quiz

- How do you add a row to a SQL table?
- What is a tuple?
- How do you add multiple rows to a SQL table at once?
- How to you get back the row being inserted into a table without a separate `select` statement?
