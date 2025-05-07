import { Mistral } from '@mistralai/mistralai';
import { NextResponse } from 'next/server';
export const dynamic = "force-dynamic"

const apiKey = process.env.MISTRAL_KEY;

const client = new Mistral({apiKey: apiKey});

export async function POST(){
    const chatResponse = await client.chat.complete({
        model: "mistral-large-latest",
        messages: [{role: 'user', content: 'Generate a image of elon musk'}]
    });

    if(!chatResponse || !chatResponse.choices) return;
    console.log("chat Response is ", chatResponse.choices[0].message)
    return NextResponse.json({msg: "All set", data: chatResponse}, {status: 200})
}
