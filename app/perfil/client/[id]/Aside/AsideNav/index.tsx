"use client"

import PerfilPage from "@/app/src/Pages/PerfilPage";
import { Home, Scissors, CalendarClock, CalendarDays, MessageSquare } from "lucide-react";

export default function AsideNav() {
  const Aside = PerfilPage.Body.Aside;

  return (
    <Aside.Nav>
      <Aside.Nav.Item active>
        <Aside.Nav.Item.Text Icon={Home}>
          Home
        </Aside.Nav.Item.Text>
      </Aside.Nav.Item>

      <Aside.Nav.Item>
        <Aside.Nav.Item.Text Icon={Scissors}>
          Cabeleireiros
        </Aside.Nav.Item.Text>
      </Aside.Nav.Item>

      <Aside.Nav.Item>
        <Aside.Nav.Item.Text Icon={CalendarClock}>
          Agendamentos
        </Aside.Nav.Item.Text>
      </Aside.Nav.Item>

      <Aside.Nav.Item>
        <Aside.Nav.Item.Text Icon={CalendarDays}>
          Calendário
        </Aside.Nav.Item.Text>
      </Aside.Nav.Item>

      <Aside.Nav.Item>
        <Aside.Nav.Item.Text Icon={MessageSquare}>
          Ajuda
        </Aside.Nav.Item.Text>
      </Aside.Nav.Item>
    </Aside.Nav>
  );
}