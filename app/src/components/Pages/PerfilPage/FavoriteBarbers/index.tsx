import ListCard from "../ListCard";

export default function FavoriteBarbers() {
  return (
    <section>
      <h2 className="mb-4 text-xl font-bold">
        Cabeleireiros Favoritados
      </h2>

      <div className="grid grid-cols-2 gap-3">
        <ListCard
          icon="◉"
          title="Guardian Championship, Who is best?"
          description="Brazilian League | Sep 12, 2021 | North America"
          color="bg-cyan-500"
        />

        <ListCard
          icon="S"
          title="September, Crazyny MAJOR"
          description="CS2 - League | Sep 20, 2024 | North America"
          color="bg-red-500"
        />

        <ListCard
          icon="☠"
          title="Kill Me If You Can"
          description="Battle! | Sep 15, 2024 | North America"
          color="bg-orange-500"
        />
      </div>
    </section>
  );
}