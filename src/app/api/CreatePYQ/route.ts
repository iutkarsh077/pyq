import { NextRequest, NextResponse } from "next/server";
import { PdfFormType } from "@/types/ExamPdfForm";
import { revalidatePath } from "next/cache";
import prisma from "../../../../prisma";

export async function POST(request: NextRequest) {
  try {
    const info: PdfFormType = await request.json();
    
    const res = await prisma.paperSchema.create({
      data: {
        ...info,
      },
    });
    
    revalidatePath("/uploadpapers");
    
    if (!res) {
      return NextResponse.json(
        { msg: "Failed to save PYQ", status: false },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { msg: "PYQ submitted successfully", status: true },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating PYQ:", error);
    
    return NextResponse.json(
      { msg: "Failed to save PYQ", status: false },
      { status: 500 }
    );
  }
}