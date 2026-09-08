import { ReactNode } from "react";

export default function PerfilMain({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen">
      <div className="overflow-hidden border border-typo-600 bg-background">
        {children}
      </div>
    </main >
  );
}