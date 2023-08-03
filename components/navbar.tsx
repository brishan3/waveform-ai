import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "@/components/mobile-sidebar";

interface NavbarProps {
  apiLimitCount: number;
  isPro: boolean;
}

const Navbar = ({ apiLimitCount = 0, isPro = false }: NavbarProps) => {
  return (
    <div className="flex items-center p-4 h-20">
      <MobileSidebar apiLimitCount={apiLimitCount} isPro={isPro}/>
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/"/>
      </div>
    </div>
  )
}

export default Navbar;