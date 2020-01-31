const { query } = require('../db');
const queries = require('../queries');

function HandleDeleteGrade(req, res) {
  const id = req.params.gradeId;
  const queryInfo = queries.DeleteGrade(id);
  query(queryInfo.text, queryInfo.values, (err, { rowCount }) => {
    if (err) {
      res.status(500).send({
        message: ''
      });
      return;
    }

    if (rowCount > 0) {
      res.send({
        message: `grade with id ${id} has been deleted`
      });
    } else {
      res.status(500).send({
        message: `grade with id ${id} does not exist`
      });
    }
  });
}

module.exports.HandleDeleteGrade = HandleDeleteGrade;
