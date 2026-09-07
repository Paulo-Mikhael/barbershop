export default function GameRow({
  icon,
  label,
  color,
}: {
  icon: string;
  label: string;
  color: string;
}) {
  return (
    <div className="flex h-[63px] items-center rounded-lg border border-typo-700 bg-box px-5">
      <span
        className={`flex h-9 w-9 items-center justify-center rounded ${color} font-black text-black`}
      >
        {icon}
      </span>

      <span className="ml-5 flex-1 text-sm">
        {label}
      </span>

      <button className="rounded-md bg-blue-600 px-6 py-2 text-xs font-semibold transition hover:bg-blue-500">
        View
      </button>
    </div>
  );
}