/*
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
*/

import { GoogleGenAI } from "@google/genai";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const { question, selectedSubject } = await req.json();
    let query = question;
    query += ",";
    query += ` subject ${selectedSubject} \n,`;

    const getQuestions = await prisma.questions.findMany({
      where: {
        subject: selectedSubject,
      },
      select: {
        questions: true,
      },
    });

    for (let i = 0; i < getQuestions.length; i++) {
      query += " ";
      query += getQuestions[i].questions;
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: query,
      config: {
        systemInstruction: `You are an AI Exam question paper maker. List all teh importnat questions according to the subject and the related question given in teh query.`,
      },
    });

    // console.log(response.text);

    return NextResponse.json(
      {
        text: response.text,
        status: true,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return Response.json(
      { error: "Failed to process request", status: false },
      { status: 500 }
    );
  }
}
