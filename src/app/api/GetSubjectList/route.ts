import { NextResponse } from "next/server";
import prisma from "../../../../prisma";

export async function GET(){
    try {
        const findSubjects = await prisma.questions.findMany({
            distinct:["subject"],
            select: {
                subject: true
            }
        })

        console.log(findSubjects);

        return NextResponse.json({msg: "Successfully got the subjects", data: findSubjects, status: true}, {status: 201})
    } catch (error) {
        return NextResponse.json({msg: "Error in getting subjects", status: false}, {status: 501})
    }
}