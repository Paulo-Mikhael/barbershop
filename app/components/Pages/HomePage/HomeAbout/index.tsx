export default function HomeAbout() {
  return (
    <section className="h-screen bg-about bg-cover bg-center flex items-center justify-center">
      <span className="flex flex-col items-center">
        <h2 className="text-subtitle font-bold mb-16">
          Por que nos escolher?
        </h2>
        <ul className="flex gap-8">
          <li className="max-w-92 flex flex-col items-center">
            <p className="text-section-subtitle font-bold text-brand-default">💈 Ambiente Premium 💈</p>
            <p className="text-center">
              Criamos um espaço onde você pode realmente relaxar. Uma atmosfera clássica com boa música, resenha de qualidade e atendimento impecável.
            </p>
          </li>
          <li className="max-w-92 flex flex-col items-center">
            <p className="text-section-subtitle font-bold text-brand-default">⭐ Mestres do Estilo ⭐</p>
            <p className="text-center">
              Profissionais altamente treinados, especialistas tanto em cortes clássicos quanto nas tendências mais modernas do momento. O seu visual está em boas mãos.
            </p>
          </li>
          <li className="max-w-92 flex flex-col items-center">
            <p className="text-section-subtitle font-bold text-brand-default">💎 Produtos de Elite 💎</p>
            <p className="text-center">
              Trabalhamos apenas com as melhores linhas de cosméticos masculinos do mercado. Garantimos hidratação, fixação e saúde para o seu cabelo e barba.
            </p>
          </li>
        </ul>
      </span>
    </section>
  );
}