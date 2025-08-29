import { NextResponse } from "next/server";
import { createOjsClient } from "@/lib/ojs";

export async function GET() {
  try {
    const ojs = createOjsClient();
    const issues = await ojs.issues.list();

    return NextResponse.json(issues);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
