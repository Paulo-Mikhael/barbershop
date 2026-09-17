"use client"

import { ReactNode } from "react";
import SectionItemText from "./SectionItemText";

function AsideSectionItem({ children, onClick }: { children: ReactNode, onClick?: () => void }) {
  return (
    <button
      onClick={() => { onClick && onClick() }}
      className="cursor-pointer flex w-full items-center gap-4 rounded-md px-1 py-2 text-left text-sm dark:text-typo-200 transition hover:bg-typo-300 dark:hover:bg-typo-700"
    >
      {children}
    </button>
  );
}

AsideSectionItem.Text = SectionItemText;

export default AsideSectionItem;