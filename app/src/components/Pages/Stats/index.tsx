import { CalendarClock, Pencil } from "lucide-react";
import StatCard from "./StatCard";

export default function Stats() {
  return (
    <div className="mt-6 grid grid-cols-4 gap-5">
      <StatCard
        value="3"
        label="Agendamentos"
        Icon={Pencil}
        iconClass="bg-info"
      />

      <StatCard
        value="01/08/2026"
        label="Próximo Atendimento"
        Icon={CalendarClock}
        iconClass="bg-brand-default"
      />
    </div>
  );
}