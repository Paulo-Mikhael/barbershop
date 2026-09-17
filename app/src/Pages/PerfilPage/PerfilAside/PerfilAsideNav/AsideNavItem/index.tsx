"use client"

import clsx from "clsx";
import { ReactNode } from "react";
import NavItemText from "./NavItemText";

function AsideNavItem({
  children,
  active = false,
  onClick
}: {
  children: ReactNode,
  active?: boolean,
  onClick?: () => void
}) {
  return (
    <button
      onClick={() => { onClick && onClick() }}
      className={
        clsx("flex w-full items-center gap-5 rounded-md px-1 py-3 text-left transition", {
          "text-brand-default cursor-default": active,
          "hover:text-brand-default cursor-pointer": !active
        })}
    >
      {children}
    </button>
  );
}

AsideNavItem.Text = NavItemText;

export default AsideNavItem;