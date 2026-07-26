import Card, { CardContent } from "./Card";

const cards: CardContent[] = [
  {
    title: "Corte Clássico",
    price: 50,
    benefits: [
      "Corte na tesoura ou máquina",
      "Acabamento perfeito na navalha",
      "Lavagem e finalização com pomada",
    ]
  },
  {
    title: "Cabelo e Barba",
    price: 90,
    benefits: [
      "Corte de cabelo completo",
      "Barboterapia com toalha quente",
      "Alinhamento e hidratação dos fios",
    ]
  },
  {
    title: "Plano Mensal VIP",
    price: 150,
    benefits: [
      "Cortes ilimitados durante o mês",
      "Manutenção semanal da barba",
      "10% de desconto em produtos da loja",
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