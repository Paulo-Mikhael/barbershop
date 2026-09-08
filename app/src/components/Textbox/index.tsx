"use client"

import clsx from "clsx";
import { LucideIcon } from "lucide-react";
import { Context, createContext, HTMLInputTypeAttribute, ReactNode, RefObject, useContext, useRef } from "react";

type TextboxProps = {
  width?: number,
  placeholder: string,
  labelText?: string,
  LucideIcon?: LucideIcon,
  ActionButton?: LucideIcon,
  ActionOnClick?: () => void,
  type?: HTMLInputTypeAttribute
}

function Textboxs({ width, placeholder, labelText, LucideIcon, ActionButton, ActionOnClick, type = "text" }: TextboxProps) {
  const boxWidthClass = `w-[${width}]px`;
  const input = useRef<HTMLInputElement>(null);

  return (
    <span className="flex flex-col gap-2.5">
      {
        labelText && (
          <label htmlFor="input">
            {labelText}
          </label>
        )
      }
      <span
        onClick={() => input.current?.focus()}
        className={
          clsx("flex items-center p-4 gap-2.5 cursor-pointer bg-box border-2 border-typo-700 outline-0 has-[input:focus]:border-brand-default", {
            "w-full": !width,
            [boxWidthClass]: width
          })}
      >
        {
          LucideIcon && (
            <LucideIcon width={16} height={16} className="text-caption xl:text-paragraph" />
          )
        }
        <input
          id="input"
          ref={input}
          className="outline-0 text-caption xl:text-paragraph grow"
          type={type}
          placeholder={placeholder}
        />
        {
          ActionButton && (
            <ActionButton width={20} height={20} className="text-caption xl:text-paragraph" onClick={() => {
              ActionOnClick && ActionOnClick();
            }} />
          )
        }
      </span>
    </span>
  );
}

type ContextType = Context<{
  id: string;
  inputRef?: RefObject<HTMLInputElement | null>;
}>

const TextboxContext: ContextType = createContext({ id: "" });

function TextboxBody({ children, id }: { children: ReactNode, id: string }) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <TextboxContext.Provider value={{ id, inputRef: inputRef }}>
      <span className="flex flex-col gap-2.5">
        {children}
      </span>
    </TextboxContext.Provider>
  );
}

function TextboxLabel({ children }: { children: ReactNode }) {
  const { id } = useContext(TextboxContext);

  return (
    <label htmlFor={id}>
      {children}
    </label>
  );
}

function TextboxInputBody({ width, children }: { width?: string, children: ReactNode }) {
  const boxWidthClass = `w-[${width}]px`;
  const { inputRef } = useContext(TextboxContext);

  return <span
    onClick={() => inputRef?.current?.focus()}
    className={
      clsx("flex items-center p-4 gap-2.5 cursor-pointer bg-box border-2 border-typo-700 outline-0 has-[input:focus]:border-brand-default", {
        "w-full": !width,
        [boxWidthClass]: width
      })}
  >
    {children}
  </span>;
}

function TextboxInputBodyIcon({ LucideIcon }: { LucideIcon: LucideIcon }) {
  return <LucideIcon width={16} height={16} className="text-caption xl:text-paragraph" />;
}

function TextboxInputBodyActionButton({ LucideIcon, ActionOnClick }: { LucideIcon: LucideIcon, ActionOnClick?: () => void }) {
  return <LucideIcon
    role="button"
    width={20}
    height={20}
    className="text-caption xl:text-paragraph"
    onClick={() => {
      ActionOnClick && ActionOnClick();
    }} />;
}

function TextboxInputBodyInput({ type = "text", placeholder }: { type?: HTMLInputTypeAttribute, placeholder: string }) {
  const { id, inputRef } = useContext(TextboxContext);

  return (
    <input
      id={id}
      ref={inputRef}
      className="outline-0 text-caption xl:text-paragraph grow"
      type={type}
      placeholder={placeholder}
    />
  );
}

const Textbox = {
  Body: TextboxBody,
  Label: TextboxLabel,
  Box: {
    Body: TextboxInputBody,
    Icon: TextboxInputBodyIcon,
    Input: TextboxInputBodyInput,
    ActionButton: TextboxInputBodyActionButton,
  },
};

export default Textbox;