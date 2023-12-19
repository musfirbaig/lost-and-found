import pool from "../../../../../database/db.mjs";
//Lost items by ID
export const getLostItemsById = async (id) => {
  const connection = await pool.getConnection();
  const [lost_items] = await connection.query(
    "select * from lost_item where user_id = ?;",
    [id]
  );

  connection.release();
  return lost_items;
};

// getLostItemsById("wBv4E8BRPNOlc3Ocj8HD9ZyTF0n1")
//   .then((items) => {
//     console.log(items);
//     return items;
//   })
//   .catch((error) => {
//     console.error(error);
//   });

  // export default getLostItemsById;