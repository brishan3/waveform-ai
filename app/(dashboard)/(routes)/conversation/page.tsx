"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as z from "zod";
import { MessageSquare } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChatCompletionRequestMessage } from "openai";
import { useProModal } from "@/hooks/useProModal";
import toast from "react-hot-toast";

import { formSchema } from "./constants";

import { Heading } from "@/components/heading";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Empty } from "@/components/empty";
import { Loader } from "@/components/loader";
import { UserAvatar } from "@/components/user-avatar";
import { BotAvatar } from "@/components/bot-avatar";
import { cn } from "@/lib/utils";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const ConversationPage = () => {
  const proModal = useProModal();
  const router = useRouter();

  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: ""
    }
  })

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: "user",
        content: values.prompt,
      }
      const newMessages = [...messages, userMessage];

      const response = await axios.post("/api/conversation", {
        messages: newMessages,
      })

      setMessages((current) => [...current, userMessage, response.data]);

      form.reset();

    } catch (error: any) {
      if(error?.response?.status === 403) {
        proModal.onOpen();
      } else if (error?.response?.status === 504) {
        toast.error("Response Timeout - apologies, Waveform is currently hosted on a Vercel Hobby plan")
      } else {
        toast.error("Something went wrong")
      }
    } finally {
      router.refresh();
    }
  }
  return (
    <div>
      <Heading
        title="Conversation"
        description="Powered by OpenAI's ChatGPT model 3.5"
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-4 px-4 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({field}) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="What is the circumference of the Earth?"
                        autoComplete="off"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button className="col-span-12 lg:col-span-2 w-full" disabled={isLoading}>
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4 pb-32">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader/>
            </div>
          )}
          {messages.length === 0 && !isLoading && (
            <Empty label="No conversation started"/>
          )}
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message) => (
              <div
                key={message.content}
                className={cn("p-8 w-full items-start gap-x-8 rounded-lg", message.role === "user" ? "bg-white border border-zinc-900/20" : "bg-muted border border-[#111827]/20")}
              >
                <div className="border-b-2 rounded-b border-[#111827]/20 w-fit mb-2">
                  {message.role === "user" ? <UserAvatar/> : <BotAvatar/> }
                </div>
                <p className="text-sm"><pre className={cn(inter.className, "whitespace-pre-wrap")}>{message.content}</pre></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConversationPage;