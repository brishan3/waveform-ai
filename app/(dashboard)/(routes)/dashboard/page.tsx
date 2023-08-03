"use client";

import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  MessageSquare,
  ImageIcon,
  Code,
  ArrowRight
} from "lucide-react";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10"
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
    bgColor: "bg-pink-700/10"
  },

  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-green-700",
    bgColor: "bg-green-700/10"
  },
]

const DashboardPage = () => {

  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl fon-bold text-center">
          Explore the power of AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Interface with the latest generative AI models for any task.
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map(({ label, icon: Icon, href, color, bgColor }) => (
          <Card
            key={href}
            onClick={() => router.push(href)}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className={cn("p-2 w-fit rounded-md", bgColor)}>
                <Icon className={cn("w-8 h-8", color)}/>
              </div>
              <div className="font-semibold">
                {label}
              </div>
              <ArrowRight className="w-5 h-5"/>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
