export default function ProfileCard() {
  return (
    <div className="relative mt-6 min-h-61.25 overflow-hidden rounded-lg border border-brand-default bg-background">
      {/* Background */}
      <div className="absolute inset-0 bg-brand bg-cover bg-center" />

      <div className="relative z-10 flex h-full min-h-61.25 items-center px-7">
        {/* Avatar */}
        <div className="relative mr-7 shrink-0">
          <div className="h-34.5 w-34.5 overflow-hidden rounded-full border-2 border-brand-default bg-typo-700">
            {/* Troque pela sua imagem */}
            <div className="h-full w-full bg-linear-to-br from-typo-300 via-typo-600 to-black" />
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

          <p className="mt-3 text-sm">
            Juntou-se em 01 Setembro de 2026
          </p>
        </div>
      </div>
    </div>
  );
}