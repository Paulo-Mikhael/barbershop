import { LucideIcon } from "lucide-react";

export default function StatCard({
  value,
  label,
  Icon,
  iconClass,
}: {
  value: string;
  label: string;
  Icon: LucideIcon;
  iconClass: string;
}) {
  return (
    <div className="flex h-21.5 items-center gap-5 rounded-lg border border-typo-700 bg-box px-7 cursor-pointer">
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconClass} text-xl font-black`}
      >
        <Icon className="text-typo-100" />
      </div>
      <div>
        <strong className="block text-xl uppercase">
          {value}
        </strong>

        <span className="text-[11px] font-semibold dark:text-typo-300 uppercase">
          {label}
        </span>
      </div>
    </div>
  );
}