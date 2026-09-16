import { ReactNode } from "react";
import ProfileAppointments from "./ProfileAppointments";
import ProfileBio from "./ProfileBio";
import ProfileCard from "./ProfileCard";
import ProfileFavoriteBarbers from "./ProfileFavoriteBarbers";
import ProfileStats from "./ProfileStats";

function PerfilProfile({ title = "Minha conta", children }: { title?: string, children: ReactNode }) {
  return (
    <section className="min-w-0 flex-1 p-8">
      <div className="flex items-center gap-5">
        <h2 className="text-2xl font-bold">
          {title}
        </h2>
      </div>

      {children}
    </section>
  );
}

PerfilProfile.Card = ProfileCard;
PerfilProfile.Stats = ProfileStats;
PerfilProfile.Appointments = ProfileAppointments;
PerfilProfile.Bio = ProfileBio;
PerfilProfile.FavoriteBarbers = ProfileFavoriteBarbers;

export default PerfilProfile;