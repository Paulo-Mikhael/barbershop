import { Home, Scissors, CalendarDays, MessageSquare, CalendarClock } from "lucide-react";
import AsideNavItem from "./PerfilAsideNav/AsideNavItem";
import PerfilAsideSection from "./PerfilAsideSection";
import PerfilAsideNav from "./PerfilAsideNav";
import { ReactNode } from "react";

function PerfilAside({ children }: { children: ReactNode }) {
  return (
    <aside className="w-78.75 shrink-0 border-l border-r border-typo-700 bg-box dark:bg-[#070b0d] px-8 py-7">
      {children}
    </aside>
  );
}

PerfilAside.Nav = PerfilAsideNav;
PerfilAside.Section = PerfilAsideSection;

export default PerfilAside;