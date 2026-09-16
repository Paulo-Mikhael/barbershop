import { CalendarClock, Pencil } from "lucide-react";
import PerfilPage from "../../src/Pages/PerfilPage";
import { format } from "date-fns";

export default function ClientPerfil() {
  const Profile = PerfilPage.Body.Profile;

  const birthday = new Date("2006-06-19T00:00:00");

  const appointments = [
    {
      icon: "K",
      color: "bg-orange-500",
      title: "Lorem ipsum",
      description: "00/00/00",
    },
    {
      icon: "L",
      color: "bg-purple-500",
      title: "Lorem ipsum",
      description: "00/00/00",
    },
    {
      icon: "R",
      color: "bg-cyan-500",
      title: "Lorem ipsum",
      description: "00/00/00",
    }
  ];

  const favoriteBabers = [
    {
      icon: "◉",
      title: "Guardian Championship, Who is best?",
      description: "Brazilian League | Sep 12, 2021 | North America",
      color: "bg-cyan-500"
    },
    {
      icon: "S",
      title: "September, Crazyny MAJOR",
      description: "CS2 - League | Sep 20, 2024 | North America",
      color: "bg-red-500"
    },
    {
      icon: "☠",
      title: "Kill Me If You Can",
      description: "Battle! | Sep 15, 2024 | North America",
      color: "bg-orange-500"
    }
  ]

  return (
    <>
      <PerfilPage.Header />
      <PerfilPage.Body>
        <PerfilPage.Body.Aside />

        <Profile title="Minha conta">
          <Profile.Card>
            <Profile.Card.Avatar src="https://http.cat/208" alt="208 http cat image" />
            <Profile.Card.Username name="Paulo Miguel" joinDate={birthday} />
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
                {format(birthday, "dd/MM/yyyy")}
              </Profile.Stats.Card.Text>
            </Profile.Stats.Card>
          </Profile.Stats>
          <div className="mt-8 grid grid-cols-[1.35fr_.85fr] gap-6">
            <div className="space-y-7">
              <Profile.List title="Atendimentos Recentes">
                {
                  appointments.map((appointment, index) => (
                    <Profile.List.Card key={index}
                      icon={appointment.icon}
                      color={appointment.color}
                      title={appointment.title}
                      description={appointment.description}
                    />
                  ))
                }
              </Profile.List>
              <Profile.List title="Cabelereiros Favoritados" layout="grid">
                {
                  favoriteBabers.map((barber, index) => (
                    <Profile.List.Card key={index}
                      icon={barber.icon}
                      color={barber.color}
                      title={barber.title}
                      description={barber.description}
                    />
                  ))
                }
              </Profile.List>
            </div>
            <Profile.Bio />
          </div>
        </Profile>

      </PerfilPage.Body>
    </>
  );
}