import { ReactNode } from "react";

export default function PerfilProfile({ title = "Minha conta", children }: { title?: string, children: ReactNode }) {
  return (
    <section className="min-w-0 flex-1 p-8">
      <div className="flex items-center gap-5">
        <h2 className="text-2xl font-bold">
          {title}
        </h2>
      </div>

      {children}

      {/* 
      <div className="mt-8 grid grid-cols-[1.35fr_.85fr] gap-6">
        <div className="space-y-7">
          <RecentAppointments />
          <FavoriteBarbers />
        </div>

        <Bio />
      </div> 
      */}
    </section>
  );
}