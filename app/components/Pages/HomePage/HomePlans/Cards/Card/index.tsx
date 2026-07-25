"use client"

import Button from "@/app/components/Button";
import clsx from "clsx";

export type CardContent = {
  mostPopular?: boolean,
  title: string,
  price: number,
  benefits: string[],
  onClick?: () => void
};

export default function Card({ mostPopular = false, ...card }: CardContent) {
  return (
    <span className={clsx("min-w-68.25 min-h-97.25 bg-box border-2 flex flex-col gap-5 items-center justify-center cursor-pointer p-12",
      {
        "border-typo-600": mostPopular == false,
        "border-brand-default": mostPopular == true
      }
    )}>
      <h3 className="text-section-title font-bold flex flex-col items-center gap-1.5">
        {mostPopular && <p className="text-section-subtitle">
          ⭐ Most Popular
        </p>}
        {card.title}
      </h3>
      <p className="text-brand-default text-highlight font-bold">
        R$ {card.price}
      </p>
      <ul className="flex flex-col items-center text-caption gap-3.5 max-w-68 text-center">
        {card.benefits.map((benefit, index) => (
          <li key={index}>
            {benefit}
          </li>
        ))}
      </ul>
      <Button onClick={card.onClick}>
        Subscribe
      </Button>
    </span>
  );
}