export default function SidebarItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`flex w-full items-center gap-5 rounded-md px-1 py-3 text-left transition ${active
        ? "text-brand-default"
        : "text-typo-200 hover:text-brand-default"
        }`}
    >
      {icon}

      <span className="font-medium">
        {label}
      </span>
    </button>
  );
}