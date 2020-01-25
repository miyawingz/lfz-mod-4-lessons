# postgres-intro

This lesson introduces the [PostgreSQL](https://www.postgresql.org/) (pronounced "Post Gress Queue El). PostgreSQL v10 comes pre-installed in the LearningFuze development environment and this lesson assumes that you are running the latest version of the development environment.

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/postgres-intro` directory in your terminal.

### Introduction

#### Why Databases?

Applications are typically backed by some form of data store. It is possible for data to be stored directly in files that are managed by the application, but when the application needs to quickly retrieve or store complex data in an organized fashion, a database fills that need nicely.

#### What is PostgreSQL?

PostgreSQL is a powerful, free, open source [Relational Database](https://en.wikipedia.org/wiki/Relational_database) Management System (RDBMS). It is often cited as the most advanced open source database of its kind and is [well-liked by the developer community](https://insights.stackoverflow.com/survey/2019#technology-_-most-loved-dreaded-and-wanted-databases) for its robust feature set, standards compliance, and reliability. PostgreSQL has been in development for over 30 years and it still gets cutting-edge improvements on an annual basis! Other popular relational databases include MySQL (also free), SQL Server by Microsoft, and Oracle by Oracle Corporation.

#### Why a Relational Database?

Not all databases are **relational** like PostgreSQL or the above mentioned. For example: [MongoDB](https://www.mongodb.com/) is a JSON document store, [Redis](https://redis.io/) is a key-value store, and [Neo4j](https://neo4j.com/) is a graph database. These non-relational databases, although vastly different from one another, are often categorized together under the term "NoSQL" (pronounced "No Sequel"). This simply means that you do not work with them using [the SQL language](https://en.wikipedia.org/wiki/SQL) (pronounced "Sequel" or "Ess Queue El"). **Relational** databases are commonly referred to as "SQL databases" because you usually _do_ work with them using some variation of the SQL language. You will learn more about SQL in the coming lessons.

Many problem domains can be modeled well using a relational database. If you are storing related data, then a relational database is probably a good first choice! For example, you may be storing data about students, teachers, courses, and classrooms. You can imagine that there are relationships between these things. Teachers teach the courses, students enroll in the courses, and the courses are conducted in classrooms. Teachers can teach many courses and students can attend many courses.

A quality of many relational databases is that they support good guarantees about data integrity. They can store and modify data in a way that makes data corruption as _unlikely_ as possible. This means that developers can set up their database to reject "bad" data and not worry about data being "half written". For more information, read about [ACID](https://en.wikipedia.org/wiki/ACID).

Relational databases are arguably the most widely used kind of database. [SQLite](https://www.sqlite.org/index.html) is an embedded relational database that is deployed in a [staggeringly high number of devices and applications](https://www.sqlite.org/mostdeployed.html). Many web developers work with a relational database at least a little bit during their career. And knowing the SQL language is a very portable skill given that there are [so many relational databases](https://en.wikipedia.org/wiki/List_of_relational_database_management_systems) driven by almost the same language.

### Exercise

1. Open two terminals into your development environment and execute the `top` command in one of them to list the currently running processes.
1. Read about the [Architectural Fundamentals](https://www.postgresql.org/docs/10/tutorial-arch.html) of PostgreSQL in the official documentation.
1. In your second terminal, start the `postgres` database server with the following command and watch your `top` output in the first terminal.
    ```bash
    sudo service postgresql start
    ```
    You should see several `postgres` processes listed in your `top` output.
1. Stop the `postgres` database server with the following command and watch your `top` output in the first terminal.
    ```bash
    sudo service postgresql stop
    ```
1. Start the `postgresql` service again before continuing.
1. Quit `top` by pressing `q`.
1. In the terminal that was running `top`, launch the [`pgweb`](https://github.com/sosedoff/pgweb) PostgreSQL database client by typing `pgweb` and pressing enter. You can stop `pgweb` at any time by pressing `Ctrl + C`.
1. Visit `http://localhost:8081` in your web browser. The upper left corner of the UI should say `dev`.
1. In your second terminal, execute the `psql` command to list the databases in your PostgreSQL database server.
    ```bash
    psql -c '\l'
    ```
1. Run the command again and output the results to a file. You'll be committing this file for this assignment.
    ```bash
    psql -c '\l' > list-of-databases.txt
    ```

### Submitting Your Solution

When your solution is complete, return to the root of your `lfz-mod-4-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).

### Quiz

- What is PostgreSQL and what are some alternative relational databases?
- What are some advantages of learning a relational database?
- What is one way to see if PostgreSQL is running?
