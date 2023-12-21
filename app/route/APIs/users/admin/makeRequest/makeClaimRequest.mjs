import pool from "../../../../../../database/db.mjs";

export const makeClaimRequest = async (
  found_image_id,
  lost_image_id,
  user_id,
  is_resolved,
  is_rejected
) => {
  const connection = await pool.getConnection();

  const values = [
    [found_image_id, lost_image_id, user_id, is_resolved, is_rejected],
  ];

  for (const val of values) {
    await connection.query("call MakeClaimRequest(?,?,?,?,?); ", val);
  }

  connection.release();
  return null;
};

// makeClaimRequest('456','image123','2',0,0)
//     .then((items) => {
//       console.log(items);
//       return items;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
