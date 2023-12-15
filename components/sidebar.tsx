import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from "lucide-react";

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"]
});

const routes = [
  {
    label: "ダッシュボード",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "会話する",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "画像生成",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-500",
  },
  {
    label: "ビデオ生成",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-500",
  },
  {
    label: "音楽生成",
    icon: Music,
    href: "/music",
    color: "text-green-500",
  },
  {
    label: "コード生成",
    icon: Code,
    href: "/code",
    color: "text-yellow-500",
  },
  {
    label: "設定",
    icon: Settings,
    href: "/settings",
    color: "text-gray-300",
  },
];

const Sidebar = () => {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link
          href="dashboard"
          className="flex items-center pl-3 mb-14"
        >
          <div className="relative w-8 h-8 mr-4">
            <Image
              fill
              alt="Logo"
              src="/logo.png"
            />
          </div>
          <p className={cn("text-2xl font-bold", montserrat.className)}>
            Genius
          </p>
        </Link>
        <div className="space-y-1">
          {routes.map((r, i) => {
            return(
              <Link
                href={r.href}
                key={i}
                className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition"
              >
                <div className="flex items-center flex-1">
                  <r.icon className={cn("h-5 w-5 mr-3", r.color)} />
                  {r.label}
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Sidebar;