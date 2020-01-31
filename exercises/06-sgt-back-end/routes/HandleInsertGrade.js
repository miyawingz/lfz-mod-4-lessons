const { query } = require('../db');
const queries = require('../queries');

function HandleInsertGrade(req, res) {
  const name = req.query.name;
  const course = req.query.course;
  const grade = req.query.grade;

  // check for valid input? how?
  // if (typeof (name) !== "string" || typeof (course) !== "string" || grade < 0 || grade > 100) {
  //     res.status(500).send({
  //         messgae: 'invalid grade input'
  //     })
  //     return;
  // };

  const queryInfo = queries.InsertNewGrade(name, course, grade);
  query(queryInfo.text, queryInfo.values, (err, result) => {
    if (err) {
      res.status(500).send({
        messgae: 'fail to insert grade'
      });
      return;
    }
    res.send({
      messgae: `Student ${name} in course ${course} with grade ${grade} has been added`
    });
  });
}

module.exports.HandleInsertGrade = HandleInsertGrade;
