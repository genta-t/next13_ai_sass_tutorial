import { Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";

export const tools = [
  {
    label: "Chat",
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