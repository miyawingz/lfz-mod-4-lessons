function DeleteGrade(id) {
  return {
    text: 'DELETE FROM "grades" WHERE "gradeId"=$1',
    values: [id]
  };
}

module.exports.DeleteGrade = DeleteGrade;
