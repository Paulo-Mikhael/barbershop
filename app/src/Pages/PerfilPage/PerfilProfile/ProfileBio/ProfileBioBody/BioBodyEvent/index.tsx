import { format } from "date-fns";
import { LucideIcon } from "lucide-react";

export default function BioBodyEvent({
  Icon,
  date,
}: {
  Icon: LucideIcon;
  date: Date;
}) {
  return (
    <div className="mt-8 flex items-center gap-4 text-sm">
      <Icon size={22} className="text-brand-default" />

      <span>{format(date, "dd/MM/yyyy")}</span>
    </div>
  );
}
