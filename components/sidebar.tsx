"use client"
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { TypeApiLimitCountProps } from "@/lib/types";
import FreeCounter from "./free-counter";
import { routes } from "@/lib/data";
import { montserrat } from "@/lib/fonts";

const Sidebar = ({ apiLimitCount = 0, isPro = false, } : TypeApiLimitCountProps) => {
  const pathname = usePathname();

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
                className={cn(
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                  pathname === r.href ? "text-white bg-white/10" : "text-zinc-400"
                )}
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
      <FreeCounter
        isPro={isPro}
        apiLimitCount={apiLimitCount}
      />
    </div>
  )
}

export default Sidebar;