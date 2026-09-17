import { ReactNode } from "react";

export default function SectionItemText({
  icon,
  children,
  bgIcon,
}: {
  icon: string;
  children: ReactNode;
  bgIcon: string;
}) {
  return (
    <>
      <span
        className={`flex h-8 w-8 items-center justify-center rounded ${bgIcon} font-black text-black`}
      >
        {icon}
      </span>

      <span>{children}</span>
    </>
  );
}