import pool from "../../../../../database/db.mjs";

//Registering a new user
export const registerUser = async (user_id,user_name,email,passwords,contact_no,user_role,f_name,l_name) => {
    const connection = await pool.getConnection();

    const values = [[user_id,user_name,email,passwords,contact_no,user_role,f_name,l_name]];
      
      for (const val of values) {
        await connection.query(
          "INSERT INTO users (user_id,user_name,email,passwords,contact_no,user_role,f_name,l_name) VALUES (?, ?, ?, ?, ?, ?, ?,?)",
          val
        );
      }
      
  connection.release();
  return null;
};


//Test

// registerUser("3","userA","AAA@hotmail.com","fgh56fg","030877833","student","Abdullah","Usama")
//   .then((items) => {
//     console.log(items);
//     return items;
//   })
//   .catch((error) => {
//     console.error(error);
//   });
