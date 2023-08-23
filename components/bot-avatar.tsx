
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export const BotAvatar = () => {
  return (
    <Avatar className="h-10 w-10 bg-[#111827] mb-2">
      <AvatarImage className="p-1" src="/logo.webp"/>
    </Avatar>
  );
}