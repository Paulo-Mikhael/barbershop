import clsx from "clsx";

export default function Bar({ full = false, classname }: { full?: boolean, classname?: string }) {
  return (
    <div className={clsx(`dark:bg-typo-700 bg-typo-300 h-0.5 ${classname}`, {
      "w-280": !full,
      "w-full": full
    })} />
  );
}