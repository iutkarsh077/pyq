"use server";

import prisma from "../prisma";

export async function SearchPaperWords(searchTerm: string){
    try {
        const results = await prisma.paperSchema.findMany({
            where: {
                OR: [
                  { pdfName: { contains: searchTerm, mode: 'insensitive' } },
                  { university: { contains: searchTerm, mode: 'insensitive' } },
                  { subject: { contains: searchTerm, mode: 'insensitive' } },
                  { subjectCode: { contains: searchTerm, mode: 'insensitive' } },
                  { category: { contains: searchTerm, mode: 'insensitive' } },
                  { department: { contains: searchTerm, mode: 'insensitive' } }
                ]
              }
          });

          return {msg: "Got the papers", data: results, status: true}
    } catch (error) {
        return {msg: "Failed to search Paper", status: false}
    }
}