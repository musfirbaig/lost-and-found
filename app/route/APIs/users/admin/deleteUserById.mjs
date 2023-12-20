import pool from "../../../../../database/db.mjs";

//Registering a new user
export const deleteUserById = async (id) => {
    const connection = await pool.getConnection();
    const [dump] = await connection.query(
      "call DeleteUser(?);",
      [id]
    );
    connection.release();
    return dump;
  };


//Test

// deleteUserById('3')
//   .then((items) => {
//     console.log(items);
//     return items;
//   })
//   .catch((error) => {
//     console.error(error);
//   });
