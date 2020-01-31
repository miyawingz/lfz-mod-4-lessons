# sgt-back-end

Building a simple JSON API.

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/06-sgt-back-end` directory in your terminal.

### Challenge

For this challenge you will be creating a small back end API using Node.js and PostgreSQL. Each endpoint that you make should be thoroughly tested with the HTTPie command line client.

Before you begin, be sure to create a new database named `studentGradeTable` from the command line like this:

```bash
createdb studentGradeTable
```

Import the provided `schema.sql` from the command line like this:

```bash
psql -d studentGradeTable -f schema.sql
```

Import the sample `data.sql` from the command line like this:

```bash
psql -d studentGradeTable -f data.sql
```

You'll need to create an `index.js` file to build an Express.js server in. You need a `package.json` file as well, just like in your previous `express` lessons.

In addition to the `express` package, you'll also be using the [`pg` package](https://www.npmjs.com/package/pg). The `pg` documentation is hosted on a dedicated website [here](https://node-postgres.com/).

When using the `pg` package, you'll need to create a database connection object like this:

```js
const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});
```

The above example should work fine, but here are links to the full documentation for [connecting to Postgres](https://node-postgres.com/features/connecting) and [connection pool objects](https://node-postgres.com/api/pool).

You only need to create this object once at the top of your file. You can then use it in each of your Express.js endpoints. The most important part of the documentation is probably [how to send SQL queries to the database with the `query()` method](https://node-postgres.com/features/queries).

Once you've created a `pg.Pool`, you can [use its `query()` method](https://node-postgres.com/api/pool#pool.query) to send SQL to PostgreSQL and receive results.

Here is an example endpoint for `GET`ing a `grade` by its `gradeId`.

```js
app.get('/api/grades/:gradeId', (req, res, next) => {
  const { gradeId } = req.params;
  if (!parseInt(gradeId, 10)) {
    return res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
  }
  const sql = `
    select *
      from "grades"
     where "gradeId" = $1
  `;
  const params = [gradeId];
  // review the documentation on parameterized queries here:
  // https://node-postgres.com/features/queries#Parameterized%20query
  db.query(sql, params)
    .then(result => {
      // the query succeeded, even if nothing was found
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      // the query failed for some reason
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
  // review the documentation on Express.js error handling here:
  // https://expressjs.com/en/guide/error-handling.html
})
```

You will be implementing the following endpoints:

- `GET /api/grades` returns all grades from the `"grades"` table.

    The result could be a `200` or a `500` depending on the success of the query.

- `POST /api/grades` inserts a new grade into the `"grades"` table.
    The result could be a `201`, `400`, or `500`. The grade may be successfully inserted, the client may supply an invalid `grade`, or the query may fail.

- `PUT /api/grades/:gradeId` updates a grade in the `"grades"` table.

    The result could be a `200`, `400`, `404`, or `500`. The grade may be successfully updated, the client may supply an invalid `grade` or `gradeId`, the target `grade` may not exist in the database, or there may be an error querying the database.

- `DELETE /api/grades/:gradeId` deletes a grade from the `"grades"` table.

    The result could be a `204`, `400`, `404`, or `500`. The grade may be successfully deleted, the client may supply an invalid `gradeId`, the target `grade` may not exist in the database, or there may be an error querying the database.

### Tips

- Use [parameterized queries where necessary](https://node-postgres.com/features/queries#Parameterized%20query) to avoid [SQL Injection attacks!](https://www.youtube.com/watch?v=ciNHn38EyRc)
- Use ES6 template strings for your SQL so that you can indent them for readability.
- Don't forget to add the `express.json()` middleware to parse JSON request bodies.
- If the client successfully creates or updates a `grade`, then return them the _entire_ `grade` including any auto-generated values.
- No matter what happens, be sure to always respond to the client, even if there's an error querying the database.

### Submitting Your Solution

When your solution is complete, return to the root of your `lfz-mod-4-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).
