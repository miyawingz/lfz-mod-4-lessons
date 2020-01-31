function InsertNewGrade(name, course, grade) {
  return {
    text: 'INSERT INTO "grades"("name","course","grade") VALUES($1,$2,$3)',
    values: [name, course, grade]
  };
}

module.exports.InsertNewGrade = InsertNewGrade;
