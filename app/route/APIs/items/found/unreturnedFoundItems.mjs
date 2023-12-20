import pool from "../../../../../database/db.mjs";
//Get returned found items
export const getUnreturnedFoundItems = async (id) => {
  const connection = await pool.getConnection();
  const [found_items_unreturned] = await connection.query(
    "select * from found_items_not_returned;;"
  );
  connection.release();
  return found_items_unreturned;
};


// getUnreturnedFoundItems()
//   .then((items) => {
//     console.log(items);
//     return items;
//   })
//   .catch((error) => {
//     console.error(error);
//   });
