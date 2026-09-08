import { ReactNode } from "react";
import PerfilMain from "./PerfilMain";
import PerfilHeader from "./PerfilHeader";
import PerfilContent from "./PerfilContent";

function PerfilPage({ children }: { children: ReactNode }) {
  return (
    children
  );
}

PerfilPage.Main = PerfilMain;
PerfilPage.Header = PerfilHeader;
PerfilPage.Content = PerfilContent;

export default PerfilPage;