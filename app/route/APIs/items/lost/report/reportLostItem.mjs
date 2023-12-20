import pool from "../../../../../../database/db.mjs";

//Get All reported Found Items
export const reportLostItem = async (location,user_id,is_returned,date_lost,item_description,image_id,title) => {
    const connection = await pool.getConnection();

    const values = [[user_id, is_returned, date_lost, item_description, image_id, title, location]];
      
      for (const val of values) {
        await connection.query(
          "INSERT INTO lost_item (user_id, is_returned, date_lost, item_description, image_id, title, location) VALUES (?, ?, ?, ?, ?, ?, ?)",
          val
        );
      }
      
  connection.release();
  return null;
};