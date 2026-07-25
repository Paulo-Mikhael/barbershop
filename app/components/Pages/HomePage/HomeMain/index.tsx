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
          <h1 className="text-highlight font-bold">
            Barbershop
          </h1>
          <p className="dark:text-typo-200 max-w-159.25 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a convallis nulla. Phasellus iaculis, diam eget pellentesque auctor, tellus libero posuere leo, sit amet volutpat velit dolor in magna. Aliquam lacinia eros ac turpis tempus, quis gravida est facilisis. Curabitur non erat sit amet sem eleifend tempus nec sed eros.
          </p>
          <Button>
            Registre-se Agora
          </Button>
        </div>
        <Bar />
      </span>
    </main>
  );
}