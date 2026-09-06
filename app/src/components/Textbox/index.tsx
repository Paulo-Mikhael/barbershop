import clsx from "clsx";

type TextboxProps = {
  width?: number,
  placeholder: string
}

export default function Textbox({ width, placeholder }: TextboxProps) {
  const boxWidthClass = `w-[${width}]px`;

  return (
    <input
      type="text"
      placeholder={placeholder}
      className={clsx("text-caption p-4 bg-box border-2 border-typo-700 outline-0 focus:border-brand-default", {
        "w-full": !width,
        [boxWidthClass]: width
      })}
    />
  );
}