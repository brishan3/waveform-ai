"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";
import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold text-center py-16 space-y-5 min-h-[80vh] flex flex-col justify-center items-center">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold px-4 sm:px-6">
        <h1>Powered by the best AI models for</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-br from-[#dd876c] to-blue-700 pl-3">
          <TypewriterComponent
            options={{
              strings: [
                "Idea Generation.",
                "Photo Generation.",
                "Code Generation."
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Build 10x faster when collaborating with AI
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="cta" className="md:text-lg p-4 md:px-6 rounded-full font-semibold">
            Start Generating for Free
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
          No credit card required.
      </div>
    </div>
  )
}