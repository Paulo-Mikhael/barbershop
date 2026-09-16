"use client"

import { ReactNode } from "react";

function ListCard({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-16 items-center gap-4 rounded-lg border border-typo-700 bg-box px-5">
      {children}
    </div>
  );
}

function ListCardIcon({ icon, bgColor }: { icon: string, bgColor: string }) {
  return (
    <span
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded ${bgColor} font-bold text-black`}
    >
      {icon}
    </span>
  );
}

function ListCardText({ children, description }: { children: ReactNode, description: string }) {
  return (
    <div className="min-w-0 flex-1">
      <h3 className="truncate text-sm font-medium">
        {children}
      </h3>

      <p className="mt-1 truncate text-[10px] dark:text-typo-300">
        {description}
      </p>
    </div>
  );
}

function ListCardButton({ children, onClick }: { children: ReactNode, onClick?: () => void }) {
  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
      className="shrink-0 cursor-pointer text-typo-100 rounded-md bg-blue-600 px-6 py-2 text-xs font-semibold transition hover:bg-blue-500"
    >
      {children}
    </button>
  );
}

ListCard.Icon = ListCardIcon;
ListCard.Text = ListCardText;
ListCard.Button = ListCardButton;

export default ListCard;