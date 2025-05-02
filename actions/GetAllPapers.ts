"use server";

import { revalidatePath } from "next/cache";
import prisma from "../prisma";

export async function GetAllPapers(){
    revalidatePath("/");
    try {
        const GetAllPapers = await prisma.paperSchema.findMany();
        // console.log(GetAllPapers);

        if(!GetAllPapers){
            return {msg: "Failed to get the papers", status: false}
        }

        return {msg: "Got all the Papers", data: GetAllPapers, status: true}
    } catch (error) {
        return {msg: "Something went wrong", status: false}
    }
}