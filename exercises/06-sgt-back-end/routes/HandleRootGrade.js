const { query } = require('../db');
const queries = require('../queries');

function HandleRootGrade(req, res) {
  const queryInfo = queries.GetAllGrades();
  query(queryInfo.text, [], (err, { rows }) => {
    if (err) {
      res.status(500).end();
      return;
    }
    res.send(rows);
  });
}

module.exports.HandleRootGrade = HandleRootGrade;
