const express = require('express');
const routes = require('./routes');
const api = '/api/grades';

const app = express();

app.use(express.json());

app.get(api, routes.HandleRootGrade);

app.post(api, routes.HandleInsertGrade);

app.put(`${api}/:gradeId`, routes.HandleUpdateGrade);

app.delete(`${api}/:gradeId`, routes.HandleDeleteGrade);

app.listen(9000);
