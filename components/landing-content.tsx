"use client"

import { testimonials } from "@/lib/data";
import { useAuth } from "@clerk/nextjs";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const LandingContent = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="px-10 pb-20">
      <p className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((t, i) => (
          <Card
            key={i}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{t.name}</p>
                  <p className="text-zinc-400 text-sm">{t.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {t.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default LandingContent;