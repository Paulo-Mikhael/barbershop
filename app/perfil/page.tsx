import ActiveEvents from "../src/components/Pages/PerfilPage/ActiveEvents";
import Bio from "../src/components/Pages/PerfilPage/Bio";
import FavoriteGames from "../src/components/Pages/PerfilPage/FavoriteGames";
import Header from "../src/components/Pages/PerfilPage/Header";
import ProfileCard from "../src/components/Pages/PerfilPage/ProfileCard";
import Sidebar from "../src/components/Pages/PerfilPage/Sidebar";
import Stats from "../src/components/Pages/Stats";

export default function Perfil() {
  return (
    <main className="min-h-screen bg-background text-foreground p-5">
      <div className="overflow-hidden rounded-[22px] border border-typo-600 bg-typo-800">
        <Header />

        <div className="flex min-h-[950px]">
          <Sidebar />

          <section className="min-w-0 flex-1 p-8">
            <div className="flex items-center gap-5">
              <h2 className="text-2xl font-bold">
                My Account
              </h2>

              <button className="rounded-md border border-brand-default px-5 py-2 text-sm transition hover:bg-brand-default">
                Send Request
              </button>
            </div>

            <ProfileCard />

            <Stats />

            <div className="mt-8 grid grid-cols-[1.35fr_.85fr] gap-6">
              <div className="space-y-7">
                <FavoriteGames />
                <ActiveEvents />
              </div>

              <Bio />
            </div>
          </section>
        </div>
      </div>
    </main >
  );
}