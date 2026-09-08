import Bar from "@/app/src/components/Bar";
import Cards from "./Cards";

export default function HomePlans() {
  return (
    <section className="xl:h-screen bg-plans bg-cover bg-center flex flex-col items-center justify-center gap-32">
      <Bar />
      <div className="flex flex-col gap-16">
        <h2 className="text-subtitle font-bold text-center">
          Nossos Planos
        </h2>
        <Cards />
      </div>
      <Bar />
    </section>
  );
}