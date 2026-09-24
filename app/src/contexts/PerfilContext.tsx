"use client";

import { createContext, ReactNode, useContext } from "react";
import { ISecurePerfil } from "../interfaces/IPerfil";

const PerfilContext = createContext<ISecurePerfil | null>(null);

export function PerfilProvider({
  children,
  perfil,
}: {
  children: ReactNode;
  perfil: ISecurePerfil;
}) {
  perfil.birthday = new Date(perfil.birthday);
  perfil.joined_at = new Date(perfil.joined_at);

  return (
    <PerfilContext.Provider value={perfil}>{children}</PerfilContext.Provider>
  );
}

export function usePerfil() {
  const context = useContext(PerfilContext);

  if (context == null)
    throw new Error(
      "It was not possible to get 'PerfilContext' from provider, it is not possible to use 'usePerfil' hook",
    );

  return context;
}
