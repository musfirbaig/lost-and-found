import pool from "../../../../../../database/db.mjs";

export const getAllClaimRequests = async () => {
    const connection = await pool.getConnection();
    const [all_claims] = await connection.query(
      "call GetAllClaimRequests();"
    );
    connection.release();
    return all_claims;
  };
  
//   getAllClaimRequests()
//     .then((items) => {
//       console.log(items);
//       return items;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
  