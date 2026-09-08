import Bio from "./Bio";
import FavoriteBarbers from "./FavoriteBarbers";
import ProfileCard from "./ProfileCard";
import RecentAppointments from "./RecentAppointments";
import Sidebar from "./Sidebar";
import Stats from "./Stats";

export default function PerfilContent() {
  return (
    <div className="flex min-h-min-h-237.5">
      <Sidebar />

      <section className="min-w-0 flex-1 p-8">
        <div className="flex items-center gap-5">
          <h2 className="text-2xl font-bold">
            Minha conta
          </h2>
        </div>

        <ProfileCard />

        <Stats />

        <div className="mt-8 grid grid-cols-[1.35fr_.85fr] gap-6">
          <div className="space-y-7">
            <RecentAppointments />
            <FavoriteBarbers />
          </div>

          <Bio />
        </div>
      </section>
    </div>
  );
}