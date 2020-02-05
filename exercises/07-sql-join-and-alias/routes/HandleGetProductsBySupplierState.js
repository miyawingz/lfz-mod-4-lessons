const { query } = require('../db');
const queries = require('../queries');

function HandleGetProductsBySupplierState(req, res) {
  const state = req.query.state.toUpperCase().trimLeft();

  if (!state || typeof (state) !== 'string') {
    res.status(500).send({
      message: `invalid state name of ${state}`
    });
    return;
  }

  const queryInfo = queries.GetProductsBySupplierState(state);
  query(queryInfo.text, queryInfo.values, (err, result) => {
    if (err) {
      res.status(500).send({
        message: err.error
      });
      return;
    }

    if (result.rowCount === 0) {
      res.status(500).send({
        message: `state ${state} does not exist in suppliers list`
      });
      return;
    }

    const output = result.rows.map(v => {
      return {
        city: v.city,
        products: v.product,
        state: v.state,
        supplier: v.supplier
      };
    });
    res.send({
      products: output
    });

  });
}

module.exports.HandleGetProductsBySupplierState = HandleGetProductsBySupplierState;
