function GetProductsBySupplierId(id) {
  // return results with GROUP BY and aggregate functions
  return {
    text: 'select s."name" as "supplier", json_agg(p."name") as "product" from "suppliers" as s join "products" as p using("supplierId") where "supplierId"=$1 group by s."name", s."supplierId"',
    values: [id]
  };

  // return {
  //     text: 'select p."name" as "product", s."name" as "supplier" from "suppliers" as s join "products" as p using("supplierId") where s."supplierId"=$1',
  //     values: [id]
  // }
}

module.exports.GetProductsBySupplierId = GetProductsBySupplierId;
