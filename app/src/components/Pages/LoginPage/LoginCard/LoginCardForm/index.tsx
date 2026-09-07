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
      <Textbox placeholder="Informe seu e-mail" labelText="E-mail" LucideIcon={Mail} />
      <div className="flex flex-col gap-2">
        <Textbox placeholder="Informe sua senha" labelText="Senha" LucideIcon={Lock} ActionButton={PasswordIcon()} ActionOnClick={() => setIsPasswordVisible(!isPasswordVisible)} type={isPasswordVisible ? "text" : "password"} />
        <a className="font-bold text-caption text-brand-darker text-right grow">Esqueceu a senha?</a>
      </div>
      <div className="flex grow justify-center mt-2.5">
        <span className="w-92 h-11">
          <Button rounded full type="submit">
            Login
          </Button>
        </span>
      </div>
    </form>
  );
}