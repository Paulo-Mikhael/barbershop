import Bar from "@/app/src/components/Bar";
import HomeFooterForm from "./HomeFooterForm";

export default function HomeFooter() {
  return (
    <footer className="min-h-148.5 bg-footer bg-cover bg-center flex flex-col pt-24 pb-6 items-center">
      <span className="flex flex-col grow items-center justify-center gap-6">
        <h2 className="text-center text-subtitle font-bold">
          Preparado para o seu próximo corte de cabelo?<br />
          Junte-se a mais de 1000 clientes satisfeitos
        </h2>
        <p className="dark:text-typo-200 text-center">
          Conecte-se para criar seu perfil de cliente ou continue sem uma conta
        </p>
        <HomeFooterForm />
      </span>
      <Bar full classname="mt-24 mb-5" />
      <p className="text-caption dark:text-typo-200 text-center">
        © 2026 Barbershop, FAQ Illustrations by <a className="underline" href="https://storyset.com/" target="_blank">Storyset</a>. All rights reserved.
      </p>
    </footer>
  );
}