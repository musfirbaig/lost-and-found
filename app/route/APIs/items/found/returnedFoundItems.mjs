import pool from "../../../../../database/db.mjs";
//Get returned found items
export const getReturnedFoundItems = async (id) => {
  const connection = await pool.getConnection();
  const [found_items_returned] = await connection.query(
    "select * from found_items_returned;"
  );
  connection.release();
  return found_items_returned;
};


// getReturnedFoundItems()
//   .then((items) => {
//     console.log(items);
//     return items;
//   })
//   .catch((error) => {
//     console.error(error);
//   });
