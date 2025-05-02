"use server";
import { PdfFormType } from "@/types/ExamPdfForm";
import { revalidatePath } from "next/cache";
import prisma from "../prisma";

export async function CreatePYQ(info: PdfFormType) {
  revalidatePath("/uploadpapers");
  try {
    // console.log(info);
    const res = await prisma.paperSchema.create({
      data: {
        ...info,
      },
    });

    if (!res) {
      return { msg: "Failed to save PYQ", status: false };
    }
    return { msg: "PYQ submitted successfully", status: true };
  } catch (error) {
    // console.log(error);
    return { msg: "Failed to save PYQ", status: false };
  }
}
