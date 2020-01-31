function UpdateGrade(Id, grade) {
  return {
    text: 'UPDATE "grades" SET "grade"=$1 WHERE "gradeId"=$2',
    values: [grade, Id]
  };
}

module.exports.UpdateGrade = UpdateGrade;
