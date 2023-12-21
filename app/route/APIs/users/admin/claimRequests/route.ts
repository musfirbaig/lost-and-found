import pool from "@/database/db.mjs";
import { NextRequest, NextResponse } from "next/server";
import { getClaimRequestById } from "./getClaimRequestById.mjs";
import { updateIsRejected } from "./updateIsRejected.mjs";
import { updateIsResolved } from "./updateIsResolved.mjs";
import { getAllClaimRequests } from "./getAllClaimRequests.mjs";

export const GET = async (req: NextRequest, res: NextResponse) => {
  const connection = await pool.getConnection();
  try {
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get("id");

    if (id) {
      const results = await getClaimRequestById(id);
      connection.release();
      return Response.json(results);
    } else {
      const results = await getAllClaimRequests();
      connection.release();
      return Response.json(results);
    }
  } catch (err) {
    console.error("Error:", err);
    connection.release();

    return Response.json({ Fail: "failure" });
  }
};

export const POST = async (req: NextRequest, res: NextResponse) => {
  const connection = await pool.getConnection();
  try {
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get("id");
    const is_rejected = searchParams.get("is_rejected");
    const is_resolved = searchParams.get("is_resolved");
    if (is_rejected) {
      const results = await updateIsRejected(id, is_rejected);
      connection.release();
      return NextResponse.json(results);
    } else if (is_resolved) {
      const results = await updateIsResolved(id, is_resolved);
      connection.release();
      return NextResponse.json(results);
    }
  } catch (err) {
    console.error("Error:", err);
    connection.release();

    return Response.json({ Fail: "failure" });
  }
};
