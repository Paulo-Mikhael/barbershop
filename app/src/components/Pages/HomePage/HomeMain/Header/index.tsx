import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-col items-center">
      <nav className="flex items-center gap-3 mt-12.5">
        <Image src="/logo.png" alt="Logo" width={105} height={21} className="cursor-pointer" />
        <ul className="text-section-subtitle flex gap-3">
          <li className="cursor-pointer">Sobre Nós</li>
          <li className="cursor-pointer">Benefícios</li>
          <li className="cursor-pointer">Planos</li>
          <li className="cursor-pointer">FAQ</li>
          <li className="cursor-pointer">Registrar</li>
        </ul>
      </nav>
    </header>
  );
}