import Button from "@/app/components/Button";
import Image from "next/image";

export default function HomeMain() {
  return (
    <main className="h-screen w-full bg-hero bg-cover bg-center flex flex-col items-center justify-between">
      <header className="flex flex-col items-center">
        <nav className="flex items-center justify-center mt-12 mb-6 gap-3">
          <Image src="/logo.png" alt="Logo" width={105} height={21} className="cursor-pointer" />
          <ul className="text-section-subtitle flex gap-3">
            <li className="cursor-pointer">Sobre Nós</li>
            <li className="cursor-pointer">Benefícios</li>
            <li className="cursor-pointer">Planos</li>
            <li className="cursor-pointer">FAQ</li>
            <li className="cursor-pointer">Registrar</li>
          </ul>
        </nav>
        <div className="bg-typo-700 h-0.5 w-280" />
      </header>
      <span className="flex flex-col items-center justify-center gap-7 grow">
        <h1 className="text-highlight">
          Barbershop
        </h1>
        <p className="text-typo-200 max-w-159.25 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a convallis nulla. Phasellus iaculis, diam eget pellentesque auctor, tellus libero posuere leo, sit amet volutpat velit dolor in magna. Aliquam lacinia eros ac turpis tempus, quis gravida est facilisis. Curabitur non erat sit amet sem eleifend tempus nec sed eros.
        </p>
        <Button>
          Registre-se Agora
        </Button>
      </span>
    </main>
  );
}