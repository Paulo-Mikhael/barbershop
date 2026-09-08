import { ReactNode } from "react";

export default function LoginMain({ children }: { children: ReactNode }) {
  return (
    <main className="h-screen w-full bg-background bg-brand bg-cover bg-center">
      <span className="flex items-center justify-center xl:justify-between h-full">
        {children}
      </span>
    </main>
  )
}