import { ReactNode } from "react";
import PerfilMain from "./PerfilMain";
import PerfilHeader from "./PerfilHeader";
import PerfilContent from "./PerfilContent";

function PerfilBody({ children }: { children: ReactNode }) {
  return (
    children
  );
}

const PerfilPage = {
  Body: PerfilBody,
  Main: PerfilMain,
  Header: PerfilHeader,
  Content: PerfilContent,
}

export default PerfilPage;