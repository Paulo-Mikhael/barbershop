import StatCard from "./StatCard";

export default function Stats() {
  return (
    <div className="mt-6 grid grid-cols-4 gap-5">
      <StatCard
        value="158"
        label="GAMES PLAYED"
        icon="★"
        iconClass="bg-brand-default"
      />

      <StatCard
        value="12"
        label="GAME WINS"
        icon="★"
        iconClass="bg-success"
      />

      <StatCard
        value="58+"
        label="GAME WIN RATE"
        icon="★"
        iconClass="bg-danger"
      />

      <StatCard
        value="581"
        label="POINTS"
        icon="★"
        iconClass="bg-brand-default"
      />
    </div>
  );
}