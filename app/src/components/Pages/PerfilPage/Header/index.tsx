import { Search, Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-typo-700 bg-typo-800 px-7">
      {/* Logo */}
      <div className="text-[29px] font-black tracking-tight">
        <span className="text-brand-default">Barber</span>
        <span className="text-white">shop</span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-7">
        <button className="text-white transition hover:text-brand-default">
          <Search size={25} />
        </button>

        <button className="text-white transition hover:text-brand-default">
          <Bell size={23} />
        </button>

        <button className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-brand-default p-[2px]">
          <div className="h-full w-full overflow-hidden rounded-full bg-typo-700">
            <div className="h-full w-full bg-gradient-to-br from-typo-400 to-typo-800" />
          </div>
        </button>
      </div>
    </header>
  );
}