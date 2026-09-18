import { CalendarClock, Pencil } from "lucide-react";
import PerfilPage from "../../../src/Pages/PerfilPage";
import { format } from "date-fns";
import ProfileList from "./Profile/ProfileList";
import ProfileBio from "./Profile/ProfileBio";
import AsideNav from "./Aside/AsideNav";
import AsideSections from "./Aside/AsideSections";
import { IClient } from "@/app/src/interfaces/IClient";
import { IPerfil } from "@/app/src/interfaces/IPerfil";
import api from "@/app/src/api";

export default async function ClientPerfil({ params }: { params: Promise<{ id: string }> }) {

  try {
    const { id } = await params;

    const response = await api.get<IClient>(`clients/${id}`);
    const client = response.data;
    const perfilResponse = await api.get<IPerfil>(`perfis/${client.id}`);
    const { cliente_id, ...securePerfil } = perfilResponse.data;

    const Profile = PerfilPage.Body.Profile;
    const Aside = PerfilPage.Body.Aside;

    const today = new Date();

    return (
      <>
        <PerfilPage.Header />
        <PerfilPage.Body securePerfil={securePerfil}>
          <Aside>
            <AsideNav />
            <AsideSections />
          </Aside>

          <Profile title="Minha conta">
            <Profile.Card>
              <Profile.Card.Avatar src={securePerfil.avatar.url} alt={securePerfil.avatar.alt} />
              <Profile.Card.Username name={securePerfil.username} joinDate={new Date(securePerfil.joined_at)} />
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
  } catch (error) {
    console.error(error);
    return <main className="flex items-center justify-center text-highlight h-screen">Not Found</main>;
  }
}