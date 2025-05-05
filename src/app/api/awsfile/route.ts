"use server";

import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import axios from "axios";

const s3client = new S3Client({
  region: process.env.AWS_REGION as string,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESSKEY as string,
  },
});

export async function POST(req: NextRequest) {
  revalidatePath("/uploadpapers");
  try {
    const { name, type } = await req.json();
    if (!name || !type) {
      return NextResponse.json(
        { msg: "something went wrong", status: false },
        { status: 501 }
      );
    }

    const command = new PutObjectCommand({
      Bucket: process.env.BUCKET_NAME,
      Key: `${process.env.PDF_PATH}/${name}`,
      ContentType: type,
    });

    const url = await getSignedUrl(s3client, command, {expiresIn: 60});

   

    return NextResponse.json(
      { msg: "Data got successfully", data: url, status: true },
      { status: 200 }
    );
  } catch (error: unknown) {
    // console.log("something went wrong", error);
    return NextResponse.json(
      { msg: "something went wrong", status: false },
      { status: 501 }
    );
  }
}
