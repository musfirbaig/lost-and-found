import pool from "../../../../database/db.mjs";

export const getUserById = async (id) => {
  const connection = await pool.getConnection();
  const [rows] = await connection.query(
    'SELECT * FROM users where user_id = ?',[id]
  );
  connection.release();
//   return rows;
console.log(rows);
};

// getUserById("2")
//   .then((user) => {
//     console.log(user);
//     return user;
//   })
//   .catch((error) => {
//     console.error(error);
//   });