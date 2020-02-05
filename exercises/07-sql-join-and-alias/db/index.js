const pg = require('pg');
const pool = new pg.Pool({
  connectionString: 'postgresql://dev:lfz@localhost/theJoinStore'
});

module.exports = {
  query: (text, values, callback) => {
    return pool.query(text, values, callback);
  }
};
