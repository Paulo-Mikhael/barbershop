"use client"

import PerfilPage from "@/app/src/Pages/PerfilPage";

export default function ProfileList() {
  const appointments = [
    {
      icon: "K",
      iconColor: "bg-orange-500",
      title: "Lorem ipsum",
      description: "00/00/00",
    },
    {
      icon: "L",
      iconColor: "bg-purple-500",
      title: "Lorem ipsum",
      description: "00/00/00",
    },
    {
      icon: "R",
      iconColor: "bg-cyan-500",
      title: "Lorem ipsum",
      description: "00/00/00",
    }
  ];

  const favoriteBabers = [
    {
      icon: "◉",
      title: "Guardian Championship, Who is best?",
      description: "Brazilian League | Sep 12, 2021 | North America",
      iconColor: "bg-cyan-500"
    },
    {
      icon: "S",
      title: "September, Crazyny MAJOR",
      description: "CS2 - League | Sep 20, 2024 | North America",
      iconColor: "bg-red-500"
    },
    {
      icon: "☠",
      title: "Kill Me If You Can",
      description: "Battle! | Sep 15, 2024 | North America",
      iconColor: "bg-orange-500"
    }
  ]

  const Profile = PerfilPage.Body.Profile;

  return (
    <>
      <Profile.List title="Atendimentos Recentes">
        {
          appointments.map((appointment, index) => (
            <Profile.List.Card key={index}>
              <Profile.List.Card.Icon icon={appointment.icon} bgColor={appointment.iconColor} />
              <Profile.List.Card.Text description={appointment.description}>
                {appointment.title}
              </Profile.List.Card.Text>
              <Profile.List.Card.Button>
                Ver
              </Profile.List.Card.Button>
            </Profile.List.Card>
          ))
        }
      </Profile.List>
      <Profile.List title="Cabelereiros Favoritados" layout="grid">
        {
          favoriteBabers.map((barber, index) => (
            <Profile.List.Card key={index}>
              <Profile.List.Card.Icon icon={barber.icon} bgColor={barber.iconColor} />
              <Profile.List.Card.Text description={barber.description}>
                {barber.title}
              </Profile.List.Card.Text>
              <Profile.List.Card.Button>
                Ver
              </Profile.List.Card.Button>
            </Profile.List.Card>
          ))
        }
      </Profile.List>
    </>
  );
}