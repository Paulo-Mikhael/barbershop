import Image from "next/image";

type FaqContent = {
  title: string,
  answer: string
};

export default function HomeFaq() {
  const faqQuestions: FaqContent[] = [
    {
      title: "Lorem ipsum dolor sit amet",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a convallis nulla. Phasellus iaculis, diam eget pellentesque auctor, tellus libero posuere leo, sit amet volutpat velit dolor in magna."
    },
    {
      title: "Lorem ipsum dolor sit amet",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a convallis nulla. Phasellus iaculis, diam eget pellentesque auctor, tellus libero posuere leo, sit amet volutpat velit dolor in magna."
    },
    {
      title: "Lorem ipsum dolor sit amet",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a convallis nulla. Phasellus iaculis, diam eget pellentesque auctor, tellus libero posuere leo, sit amet volutpat velit dolor in magna."
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
        <Image src="/images/home/faq1.png" alt="faq image" width={205} height={205} className="absolute top-0 right-0" />
        <Image src="/images/home/faq2.png" alt="faq image" width={205} height={205} className="absolute bottom-0 left-0" />
      </span>
    </section>
  );
}