"use client"

import { LucideIcon } from "lucide-react";

export default function BioHeaderButton({ Icon, onClick }: { Icon: LucideIcon, onClick?: () => void }) {
  return (
    <button
      onClick={() => { onClick && onClick() }}
      className="text-brand-default transition hover:text-brand-bright cursor-pointer"
    >
      <Icon size={20} />
    </button>
  );
}