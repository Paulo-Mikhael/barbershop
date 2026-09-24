"use client";

import { usePerfil } from "@/app/src/contexts/PerfilContext";
import PerfilPage from "@/app/src/Pages/PerfilPage";
import { Cake, Pencil } from "lucide-react";

export default function ProfileBio() {
  const Profile = PerfilPage.Body.Profile;
  const { biography, birthday } = usePerfil();

  return (
    <Profile.Bio>
      <Profile.Bio.Header>
        <Profile.Bio.Header.Title>Biografia</Profile.Bio.Header.Title>
        <Profile.Bio.Header.Button Icon={Pencil} />
      </Profile.Bio.Header>
      <Profile.Bio.Body>
        <Profile.Bio.Body.Text>{biography}</Profile.Bio.Body.Text>
        <Profile.Bio.Body.Event Icon={Cake} date={birthday} />
      </Profile.Bio.Body>
    </Profile.Bio>
  );
}
