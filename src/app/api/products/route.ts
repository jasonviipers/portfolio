// Product routes api
import { authOptions } from "@/server/auth";
import { NextResponse } from "next/server";

export async function GET(_request: Request) {
  const products = await authOptions.products.findMany();
  return NextResponse.json(products);
}