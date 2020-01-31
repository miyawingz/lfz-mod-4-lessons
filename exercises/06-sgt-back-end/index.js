const express = require('express');
const routes = require('./routes');
const api = '/api/grades';

const app = express();

app.use(express.json());

app.get(api, routes.HandleRootGrade);

app.post(api, routes.HandleInsertGrade);

app.put(`${api}/:gradeId`, routes.HandleUpdateGrade);

app.put(api, (req, res) => {
  res.status(500).send({
    message: 'please provide a grade id to update'
  });
});

app.delete(`${api}/:gradeId`, routes.HandleDeleteGrade);

app.delete(api, (req, res) => {
  res.status(500).send({
    message: 'please provide a grade id to delete'
  });
});

app.listen(9000);
