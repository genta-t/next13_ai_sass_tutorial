"use client"
import Heading from "@/components/heading";
import { Code } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "./constats";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ChatCompletionRequestMessage } from "openai";
import axios from "axios";
import Empty from "@/components/empty";
import Loader from "@/components/loader";
import { cn } from "@/lib/utils";
import UseAvatar from "@/components/user-avatar";
import BotAvatar from "@/components/bot-avatar";
import ReactMarkdown from "react-markdown";
import { useProModal } from "@/hooks/use-pro-modal";

// OpenAI APIとの連携ができていない...
// 有料にしないといけないのかどうかもわからない...
const CodePage = () => {
  const proModal = useProModal();
  const router = useRouter();
  const [ messages, setMessages ] = useState<ChatCompletionRequestMessage[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: ""
    }
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: "user",
        content: values.prompt
      };
      const newMessages = [ ...messages, userMessage ];

      const response = await axios.post("/api/code", {
        messages: newMessages,
      });
      
      setMessages((current) => [ ...current, userMessage, response.data]);
      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModal.onOpen();
      }
    } finally {
      router.refresh();
    }
  };

  return (
    <>
      <Heading
        title="コード生成"
        description="試しにコードを書いてください"
        icon={Code}
        iconColor="text-yellow-500"
        bgColor="bg-yellow-500/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="何でも聞きな"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 lg:col-span-2"
                disabled={isLoading}
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}
          {messages.length === 0 && !isLoading && (
            <Empty label="会話は始まっていません。"/>
          )}
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((m ,i) => {
              return(
                <div
                  key={i}
                  className={cn(
                    "p-8 w-full flex items-start gap-x-8 rounded-lg",
                    m.role === "user"
                    ? "bg-white border border-black/10"
                    : "bg-muted"
                  )}
                >
                  {m.role === "user" ? <UseAvatar /> : <BotAvatar />}
                  <ReactMarkdown
                    className="text-sm overflow-hidden leading-7"
                    components={{
                      pre: ({ node, ...props }) => (
                        <div className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg">
                          <pre {...props}/>
                        </div>
                      ),
                      code: ({ node, ...props }) => (
                        <code className="bg-black/10 p-1 rounded-lg" {...props} />
                      ),
                    }}
                  >
                    {m.content || ""}
                  </ReactMarkdown>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default CodePage;