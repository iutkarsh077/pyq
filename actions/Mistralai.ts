"use server";

import { Mistral } from '@mistralai/mistralai';
import { revalidatePath } from 'next/cache';

const apiKey = process.env.MISTRAL_KEY;

const client = new Mistral({apiKey: apiKey});

async function MistralAi({query}: {query: string}){
    revalidatePath("/api/ImptQuestAiResponse");
    try {
        const chatResponse = await client.chat.complete({
            model: "mistral-large-latest",
            messages: [{role: 'user', content: query }],
        });
    
        if(!chatResponse || !chatResponse.choices) return;
        console.log("chat Response is ", chatResponse.choices[0].message)
        return {msg: "Got the Response successfully", data: chatResponse.choices[0].message, status: true}
    } catch (error) {
        return {msg: "failed to get the response.", status: false}
    }
}


export default MistralAi