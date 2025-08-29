"use server";

import { createOjsClient } from "@/lib/ojs";
import { NextResponse } from "next/server";

export const issue = async () => {
  try {
    return (await createOjsClient().issues.list()) || [];
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify(error.message + "Issues is not found"),
      { status: 400 },
    );
  }
};

export async function GET() {
  try {
    const ojs = createOjsClient();
    const submissions = await ojs.submissions.list();

    return NextResponse.json(submissions);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
