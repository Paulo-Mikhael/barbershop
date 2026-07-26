import Image from "next/image";

type FaqContent = {
  title: string,
  answer: string
};

export default function HomeFaq() {
  const faqQuestions: FaqContent[] = [
    {
      title: "Preciso agendar horário ou posso chegar na hora?",
      answer: "Recomendamos fortemente que você agende seu horário pelo nosso site ou app para evitar filas e garantir seu atendimento. No entanto, sempre tentamos encaixar clientes que chegam de surpresa, dependendo da disponibilidade dos barbeiros no momento."
    },
    {
      title: "Como funciona o pacote VIP Mensal?",
      answer: "O Plano VIP foi criado para quem gosta de estar com o visual sempre impecável. Pagando uma taxa fixa, você pode vir cortar o cabelo quantas vezes quiser no mês e alinhar a barba semanalmente, sem pagar nada a mais por isso na cadeira."
    },
    {
      title: "Vocês atendem crianças (corte infantil)?",
      answer: "Com certeza! Nossos profissionais têm a paciência e a técnica necessárias para atender os pequenos (a partir de 3 anos). O ambiente é amigável e garantimos que eles sairão cheios de estilo."
    },
  ];

  return (
    <section className="flex h-screen bg-faq bg-cover bg-center">
      <span className="flex flex-col items-center justify-center grow relative m-32">
        <h2 className="text-subtitle font-bold">
          Perguntas Frequentes (FAQ)
        </h2>
        <ul>
          {faqQuestions.map((question, index) => (
            <li className="flex flex-col gap-3.5 mt-9" key={index}>
              <h3 className="text-section-subtitle text-brand-default font-bold">
                {question.title}
              </h3>
              <h4 className="max-w-186 text-paragraph">
                {question.answer}
              </h4>
            </li>
          ))}
        </ul>
        <Image src="/images/home/faq1.png" alt="faq image" width={205} height={205} className="absolute top-0 right-0 max-2xl:hidden" />
        <Image src="/images/home/faq2.png" alt="faq image" width={205} height={205} className="absolute bottom-0 left-0 max-2xl:hidden" />
      </span>
    </section>
  );
}