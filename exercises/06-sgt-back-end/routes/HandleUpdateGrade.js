const { query } = require('../db');
const queries = require('../queries');

function HandleUpdateGrade(req, res) {
  const grade = req.body.grade;
  const id = req.params.gradeId;
  let auth = true;
  let authMessage = '';

  if (!grade || isNaN(grade) || grade < 0 || grade > 100) {
    auth = false;
    authMessage = 'invalid grade; ';
  }

  if (!id || isNaN(id) || id < 0) {
    auth = false;
    authMessage += 'invalid id';
  }

  if (!auth) {
    res.status(500).send({
      messgae: authMessage
    });
    return;
  }

  const queryInfo = queries.UpdateGrade(id, grade);

  query(queryInfo.text, queryInfo.values, (err, { rowCount }) => {
    if (err) {
      res.send(500).send({
        messgae: err.error
      });
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
