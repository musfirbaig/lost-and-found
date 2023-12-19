import pool from "../../../../../database/db.mjs";

// Get all Reporetd lost items
export const getAllLostItems = async () => {
  const connection = await pool.getConnection();
  const [lost_items] = await connection.query("Call get_all_lost_items();");
  connection.release();
  return lost_items;
};

// getAllLostItems("wBv4E8BRPNOlc3Ocj8HD9ZyTF0n1")
//   .then((items) => {
//     console.log(items);
//     return items;
//   })
//   .catch((error) => {
//     console.error(error);
//   });