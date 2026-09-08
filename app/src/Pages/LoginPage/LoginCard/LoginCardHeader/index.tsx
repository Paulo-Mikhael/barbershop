import Image from "next/image";

export default function LoginCardHeader() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <Image src="/logo-circle.png" width={65} height={65} alt="Logo da  barbershop" />
      <h3 className="dark:text-typo-400 text-typo-700 text-center">
        <strong className="text-subtitle dark:text-typo-100">Login</strong><br />
        Bem Vindo! Insira suas informações para continuar.
      </h3>
    </div>
  );
}