"use client"

import Button from "@/app/src/components/Button";
import Textbox from "@/app/src/components/Textbox";
import { Mail, Lock } from "lucide-react";

export default function HomeFooterForm() {
  return (
    <div className="min-w-91.75 flex flex-col gap-3.5">
      <Textbox.Body id="email-input">
        <Textbox.Box.Body>
          <Textbox.Box.Icon LucideIcon={Mail} />
          <Textbox.Box.Input placeholder="Digite seu email" />
        </Textbox.Box.Body>
      </Textbox.Body>
      <Textbox.Body id="password-input">
        <Textbox.Box.Body>
          <Textbox.Box.Icon LucideIcon={Lock} />
          <Textbox.Box.Input placeholder="Digite sua senha" />
        </Textbox.Box.Body>
      </Textbox.Body>
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