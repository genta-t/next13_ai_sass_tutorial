import { z } from "zod";

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "音楽は必須です"
  }), 
});