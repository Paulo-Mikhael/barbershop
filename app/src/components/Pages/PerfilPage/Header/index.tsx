import { Search, Bell } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-l border-typo-700 bg-background px-7">
      {/* Logo */}
      <div className="text-[29px] font-black tracking-tight cursor-pointer">
        <Image src="/logo.png" alt="logo" width={110} height={31} />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-7">
        <button className="cursor-pointer transition hover:text-brand-default">
          <Search size={25} />
        </button>

        <button className="cursor-pointer transition hover:text-brand-default">
          <Bell size={23} />
        </button>

        <button className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-brand-default p-0.5 cursor-pointer">
          <div className="h-full w-full overflow-hidden rounded-full bg-typo-700">
            <div className="h-full w-full bg-linear-to-br from-typo-400 to-typo-800" />
          </div>
        </button>
      </div>
    </header>
  );
}