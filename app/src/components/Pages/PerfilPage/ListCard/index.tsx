export default function ListCard({
  icon,
  title,
  description,
  color,
}: {
  icon: string;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <div className="flex min-h-16 items-center gap-4 rounded-lg border border-typo-700 bg-box px-5">
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded ${color} font-bold text-black`}
      >
        {icon}
      </span>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-medium">
          {title}
        </h3>

        <p className="mt-1 truncate text-[10px] dark:text-typo-300">
          {description}
        </p>
      </div>

      <button className="shrink-0 text-typo-100 rounded-md bg-blue-600 px-6 py-2 text-xs font-semibold transition hover:bg-blue-500">
        View
      </button>
    </div>
  );
}