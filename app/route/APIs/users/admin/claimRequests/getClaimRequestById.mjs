import pool from "../../../../../../database/db.mjs";

export const getClaimRequestById = async (id) => {
    const connection = await pool.getConnection();
    const [found_items] = await connection.query(
      "call GetClaimRequestByID(?);",
      [id]
    );
    connection.release();
    return found_items;
  };
  
//   getClaimRequestById("8")
//     .then((items) => {
//       console.log(items);
//       return items;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
  