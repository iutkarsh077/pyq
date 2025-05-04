"use server";

import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { revalidatePath } from "next/cache";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { NextRequest, NextResponse } from "next/server";

const s3client = new S3Client({
  region: process.env.AWS_REGION as string,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESSKEY as string,
  },
});
export async function POST(req: NextRequest) {
  revalidatePath("/");
  try {
    const { pdfName } = await req.json();
    const command = new GetObjectCommand({
      Bucket: process.env.BUCKET_NAME,
      Key: `${process.env.PDF_PATH}/${pdfName}`,
    });

    const url = await getSignedUrl(s3client, command, {expiresIn: 600});

    // console.log(url);
    return NextResponse.json(
        { msg: "Signed PDF File got successfully", url, status: true },
        { status: 200 }
      );
  } catch (error) {
    // console.log(error);
    return NextResponse.json(
        { msg: "something went wrong", status: false },
        { status: 501 }
      );
  }
}
