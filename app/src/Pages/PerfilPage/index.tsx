import { ReactNode } from "react";
import PerfilHeader from "./PerfilHeader";
import PerfilAside from "./PerfilAside";
import PerfilProfile from "./PerfilProfile";
import { PerfilProvider } from "../../contexts/PerfilContext";
import { ISecurePerfil } from "../../interfaces/IPerfil";

function PerfilBody({ children, securePerfil }: { children: ReactNode, securePerfil: ISecurePerfil }) {
  return (
    <main className="min-h-screen">
      <div className="overflow-hidden border border-typo-600 bg-background">
        <div className="flex min-h-screen sticky top-0">
          <PerfilProvider perfil={securePerfil}>
            {children}
          </PerfilProvider>
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