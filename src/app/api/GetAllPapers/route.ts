"use server";
import { NextResponse } from "next/server";
import prisma from "../../../../prisma";

export async function GET() {
  try {
    const papers = await prisma.paperSchema.findMany();

    if (!papers || papers.length === 0) {
      return NextResponse.json(
        { msg: "Failed to get the papers", status: false },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { msg: "Got all the papers", data: papers, status: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching papers:", error);
    return NextResponse.json(
      { msg: "Something went wrong", status: false },
      { status: 500 }
    );
  }
}
