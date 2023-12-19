import { NextRequest, NextResponse } from "next/server";
import { getUserById } from "@/database/databaseFunctions.mjs";
import { registerUser } from "./register/registerUser.mjs";
import {deleteUserById } from "./admin/deleteUserById.mjs";
import pool from "@/database/db.mjs";

export const GET = async (req: NextRequest, res: NextResponse) => {
  const connection = await pool.getConnection();

  try {
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get("id");

    const results = await getUserById(id);
    // console.log("results:"+results);
    connection.release();
    return Response.json(results);
  } catch (err) {
    console.error("Error:", err);
    connection.release();

    return Response.json({ Fail: "failure" });
  }
};

//post function for reporting
interface YourRequestBody {
  user_id: string;
  user_name: string;
  email: string;
  passwords: string;
  contact_no: string;
  user_role: string;
  f_name: string;
  l_name: string;
}
export const POST = async (req: Request) => {
  console.log("POST FUNCTION CALLED");
  const connection = await pool.getConnection();

  try {
    const {
      user_id,
      user_name,
      email,
      passwords,
      contact_no,
      user_role,
      f_name,
      l_name,
    } = await req.json();

    registerUser(
      user_id,
      user_name,
      email,
      passwords,
      contact_no,
      user_role,
      f_name,
      l_name
    );
    return Response.json({ Pass: "Passed" });
  } catch (err) {
    console.error("Error:", err);
    connection.release();
    return Response.json({ Fail: "failure" });
  }
};


//delete API
interface YourRequestBody {
  user_id: string;
}
export const DELETE= async (req: NextRequest) => {
  console.log("DELETE FUNCTION CALLED");
  const connection = await pool.getConnection();

  try {
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get("id");

    deleteUserById(id);
    return Response.json({ Pass: "Passed" });
  } catch (err) {
    console.error("Error:", err);
    connection.release();
    return Response.json({ Fail: "failure" });
  }
};
