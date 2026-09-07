export default function ProfileCard() {
  return (
    <div className="relative mt-6 min-h-[245px] overflow-hidden rounded-lg border border-brand-default bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-brand bg-cover bg-center opacity-80" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex h-full min-h-[245px] items-center px-7">
        {/* Avatar */}
        <div className="relative mr-7 shrink-0">
          <div className="h-[138px] w-[138px] overflow-hidden rounded-full border-2 border-brand-default bg-typo-700">
            {/* Troque pela sua imagem */}
            <div className="h-full w-full bg-gradient-to-br from-typo-300 via-typo-600 to-black" />
          </div>
        </div>

        {/* User */}
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-bold">
              John Silva
            </h3>

            <span className="h-4 w-4 rounded-full bg-success" />
          </div>

          <p className="mt-1 text-sm">
            Level 12
          </p>

          <div className="mt-2 flex max-w-[470px] items-center gap-3">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-typo-500">
              <div className="h-full w-[38%] rounded-full bg-brand-default" />
            </div>

            <span className="text-xs">
              Lv 12
            </span>
          </div>

          <p className="mt-3 text-sm">
            Joined: September 2024
          </p>
        </div>

        {/* Actions */}
        <div className="absolute right-5 top-4 flex gap-4">
          <button className="rounded-md bg-brand-default px-9 py-3 text-sm font-semibold transition hover:bg-brand-dark">
            Follow
          </button>

          <button className="rounded-md border border-typo-300 bg-black/50 px-8 py-3 text-sm font-semibold transition hover:border-brand-default hover:text-brand-default">
            Message
          </button>
        </div>
      </div>
    </div>
  );
}