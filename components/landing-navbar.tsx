"use client"
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/nextjs";
import { montserrat } from "@/lib/fonts";
import { Button } from "./ui/button";

const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link
        href="/"
        className="flex items-center"
      >
        <div className="relative h-8 w-8 mr-4">
          <Image
            fill
            alt="Logo"
            src="/logo.png"
          />
        </div>
        <p className={cn("text-2xl font-bold text-white", montserrat.className)}>
          Genius
        </p>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            variant="outline"
            className="rounded-full"
          >
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  )
}

export default LandingNavbar;