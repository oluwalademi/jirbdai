import { NextResponse } from "next/server";
import { createOjsClient } from "@/lib/ojs";

export async function GET() {
  try {
    const ojs = createOjsClient();
    const submissions = await ojs.submissions.list();

    return NextResponse.json(submissions);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
