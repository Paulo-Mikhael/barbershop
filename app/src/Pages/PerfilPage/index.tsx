import { ReactNode } from "react";
import PerfilHeader from "./PerfilHeader";
import PerfilAside from "./PerfilAside";
import PerfilProfile from "./PerfilProfile";

function PerfilBody({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen">
      <div className="overflow-hidden border border-typo-600 bg-background">
        <div className="flex min-h-screen sticky top-0">
          {children}
        </div>
      </div>
    </main >
  );
}

PerfilBody.Aside = PerfilAside;
PerfilBody.Profile = PerfilProfile;


const PerfilPage = {
  Header: PerfilHeader,
  Body: PerfilBody,
}

export default PerfilPage;