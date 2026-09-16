import StatCard from "./StatCard";
import { ReactNode } from "react";

function ProfileStats({ children }: { children: ReactNode }) {
  return (
    <div className="mt-6 grid grid-cols-4 gap-5">
      {children}
    </div>
  );
}

ProfileStats.Card = StatCard;

export default ProfileStats;