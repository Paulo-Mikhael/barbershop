import { ReactNode } from "react";

export default function BioBodyText({ children }: { children: ReactNode }) {
  return (
    <p className="leading-relaxed dark:text-typo-200">
      {children}
    </p>
  );
}