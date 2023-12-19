import pool from "../../../../../database/db.mjs";
//Get unreturned lost items
export const getUnreturnedLostItems = async (id) => {
  const connection = await pool.getConnection();
  const [lost_items_unreturned] = await connection.query(
    "select * from lost_items_not_returned;;"
  );
  connection.release();
  return lost_items_unreturned;
};


// getUnreturnedLostItems()
//   .then((items) => {
//     console.log(items);
//     return items;
//   })
//   .catch((error) => {
//     console.error(error);
//   });
