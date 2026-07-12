export default function HomeAbout() {
  return (
    <section className="h-screen bg-about bg-cover bg-center flex items-center justify-center">
      <span className="flex flex-col items-center">
        <h2 className="text-subtitle font-bold mb-16">
          Por que nos escolher?
        </h2>
        <ul className="flex gap-3">
          <li className="max-w-92 flex flex-col items-center">
            <p className="text-section-subtitle font-bold text-brand-default">💈 Lorem ipsum</p>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </li>
          <li className="max-w-92 flex flex-col items-center">
            <p className="text-section-subtitle font-bold text-brand-default">⭐ Lorem ipsum</p>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </li>
          <li className="max-w-92 flex flex-col items-center">
            <p className="text-section-subtitle font-bold text-brand-default">⏰ Lorem ipsum</p>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </li>
        </ul>
      </span>
    </section>
  );
}