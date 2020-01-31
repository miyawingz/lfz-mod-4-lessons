function GetAllGrades(limit = null) {
  return limit && !isNaN(limit)
    ? {
      text: 'SELECT * FROM "grades" LIMIT=$1',
      values: [limit]
    }
    : {
      text: 'SELECT * FROM "grades"',
      values: []
    };
}

module.exports.GetAllGrades = GetAllGrades;
