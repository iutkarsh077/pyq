"use server";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  const {searchWord} = await req.json();
    revalidatePath("/");
  try {
    const results = await prisma.paperSchema.findMany({
      where: {
        OR: [
          { pdfName: { contains: searchWord, mode: "insensitive" } },
          { university: { contains: searchWord, mode: "insensitive" } },
          { subject: { contains: searchWord, mode: "insensitive" } },
          { subjectCode: { contains: searchWord, mode: "insensitive" } },
          { category: { contains: searchWord, mode: "insensitive" } },
          { department: { contains: searchWord, mode: "insensitive" } },
        ],
      },
    });

    return NextResponse.json({ msg: "Got the papers", data: results, status: true });
  } catch (error) {
    return NextResponse.json({ msg: "Failed to search Paper", status: false }, { status: 500 });
  }
}
