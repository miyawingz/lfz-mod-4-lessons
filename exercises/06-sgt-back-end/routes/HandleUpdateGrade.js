const { query } = require('../db');
const queries = require('../queries');

function HandleUpdateGrade(req, res) {
  const grade = req.query.grade;
  const id = req.params.gradeId;
  const queryInfo = queries.UpdateGrade(id, grade);

  query(queryInfo.text, queryInfo.values, (err, { rowCount }) => {
    if (err) {
      res.send(500);
      return;
    }

    if (rowCount !== 0) {
      res.send({
        messgae: `grade with id ${id} has been updated to ${grade} `
      });
    } else {
      res.status(500).send({
        messgae: `grade with id ${id} does not exist`
      });
    }

  });
}

module.exports.HandleUpdateGrade = HandleUpdateGrade;
