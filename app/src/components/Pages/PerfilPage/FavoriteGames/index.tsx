import GameRow from "./GameRow";

export default function FavoriteGames() {
  return (
    <section>
      <h2 className="mb-4 text-xl font-bold">
        Fav Games
      </h2>

      <div className="space-y-3">
        <GameRow
          icon="K"
          label="CS: Global Offensive"
          color="bg-orange-500"
        />

        <GameRow
          icon="L"
          label="League of Legends"
          color="bg-purple-500"
        />

        <GameRow
          icon="R"
          label="Rocket League"
          color="bg-cyan-500"
        />
      </div>
    </section>
  );
}