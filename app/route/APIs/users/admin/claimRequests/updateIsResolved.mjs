import pool from "../../../../../../database/db.mjs";

export const updateIsResolved = async (user_id,is_resolved) => {
    const connection = await pool.getConnection();

    const values = [[user_id, is_resolved]];
      
      for (const val of values) {
        await connection.query(
          "call UpdateIsResolved(?,?);",
          val
        );
      }
      
  connection.release();
  return null;
};

// updateIsResolved("8",1)
//     .then((items) => {
//       console.log(items);
//       return items;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
  