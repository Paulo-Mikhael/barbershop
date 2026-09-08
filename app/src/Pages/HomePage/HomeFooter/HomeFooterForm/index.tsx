"use client"

import Button from "@/app/src/components/Button";
import Textbox from "@/app/src/components/Textbox";

export default function HomeFooterForm() {
  return (
    <div className="min-w-91.75 flex flex-col gap-3.5">
      <Textbox placeholder="Digite seu email" />
      <Textbox placeholder="Digite sua senha" />
      <div className="flex flex-col gap-2.5">
        <span className="flex h-9">
          <Button.Primary full>
            ENTRAR E AGENDAR
          </Button.Primary>
        </span>
        <span className="flex h-9">
          <Button.Outlined full>
            Agendar como convidado
          </Button.Outlined>
        </span>
      </div>
    </div>
  );
}