import pool from "./db.mjs";

export const getUserById = async (id) => {
  const connection = await pool.getConnection();
  const [rows] = await connection.query(
    'SELECT * FROM users where user_id = ?',[id]
  );
  connection.release();
  return rows;
};

// getUserById("wBv4E8BRPNOlc3Ocj8HD9ZyTF0n1")
//   .then((user) => {
//     console.log(user);
//     return user;
//   })
//   .catch((error) => {
//     console.error(error);
//   });