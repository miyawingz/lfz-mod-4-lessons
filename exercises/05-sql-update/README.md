# sql-update

Updating rows in a SQL database using `update` statements.

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/sql-update` directory in your terminal.

#### Basic Syntax and Example

An SQL `update` statement is a means of updating rows in a database table. Consider the following `"products"` table:

| productId | name        | description                | price | category |
|-----------|-------------|----------------------------|-------|----------|
| 85        | ShamWow     | Soaks up so much liquid!   | 20    | cleaning |
| 24        | ShakeWeight | Makes you really strong!   | 30    | fitness  |
| 91        | OxyClean    | A versatile stain remover! | 10    | cleaning |

To make an update we might execute the following command:

```sql
update "products"
   set "price" = 100;
```

**HOWEVER** there is a serious problem with this query as it would update _every_ row in the table!

| productId | name        | description                | price | category |
|-----------|-------------|----------------------------|-------|----------|
| 85        | ShamWow     | Soaks up so much liquid!   | 100   | cleaning |
| 24        | ShakeWeight | Makes you really strong!   | 100   | fitness  |
| 91        | OxyClean    | A versatile stain remover! | 100   | cleaning |

Therefore, great care must be taken to include a `where` clause in your `update` statements to only target specific rows:

```sql
update "products"
   set "price" = 100
 where "productId" = 24;
```

If we were careful our data would now look like this:

| productId | name        | description                | price | category |
|-----------|-------------|----------------------------|-------|----------|
| 85        | ShamWow     | Soaks up so much liquid!   | 20    | cleaning |
| 24        | ShakeWeight | Makes you really strong!   | 100   | fitness  |
| 91        | OxyClean    | A versatile stain remover! | 10    | cleaning |

#### Updating Multiple Columns

It is possible to update multiple columns of a row with a comma-separated list of assignments in the `set` clause.

```sql
update "products"
   set "price"       = 200,
       "name"        = 'Super ShakeWeight',
       "description" = 'Makes you ULTRA strong!'
 where "productId" = 24;
```

| productId | name              | description                | price | category |
|-----------|-------------------|----------------------------|-------|----------|
| 85        | ShamWow           | Soaks up so much liquid!   | 20    | cleaning |
| 24        | Super ShakeWeight | Makes you ULTRA strong!    | 200   | fitness  |
| 91        | OxyClean          | A versatile stain remover! | 10    | cleaning |

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

1. `make-yoder.sql`

    Update the actor with the `actorId` of `15` to have the `firstName` of `'Baby'` and the `lastName` of `'Yoda'`.

1. `sick-prank.sql`

    Give all NC-17 rated films a rating of `'G'`.

1. `murica.sql`

    Change the country of `'United States'` to be named `'Murica'`.

### Submitting Your Solution

When your solution is complete, return to the root of your `lfz-mod-4-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).

### Quiz

- How do you update rows in a database table?
- Why is it important to include a `where` clause in your `update` statements?
