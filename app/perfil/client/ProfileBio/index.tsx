"use client"

import PerfilPage from "@/app/src/Pages/PerfilPage";
import { Cake, Pencil } from "lucide-react";

export default function ProfileBio() {
  const Profile = PerfilPage.Body.Profile;

  return (
    <Profile.Bio>
      <Profile.Bio.Header>
        <Profile.Bio.Header.Title>
          Biografia
        </Profile.Bio.Header.Title>
        <Profile.Bio.Header.Button Icon={Pencil} />
      </Profile.Bio.Header>
      <Profile.Bio.Body>
        <Profile.Bio.Body.Text>
          Barber, gamer and passionate about technology.
          <br />
          Always looking to improve and achieve new goals.
        </Profile.Bio.Body.Text>
        <Profile.Bio.Body.Event Icon={Cake} date={new Date()} />
      </Profile.Bio.Body>
    </Profile.Bio>
  );
}