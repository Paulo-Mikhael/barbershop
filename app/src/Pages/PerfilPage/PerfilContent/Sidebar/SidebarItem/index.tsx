import clsx from "clsx";

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
      className={
        clsx("flex w-full items-center gap-5 rounded-md px-1 py-3 text-left transition", {
          "text-brand-default cursor-default": active,
          "hover:text-brand-default cursor-pointer": !active
        })}
    >
      {icon}

      <span className="font-medium">
        {label}
      </span>
    </button>
  );
}