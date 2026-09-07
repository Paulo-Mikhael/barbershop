import { Home, Scissors, CalendarDays, MessageSquare } from "lucide-react";
import GameItem from "./GameItem";
import SidebarSection from "./SidebarSection";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <aside className="w-[315px] shrink-0 border-r border-typo-700 bg-[#070b0d] px-8 py-7">
      <nav className="space-y-2">
        <SidebarItem
          icon={<Home size={23} />}
          label="Home"
          active
        />

        <SidebarItem
          icon={<Scissors size={23} />}
          label="Barbers"
        />

        <SidebarItem
          icon={<CalendarDays size={23} />}
          label="Appointments"
        />

        <SidebarItem
          icon={<CalendarDays size={23} />}
          label="Calendar"
        />

        <SidebarItem
          icon={<MessageSquare size={23} />}
          label="Forum"
        />
      </nav>

      <SidebarSection title="MY GAMES">
        <GameItem
          icon="L"
          label="League of Legends"
          color="bg-yellow-400"
        />

        <GameItem
          icon="K"
          label="CS2 Global Offensive"
          color="bg-orange-500"
        />

        <GameItem
          icon="F"
          label="Fortnite"
          color="bg-purple-500"
        />

        <GameItem
          icon="R"
          label="Rocket League"
          color="bg-cyan-500"
        />
      </SidebarSection>

      <SidebarSection title="MY TOURNAMENTS">
        <GameItem
          icon="D"
          label="Professional FFA Series"
          color="bg-blue-400"
        />

        <GameItem
          icon="K"
          label="Shooting in Desert"
          color="bg-orange-500"
        />

        <GameItem
          icon="C"
          label="Who can survive?"
          color="bg-purple-500"
        />
      </SidebarSection>
    </aside>
  );
}