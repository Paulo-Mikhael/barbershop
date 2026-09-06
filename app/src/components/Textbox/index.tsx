"use client"

import clsx from "clsx";
import { LucideIcon } from "lucide-react";
import { HTMLInputTypeAttribute, ReactNode, useRef } from "react";

type TextboxProps = {
  width?: number,
  placeholder: string,
  labelText?: string,
  LucideIcon?: LucideIcon,
  ActionButton?: LucideIcon,
  ActionOnClick?: () => void,
  type?: HTMLInputTypeAttribute
}

export default function Textbox({ width, placeholder, labelText, LucideIcon, ActionButton, ActionOnClick, type = "text" }: TextboxProps) {
  const boxWidthClass = `w-[${width}]px`;
  const input = useRef<HTMLInputElement>(null);

  return (
    <span className="flex flex-col gap-2.5">
      {
        labelText && (
          <label>
            {labelText}
          </label>
        )
      }
      <span
        onClick={() => input.current?.focus()}
        className={
          clsx("flex p-4 gap-2.5 cursor-pointer bg-box border-2 border-typo-700 outline-0 has-[input:focus]:border-brand-default", {
            "w-full": !width,
            [boxWidthClass]: width
          })}
      >
        {
          LucideIcon && (
            <LucideIcon />
          )
        }
        <input
          ref={input}
          className="outline-0 text-paragraph grow"
          type={type}
          placeholder={placeholder}
        />
        {
          ActionButton && (
            <ActionButton onClick={() => {
              ActionOnClick && ActionOnClick();
            }} />
          )
        }
      </span>
    </span>
  );
}