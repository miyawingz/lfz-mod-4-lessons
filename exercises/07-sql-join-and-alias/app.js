const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());

app.get('/api/products/suppliers/:id', routes.HandleGetProductsBySupplierId);

app.get('/api/products/suppliers', routes.HandleGetProductsBySupplierState);

app.listen(9000);
