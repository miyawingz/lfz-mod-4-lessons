function GetProductsBySupplierState(state) {
  // return results with GROUP BY and aggregate functions
  return {
    text: 'select s."name" as "supplier", s."city", s."state", json_agg(p."name") as "product" from "suppliers" as s join "products" as p on s."supplierId"=p."supplierId" where s."state"=$1 group by s."supplierId", s."name", s."city", s."state"',
    values: [state]
  };

  // return {
  //     text: 'select s."city", p."name" as "product", s."state", s."name" as "supplier" from "suppliers" as s join "products" as p on s."supplierId"=p."supplierId" where s."state"=$1',
  //     values: [state]
  // }
}

module.exports.GetProductsBySupplierState = GetProductsBySupplierState;
