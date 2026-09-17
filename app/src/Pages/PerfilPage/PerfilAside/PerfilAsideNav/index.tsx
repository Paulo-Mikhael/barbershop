import { ReactNode } from "react";
import AsideNavItem from "./AsideNavItem";

function PerfilAsideNav({ children }: { children: ReactNode }) {
  return (
    <nav className="space-y-2">
      {children}
    </nav>
  );
}

PerfilAsideNav.Item = AsideNavItem;

export default PerfilAsideNav;