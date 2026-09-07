import { Home, Scissors, CalendarDays, MessageSquare, CalendarClock } from "lucide-react";
import GameItem from "./GameItem";
import SidebarSection from "./SidebarSection";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <aside className="w-78.75 shrink-0 border-l border-r border-typo-700 bg-box dark:bg-[#070b0d] px-8 py-7">
      <nav className="space-y-2">
        <SidebarItem
          icon={<Home size={23} />}
          label="Home"
          active
        />

        <SidebarItem
          icon={<Scissors size={23} />}
          label="Cabeleireiros"
        />

        <SidebarItem
          icon={<CalendarClock size={23} />}
          label="Agendamentos"
        />

        <SidebarItem
          icon={<CalendarDays size={23} />}
          label="Calendário"
        />

        <SidebarItem
          icon={<MessageSquare size={23} />}
          label="Ajuda"
        />
      </nav>

      <SidebarSection title="Vistos Recentemente">
        <GameItem
          icon="L"
          label="League of Legends"
          color="bg-yellow-400"
        />
      </SidebarSection>

      <SidebarSection title="Cabeleireiros Favoritados">
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
    </aside>
  );
}