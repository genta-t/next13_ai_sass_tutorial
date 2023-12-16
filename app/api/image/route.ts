import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const POST = async (req: Request) => {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt, amount = 1, resolution = "512x512" } = body;

    if (!userId) {
      return new NextResponse("認証されていないよ", { status: 401 });
    };
    if (!configuration.apiKey) {
      return new NextResponse("OpenAIのAPIキーが設定されていないよ", { status: 500 });
    };
    if (!prompt) {
      return new NextResponse("Promptは必須ですよ", { status: 400 });
    };
    if (!amount) {
      return new NextResponse("Amountは必須ですよ", { status: 400 });
    };
    if (!resolution) {
      return new NextResponse("Resolutionは必須ですよ", { status: 400 });
    };

    const freeTrial = await checkApiLimit();
    if (!freeTrial) {
      return new NextResponse("無料回数を超えた", { status: 403 });
    }

    const response = await openai.createImage({
      prompt,
      n: parseInt(amount, 10),
      size: resolution,
    });

    await increaseApiLimit();

    return NextResponse.json(response.data.data);
  } catch (error) {
    console.log("[IMAGE_ERROR]", error?.toString());
    return new NextResponse("内部エラー", { status: 500 });
  }
}