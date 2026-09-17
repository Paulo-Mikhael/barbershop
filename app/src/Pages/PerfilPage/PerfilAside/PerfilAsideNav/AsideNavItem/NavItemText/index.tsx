import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export default function NavItemText({ Icon, children }: { Icon?: LucideIcon, children: ReactNode }) {
  return (
    <>
      {Icon && <Icon size={23} />}
      <span className="font-medium">
        {children}
      </span>
    </>
  );
}