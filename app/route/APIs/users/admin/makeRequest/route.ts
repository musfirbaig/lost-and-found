
import pool from "@/database/db.mjs";
import { makeClaimRequest } from "../makeRequest/makeClaimRequest.mjs";

interface YourRequestBody {
    found_image_id: string;
    lost_image_id: number;
    user_id: string;
    is_resolved: string;
    is_rejected: string;
  }
  export const POST = async (req: Request, res: Response) => {
    console.log("POST FUNCTION CALLED");
    const connection = await pool.getConnection();
  
    try {
      const {
        found_image_id,
        lost_image_id,
        user_id,
        is_resolved,
        is_rejected
      } = await req.json();
  
      makeClaimRequest(
        found_image_id,
        lost_image_id,
        user_id,
        is_resolved,
        is_rejected
      );
      return Response.json({ Pass: "Passed" });
    } catch (err) {
      console.error("Error:", err);
      connection.release();
      return Response.json({ Fail: "failure" });
    }
  };
  