import { ReactNode } from "react";

export default function StatCardText({ children, label }: { children: ReactNode, label: string }) {
  return (
    <div>
      <strong className="block text-xl uppercase">
        {children}
      </strong>

      <span className="text-[11px] font-semibold dark:text-typo-300 uppercase">
        {label}
      </span>
    </div>
  );
}