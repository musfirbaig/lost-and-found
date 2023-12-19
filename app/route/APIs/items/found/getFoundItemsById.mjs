import pool from "../../../../../database/db.mjs";
//Get found Items By Id
export const getFoundItemsById = async (id) => {
  const connection = await pool.getConnection();
  const [found_items] = await connection.query(
    "select * from found_item where user_id = ?",
    [id]
  );
  connection.release();
  return found_items;
};

// getFoundItemsById("wBv4E8BRPNOlc3Ocj8HD9ZyTF0n1")
//   .then((items) => {
//     console.log(items);
//     return items;
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// export default getFoundItemsById;