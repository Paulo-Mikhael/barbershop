"use client"

import Button from "@/app/src/components/Button";
import Textbox from "@/app/src/components/Textbox";
import { Eye, EyeOff, Lock, LucideIcon, Mail } from "lucide-react";
import { useState } from "react";

export default function LoginCardForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const PasswordIcon: () => LucideIcon = () => {
    return isPasswordVisible ? EyeOff : Eye;
  };

  return (
    <form className="flex flex-col gap-5">

      <Textbox.Body id="email-input">
        <Textbox.Label>Email</Textbox.Label>
        <Textbox.Box.Body>
          <Textbox.Box.Icon LucideIcon={Mail} />
          <Textbox.Box.Input placeholder="Informe seu email" />
        </Textbox.Box.Body>
      </Textbox.Body>

      <div className="flex flex-col gap-2">

        <Textbox.Body id="password-input">
          <Textbox.Label>Senha</Textbox.Label>
          <Textbox.Box.Body>
            <Textbox.Box.Icon LucideIcon={Lock} />
            <Textbox.Box.Input type={isPasswordVisible ? "text" : "password"} placeholder="Informe sua senha" />
            <Textbox.Box.ActionButton LucideIcon={PasswordIcon()} ActionOnClick={() => setIsPasswordVisible(!isPasswordVisible)} />
          </Textbox.Box.Body>
        </Textbox.Body>

        <a className="font-bold text-caption text-brand-darker text-right grow">Esqueceu a senha?</a>
      </div>
      <div className="flex grow justify-center mt-2.5">
        <span className="w-92 h-11">
          <Button.Primary rounded full type="submit">
            Login
          </Button.Primary>
        </span>
      </div>
    </form>
  );
}