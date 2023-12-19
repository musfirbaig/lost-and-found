import pool from "../../../../../database/db.mjs";
//Get returned found items
export const getReturnedLostItems = async (id) => {
  const connection = await pool.getConnection();
  const [lost_items_returned] = await connection.query(
    "select * from lost_items_returned;"
  );
  connection.release();
  return lost_items_returned;
};

//testing

// getReturnedLostItems()
//   .then((items) => {
//     console.log(items);
//     return items;
//   })
//   .catch((error) => {
//     console.error(error);
//   });
