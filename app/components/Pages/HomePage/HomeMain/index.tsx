import Bar from "@/app/components/Bar";
import Button from "@/app/components/Button";
import Header from "./Header";

export default function HomeMain() {
  return (
    <main className="h-screen w-full bg-hero bg-cover bg-center flex flex-col items-center justify-between">
      <Header />
      <span className="flex flex-col items-center justify-between grow py-6.25">
        <Bar />
        <div className="flex flex-col items-center justify-center gap-8">
          <h1 className="text-highlight font-bold text-center">
            Barbershop<br />
            <p className="text-section-subtitle font-normal">A tradição encontra o estilo.</p>
          </h1>
          <h2 className="dark:text-typo-200 max-w-159.25 text-center">
            Muito mais do que um simples corte de cabelo ou barba, nós oferecemos um ritual completo de cuidado masculino. Relaxe, aproveite o ambiente, tome uma cerveja gelada e deixe nossos mestres da tesoura elevarem o seu visual para o próximo nível. A sua confiança começa aqui.
          </h2>
          <Button>
            Registre-se Agora
          </Button>
        </div>
        <Bar />
      </span>
    </main>
  );
}