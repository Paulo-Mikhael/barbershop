import PerfilPage from "../../src/Pages/PerfilPage";

export default function ClientPerfil() {
  const Profile = PerfilPage.Main.Profile;

  return (
    <>
      <PerfilPage.Header />
      <PerfilPage.Main.Body>
        <PerfilPage.Main.Aside />
        <Profile.Body title="Minha conta">
          <Profile.Card />
          <Profile.Stats />
          <div className="mt-8 grid grid-cols-[1.35fr_.85fr] gap-6">
            <div className="space-y-7">
              <Profile.Appointments />
              <Profile.FavoriteBarbers />
            </div>
            <Profile.Bio />
          </div>
        </Profile.Body>
      </PerfilPage.Main.Body>
    </>
  );
}