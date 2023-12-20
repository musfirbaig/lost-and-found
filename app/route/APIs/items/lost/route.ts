import { NextRequest, NextResponse } from "next/server";
import pool from "@/database/db.mjs";
import { getLostItemsById } from "./getLostItemsById.mjs";
import { getAllLostItems } from "./getAllLostItems.mjs";
import { reportLostItem } from "./report/reportLostItem.mjs";
import { getUnreturnedLostItems } from "./unreturnedLostItems.mjs";
import { getReturnedLostItems } from "./returnedLostItems.mjs";
//Get function
export const GET = async (req: NextRequest, res: NextResponse) => {
  console.log("GET FUNCTION CALLED");
  const connection = await pool.getConnection();

  try {
    const searchParams = req.nextUrl.searchParams;

    // console.log(searchParams)
    const id = searchParams.get("id");
    const is_returned = searchParams.get("is_returned");
    if (id) {
      const results = await getLostItemsById(id);
      return Response.json(results);
    } else if (is_returned == "0") {
      const results = await getUnreturnedLostItems();
      return Response.json(results);
    } else if (is_returned) {
      const results = await getReturnedLostItems();
      return Response.json(results);
    } else {
      const results = await getAllLostItems();
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
  date_lost: string;
  item_description: string;
  image_id: string;
  title: string;
}
export const POST = async (req: Request) => {
  console.log("POST FUNCTION CALLED");
  const connection = await pool.getConnection();

  try {
    const {
      location,
      user_id,
      is_returned,
      date_lost,
      item_description,
      image_id,
      title,
    } = await req.json();

    console.log("location:" + location);
    reportLostItem(
      location,
      user_id,
      is_returned,
      date_lost,
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
