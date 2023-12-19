import pool from "../../../../../database/db.mjs";


//Get All reported Found Items
export const getAllFoundItems = async () => {
  const connection = await pool.getConnection();
  const [found_items] = await connection.query("Call get_all_found_items();");
  connection.release();
  return found_items;
};

// getAllFoundItems("wBv4E8BRPNOlc3Ocj8HD9ZyTF0n1")
//   .then((items) => {
//     console.log(items);
//     return items;
//   })
//   .catch((error) => {
//     console.error(error);
//   });
