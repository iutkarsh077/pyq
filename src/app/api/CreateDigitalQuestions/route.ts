import { NextResponse } from "next/server";
import prisma from "../../../../prisma";

export const dynamic = "force-dynamic";
export async function POST(req: Request){
    try{
        const { questions, subject } = await req.json();

        const saveQuestions = await prisma.questions.create({
            data: {
                questions,
                subject: subject.toLowerCase()
            }
        })

        if(!saveQuestions){
            return NextResponse.json({msg: "Failed to save questions", status: false}, {status: 500});
        }

        return NextResponse.json({msg: "Successfully saved quetsions", status: true}, {status: 201});
    }
    catch(error){
        // console.log(error);
        return NextResponse.json({msg: "Failed tp save questions", status: false}, {status: 500})
    }
}