import pool from "../../../../../../database/db.mjs";

export const updateIsRejected = async (user_id,is_rejected) => {
    const connection = await pool.getConnection();

    const values = [[user_id, is_rejected]];
      
      for (const val of values) {
        await connection.query(
          "call UpdateIsRejected(?,?);",
          val
        );
      }
      
  connection.release();
  return null;
};

// updateIsRejected("8",0)
//     .then((items) => {
//       console.log(items);
//       return items;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
  