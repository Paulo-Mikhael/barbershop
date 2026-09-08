import FavoriteBarbers from "../src/Pages/PerfilPage/FavoriteBarbers";
import Bio from "../src/Pages/PerfilPage/Bio";
import RecentAppointments from "../src/Pages/PerfilPage/RecentAppointments";
import Header from "../src/Pages/PerfilPage/Header";
import ProfileCard from "../src/Pages/PerfilPage/ProfileCard";
import Sidebar from "../src/Pages/PerfilPage/Sidebar";
import Stats from "../src/Pages/Stats";

export default function Perfil() {
  return (
    <main className="min-h-screen">
      <div className="overflow-hidden border border-typo-600 bg-background">
        <Header />

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
      </div>
    </main >
  );
}