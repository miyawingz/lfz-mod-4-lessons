const { query } = require('../db');
const queries = require('../queries');

function HandleInsertGrade(req, res) {
  const name = req.body.name;
  const course = req.body.course;
  const grade = req.body.grade;
  let auth = true;
  let authMessgae = '';

  if (!name || typeof (name) !== 'string' || !(RegExp('^[A-Za-z ]+$').test(name))) {
    auth = false;
    authMessgae = 'invalid name input; ';
  }

  if (!course || typeof (course) !== 'string') {
    auth = false;
    authMessgae += 'invalid course input; ';
  }

  if (!grade || isNaN(grade) || grade < 0 || grade > 100) {
    auth = false;
    authMessgae += 'invalid grade input;';
  }

  if (!auth) {
    res.status(500).send({
      message: authMessgae
    });
    return;
  }

  const queryInfo = queries.InsertNewGrade(name, course, grade);
  query(queryInfo.text, queryInfo.values, (err, result) => {
    if (err) {
      res.status(500).send({
        messgae: err.error
      });
      return;
    }

    res.send({
      messgae: `Student ${name} in course ${course} with grade ${grade} has been added`
    });
  });
}

module.exports.HandleInsertGrade = HandleInsertGrade;
