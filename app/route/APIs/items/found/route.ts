import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import { getFoundItemsById } from "./getFoundItemsById.mjs";
import { getAllFoundItems } from "./getAllFoundItems.mjs";
import { reportFoundItem } from "./report/reportFoundItem.mjs";
import { getReturnedFoundItems } from "./ReturnedFoundItems.mjs";
import { getUnreturnedFoundItems } from "./unreturnedFoundItems.mjs";
import pool from "@/database/db.mjs";

//Get function
export const GET = async (req: NextRequest, res: NextResponse) => {
  console.log("GET FUNCTION CALLED");
  const connection = await pool.getConnection();

  try {
    const searchParams = req.nextUrl.searchParams;

    // console.log(searchParams)
    const id = searchParams.get("id");
    const is_returned = searchParams.get("is_returned");
    console.log("returned var:", is_returned);

    if (id) {
      const results = await getFoundItemsById(id);
      return Response.json(results);
    } else if (is_returned == "0") {
      const results = await getUnreturnedFoundItems();
      return Response.json(results);
    } else if (is_returned) {
      const results = await getReturnedFoundItems();
      return Response.json(results);
    } else {
      const results = await getAllFoundItems();
      return Response.json(results);
    }
    connection.release();
  } catch (err) {
    console.error("Error:", err);
    connection.release();
    return Response.json({ Fail: "failure" });
  }
};
//post function for reporting
interface YourRequestBody {
  location: string;
  user_id: string;
  is_returned: number;
  date_found: string;
  item_description: string;
  image_id: string;
  title: string;
}
export const POST = async (req: Request, res: NextApiResponse) => {
  console.log("POST FUNCTION CALLED");
  const connection = await pool.getConnection();

  try {
    const {
      location,
      user_id,
      is_returned,
      date_found,
      item_description,
      image_id,
      title,
    } = await req.json();

    console.log("location:" + location);
    reportFoundItem(
      location,
      user_id,
      is_returned,
      date_found,
      item_description,
      image_id,
      title
    );
    return Response.json({ Pass: "Passed" });
  } catch (err) {
    console.error("Error:", err);
    connection.release();
    return Response.json({ Fail: "failure" });
  }
};
