"use client"
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const DashboardPage = () => {
  const router = useRouter();
  const tools = [
    {
      label: "会話する",
      icon: MessageSquare,
      href: "/conversation",
      color: "text-violet-500",
      bgColor: "bg-violet-500/10"
    },
    {
      label: "画像生成",
      icon: ImageIcon,
      href: "/image",
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
    },
    {
      label: "ビデオ生成",
      icon: VideoIcon,
      href: "/video",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      label: "音楽生成",
      icon: Music,
      href: "/music",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      label: "コード生成",
      icon: Code,
      href: "/code",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
  ];
  return (
    <>
      <div className="mb-8 space-y-4">
        <p className="text-2xl md:text-4xl font-bold text-center">
          AI を探す
        </p>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          最も賢いAIとチャットAIの力を体験してください
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((t, i) => {
          return(
            <Card
              onClick={() => router.push(t.href)}
              key={i}
              className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
            >
              <div className="flex items-center gap-x-4">
                <div className={cn("p-2 w-fit rounded-md", t.bgColor)}>
                  <t.icon className={cn("w-8 h-8", t.color)} />
                </div>
                <p className="font-semibold">
                  {t.label}
                </p>
              </div>
              <ArrowRight className="w-5 h-5" />
            </Card>
          )
        })}
      </div>
    </>
  )
}

export default DashboardPage;