import Image from "next/image";

export default function ProfileAvatar({ ...properties }: { src: string, alt: string }) {
  return (
    <div className="relative mr-7 shrink-0">
      <div className="h-34.5 w-34.5 overflow-hidden">
        <Image {...properties} className="rounded-full border-2 border-brand-default" fill sizes="138px" />
      </div>
    </div >
  );
}