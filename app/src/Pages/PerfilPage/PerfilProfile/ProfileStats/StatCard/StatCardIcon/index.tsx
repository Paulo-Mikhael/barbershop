import { LucideIcon } from "lucide-react";

export default function StatCardIcon({ Icon, iconClass }: { Icon: LucideIcon, iconClass: string }) {
  return (
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconClass} text-xl font-black`}
    >
      <Icon className="text-typo-100" />
    </div>
  );
}