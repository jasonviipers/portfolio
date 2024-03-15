import { auth } from "@/server/auth";
import { NextResponse } from "next/server";

export async function GET(_request: Request) {
  const session = await auth();

  return NextResponse.json({
    authenticated: !!session,
    session,
  });
}