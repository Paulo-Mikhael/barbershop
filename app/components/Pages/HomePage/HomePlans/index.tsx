import Bar from "@/app/components/Bar";
import Card from "./Cards/Card";
import Cards from "./Cards";

export default function HomePlans() {
  return (
    <section className="h-screen bg-plans bg-cover bg-center flex flex-col items-center justify-center gap-32">
      <Bar />
      <div className="flex flex-col gap-16 items-center">
        <h2 className="text-subtitle font-bold">
          Nossos Planos
        </h2>
        <Cards />
      </div>
      <Bar />
    </section>
  );
}