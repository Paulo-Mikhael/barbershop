"use client";

import clsx from "clsx";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode,
  variant?: "primary" | "outlined",
  full?: boolean,
  onClick?: () => void
};

export default function Button({ children, variant = "primary", full = false, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={
        clsx(
          "cursor-pointer",
          {
            "px-8 py-4": !full,
            "w-full h-full": full,
            "bg-brand-default text-typo-100 hover:bg-brand-dark active:bg-brand-darker focus:bg-brand-bright disabled:bg-typo-400": variant == "primary",
            "border-brand-default border-2 text-brand-default hover:border-brand-dark hover:text-brand-dark active:border-brand-darker active:text-brand-darker focus:border-brand-bright focus:text-brand-bright disabled:border-typo-400 disabled:text-typo-400": variant == "outlined"
          }
        )
      }
    >
      {children}
    </button>
  );
}