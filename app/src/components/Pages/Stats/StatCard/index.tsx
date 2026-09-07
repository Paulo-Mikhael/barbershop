export default function StatCard({
  value,
  label,
  icon,
  iconClass,
}: {
  value: string;
  label: string;
  icon: string;
  iconClass: string;
}) {
  return (
    <div className="flex h-[86px] items-center gap-5 rounded-lg border border-typo-700 bg-box px-7">
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconClass} text-xl font-black`}
      >
        {icon}
      </div>

      <div>
        <strong className="block text-xl">
          {value}
        </strong>

        <span className="text-[11px] font-semibold text-typo-300">
          {label}
        </span>
      </div>
    </div>
  );
}