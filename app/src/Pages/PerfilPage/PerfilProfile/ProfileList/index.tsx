import ListCard from "@/app/src/components/ListCard";
import clsx from "clsx";
import { ReactNode } from "react";

function ProfileList({ children, title, layout = "column" }: { children: ReactNode, title: string, layout?: "column" | "grid" }) {
  return (
    <section>
      <h2 className="mb-4 text-xl font-bold">
        {title}
      </h2>

      <div className={
        clsx({
          "grid grid-cols-2 gap-3": layout == "grid",
          "space-y-3": layout == "column",
        })
      }>
        {children}
      </div>
    </section>
  );
}

ProfileList.Card = ListCard;

export default ProfileList;