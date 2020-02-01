const { query } = require('../db');
const queries = require('../queries');

function HandleGetProductsBySupplierId(req, res) {
  const id = req.params.id;

  if (!id || isNaN(id) || id < 0) {
    res.status(500).send({
      message: `invald supplier id of ${id}`
    });
    return;
  }

  const queryInfo = queries.GetProductsBySupplierId(id);

  query(queryInfo.text, queryInfo.values, (err, result) => {
    if (err) {
      res.status(500).send({
        message: err.error
      });
      return;
    }

    if (result.rowCount === 0) {
      res.status(500).send({
        message: `supplier id ${id} does not exist`
      });
    } else {
      res.send({
        products: result.rows[0].product,
        supplier: result.rows[0].supplier
      });
    }
  });
}

module.exports.HandleGetProductsBySupplierId = HandleGetProductsBySupplierId;
