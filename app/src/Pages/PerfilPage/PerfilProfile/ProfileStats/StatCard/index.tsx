import { ReactNode } from "react";
import StatCardIcon from "./StatCardIcon";
import StatCardText from "./StatCardText";

function StatCard({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-21.5 items-center gap-5 rounded-lg border border-typo-700 bg-box px-7 cursor-pointer">
      {children}
    </div>
  );
}

StatCard.Icon = StatCardIcon;
StatCard.Text = StatCardText;

export default StatCard;