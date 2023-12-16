import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Replicate from "replicate";


const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
});

export const POST = async (req: Request) => {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt } = body;

    if (!userId) {
      return new NextResponse("認証されていないよ", { status: 401 });
    };
    if (!prompt) {
      return new NextResponse("promptは必須ですよ", { status: 400 });
    };

    const response = await replicate.run(
      "riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05",
      {
        input: {
          prompt_a: prompt
        }
      }
    );

    return NextResponse.json(response);
  } catch (error) {
    console.log("[MUSIC_ERROR]", error?.toString());
    return new NextResponse("内部エラー", { status: 500 });
  }
}