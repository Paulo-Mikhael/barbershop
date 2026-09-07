"use client"

import { useTheme } from "@/app/src/contexts/ThemeContext";
import Image from "next/image";

export default function LoginAsideText() {
  const theme = useTheme();
  const themedImageSrc = theme === "dark" ? "/images/login/hand.png" : "/images/login/light/hand.png";

  return (
    <div className="flex flex-col gap-25">
      <figure>
        <Image src={themedImageSrc} alt="Login aside text" width={383} height={197} loading="eager" className="w-auto h-auto" />
      </figure>
      <article className="flex flex-col gap-2.5 pl-12">
        <div className="flex gap-8">
          <span className="max-w-1.5 grow bg-brand-default" />
          <h2 className="text-highlight font-bold">
            Bem Vindo
          </h2>
        </div>
        <p className="max-w-72.5 dark:text-typo-400 text-typo-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </article>
    </div>
  );
}