import Bar from "@/app/components/Bar";
import Button from "@/app/components/Button";
import Textbox from "@/app/components/Textbox";

export default function HomeFooter() {
  return (
    <footer className="min-h-148.5 bg-footer bg-cover bg-center flex flex-col pt-24 pb-6 items-center">
      <span className="flex flex-col grow items-center justify-center gap-6">
        <h2 className="text-center text-subtitle font-bold">
          Preparado para o seu próximo corte de cabelo?<br />
          Junte-se a mais de 1000 clientes satisfeitos
        </h2>
        <p className="dark:text-typo-200">
          Conecte-se para criar seu perfil de cliente ou continue sem uma conta
        </p>
        <div className="min-w-91.75 flex flex-col gap-3.5">
          <Textbox placeholder="Digite seu email" />
          <Textbox placeholder="Digite sua senha" />
          <div className="flex flex-col gap-2.5">
            <span className="flex h-9">
              <Button full>
                ENTRAR E AGENDAR
              </Button>
            </span>
            <span className="flex h-9">
              <Button variant="outlined" full>
                Agendar como convidado
              </Button>
            </span>
          </div>
        </div>
      </span>
      <Bar full classname="mt-24 mb-5" />
      <p className="text-caption dark:text-typo-200">
        © 2026 Barbershop, FAQ Illustrations by <a href="https://storyset.com/" target="_blank">Storyset</a>. All rights reserved.
      </p>
    </footer>
  );
}