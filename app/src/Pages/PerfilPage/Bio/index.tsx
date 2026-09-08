import { CalendarDays, Pencil } from "lucide-react";

export default function Bio() {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold">
          Bio
        </h2>

        <button className="text-brand-default transition hover:text-brand-bright">
          <Pencil size={20} />
        </button>
      </div>

      <div className="rounded-lg border border-typo-700 bg-box p-6">
        <p className="leading-relaxed text-typo-200">
          Barber, gamer and passionate about technology.
          <br />
          Always looking to improve and achieve new goals.
        </p>

        <div className="mt-8 flex items-center gap-4 text-sm">
          <CalendarDays
            size={22}
            className="text-brand-default"
          />

          <span>27/06/2000</span>
        </div>
      </div>
    </section>
  );
}