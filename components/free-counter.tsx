"use client"
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon, Zap } from "lucide-react";
import { usePathname } from "next/navigation";
import { TypeFreeCounterProps } from "@/lib/types";
import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { MAX_FREE_COUNTS } from "@/constants";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";


const FreeCounter = ({ apiLimitCount = 0 } : TypeFreeCounterProps) => {
  const [ mounted, setMounted ] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="px-3">
      <Card className="bg-white/10 border-0">
        <CardContent className="py-6">
          <div className="text-center text-sm text-white mb-4 space-y-2">
            <p>
              無料枠 {apiLimitCount} / {MAX_FREE_COUNTS}
            </p>
            <Progress
              className="h-3"
              value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
            />
          </div>
          <Button className="w-full" variant="premium">
            アップグレード<Zap className="w-4 h-4 ml-2 fill-white"/>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default FreeCounter;