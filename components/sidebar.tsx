"use client";


import { cn } from '@/lib/utils';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { LayoutDashboard, MessageSquare } from "lucide-react";

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"]
})

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500"
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500"
  },
]

const Sidebar = () => {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className='px-3 py-2 flex-1'>
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-14 h-12 mr-4">
            <Image
              fill
              alt="Logo"
              src="/logo.webp"
              className='object-contain'
            />
          </div>
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>Wave<span className='text-blue-200'>form</span></h1>
        </Link>
        <div className='space-y-1'>
          {routes.map(({label, icon: Icon, href, color}) => (
            <Link href={href} key={href} className='text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition'>
              <div className='flex items-center flex-1'>
                <Icon className={cn("h-5 w-5 mr-3", color)}/>
                {label}
              </div>
            </Link>
          ))

          }
        </div>
      </div>
    </div>
  )
}

export default Sidebar