import { NextResponse } from "next/server";
import prisma from "../../../../prisma";
import MistralAi from "../../../../actions/Mistralai";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const { question, selectedSubject } = await req.json();
    let query = question;
    query += ",";
    query += ` subject ${selectedSubject} \n,`

    const getQuestions = await prisma.questions.findMany({
      where: {
       subject: selectedSubject
      },
      select: {
        questions: true
      }
    });

    for(let i = 0; i < getQuestions.length; i++){
        query += " ";
        query += getQuestions[i].questions;
    }


    // console.log(query);
    // console.log(getQuestions)

    const res = await MistralAi({query});

    if(res && res.status === false){
      return NextResponse.json(
        { msg: "Failed to get response", status: false },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { msg: "Got the response", status: true, data: res?.data },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { msg: "Failed to get response", status: false },
      { status: 500 }
    );
  }
}
