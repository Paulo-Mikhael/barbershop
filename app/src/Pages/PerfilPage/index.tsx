import { ReactNode } from "react";
import PerfilHeader from "./PerfilHeader";
import PerfilAside from "./PerfilAside";
import PerfilProfile from "./PerfilProfile";
import ProfileCard from "./PerfilProfile/ProfileCard";
import ProfileStats from "./PerfilProfile/ProfileStats";
import ProfileAppointments from "./PerfilProfile/ProfileAppointments";
import ProfileBio from "./PerfilProfile/ProfileBio";
import ProfileFavoriteBarbers from "./PerfilProfile/ProfileFavoriteBarbers";

function PerfilBody({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen">
      <div className="overflow-hidden border border-typo-600 bg-background">
        <div className="flex min-h-screen">
          {children}
        </div>
      </div>
    </main >
  );
}

const PerfilPage = {
  Header: PerfilHeader,
  Main: {
    Body: PerfilBody,
    Aside: PerfilAside,
    Profile: {
      Body: PerfilProfile,
      Card: ProfileCard,
      Stats: ProfileStats,
      Appointments: ProfileAppointments,
      Bio: ProfileBio,
      FavoriteBarbers: ProfileFavoriteBarbers
    }
  },
}

export default PerfilPage;