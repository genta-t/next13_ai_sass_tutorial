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
      "anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351",
      {
        input: {
          prompt
        }
      }
    );

    return NextResponse.json(response);
  } catch (error) {
    console.log("[VIDEO_ERROR]", error?.toString());
    return new NextResponse("内部エラー", { status: 500 });
  }
}