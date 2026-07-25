import clsx from "clsx";

export default function Bar({ full = false, classname }: { full?: boolean, classname?: string }) {
  return (
    <div className={clsx(`bg-typo-700 h-0.5 ${classname}`, {
      "w-280": !full,
      "w-full": full
    })} />
  );
}