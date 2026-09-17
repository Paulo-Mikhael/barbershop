import { CalendarClock, Pencil } from "lucide-react";
import PerfilPage from "../../src/Pages/PerfilPage";
import { format } from "date-fns";
import ProfileList from "./Profile/ProfileList";
import ProfileBio from "./Profile/ProfileBio";
import AsideNav from "./Aside/AsideNav";
import AsideSections from "./Aside/AsideSections";

export default function ClientPerfil() {
  const Profile = PerfilPage.Body.Profile;
  const Aside = PerfilPage.Body.Aside;

  const today = new Date();

  return (
    <>
      <PerfilPage.Header />
      <PerfilPage.Body>
        <Aside>
          <AsideNav />
          <AsideSections />
        </Aside>

        <Profile title="Minha conta">
          <Profile.Card>
            <Profile.Card.Avatar src="https://http.cat/208" alt="208 http cat image" />
            <Profile.Card.Username name="Paulo Miguel" joinDate={today} />
          </Profile.Card>
          <Profile.Stats>
            <Profile.Stats.Card>
              <Profile.Stats.Card.Icon Icon={Pencil} iconClass="bg-info" />
              <Profile.Stats.Card.Text label="Agendamentos">
                3
              </Profile.Stats.Card.Text>
            </Profile.Stats.Card>

            <Profile.Stats.Card>
              <Profile.Stats.Card.Icon Icon={CalendarClock} iconClass="bg-brand-default" />
              <Profile.Stats.Card.Text label="Proximo Atendimento">
                {format(today, "dd/MM/yyyy")}
              </Profile.Stats.Card.Text>
            </Profile.Stats.Card>
          </Profile.Stats>
          <div className="mt-8 grid grid-cols-[1.35fr_.85fr] gap-6">
            <div className="space-y-7">
              <ProfileList />
            </div>
            <ProfileBio />
          </div>
        </Profile>

      </PerfilPage.Body>
    </>
  );
}