import ListCard from "../ListCard";

export default function RecentAppointments() {
  return (
    <section>
      <h2 className="mb-4 text-xl font-bold">
        Atendimentos Recentes
      </h2>

      <div className="space-y-3">
        <ListCard
          icon="K"
          color="bg-orange-500"
          title="Lorem ipsum"
          description="00/00/00"
        />

        <ListCard
          icon="L"
          color="bg-purple-500"
          title="Lorem ipsum"
          description="00/00/00"
        />

        <ListCard
          icon="R"
          color="bg-cyan-500"
          title="Lorem ipsum"
          description="00/00/00"
        />
      </div>
    </section>
  );
}