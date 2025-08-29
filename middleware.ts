import { NextResponse, NextRequest } from "next/server";
import { authMiddleware } from "@/middlewares/api/authMiddleware";

export const config = {
  matcher: "/api/:path*",
};

export default function middleware(request: NextRequest) {
  const authResult = authMiddleware(request);

  if (!authResult?.isValid) {
    return NextResponse.json(
      { message: "No such authentication" },
      { status: 401 },
    );
  }

  return NextResponse.next();
}
