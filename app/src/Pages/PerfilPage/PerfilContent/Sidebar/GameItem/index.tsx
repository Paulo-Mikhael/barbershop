export default function GameItem({
  icon,
  label,
  color,
}: {
  icon: string;
  label: string;
  color: string;
}) {
  return (
    <button className="cursor-pointer flex w-full items-center gap-4 rounded-md px-1 py-2 text-left text-sm dark:text-typo-200 transition hover:bg-typo-300 dark:hover:bg-typo-700">
      <span
        className={`flex h-8 w-8 items-center justify-center rounded ${color} font-black text-black`}
      >
        {icon}
      </span>

      <span>{label}</span>
    </button>
  );
}