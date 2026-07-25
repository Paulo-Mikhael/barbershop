import Card, { CardContent } from "./Card";

const cards: CardContent[] = [
  {
    title: "Corte Clássico",
    price: 50,
    benefits: [
      "Lorem ipsum",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor sit amet"
    ]
  },
  {
    title: "Cabelo e Barba",
    price: 90,
    benefits: [
      "Lorem ipsum",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor sit"
    ]
  },
  {
    title: "Plano Mensal VIP",
    price: 150,
    benefits: [
      "Lorem ipsum",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor sit amet"
    ],
    mostPopular: true
  },
]

export default function Cards() {
  return (
    <div className="flex gap-6 items-center">
      <Card {...cards[0]} />
      <Card {...cards[1]} />
      <Card {...cards[2]} />
    </div>
  );
}