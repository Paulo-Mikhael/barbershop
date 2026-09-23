import { getMonthName } from "@/app/src/utils/date";

type FullDate = {
  day: number,
  month: number,
  year: number,
  hours?: number,
  minutes?: number,
  seconds?: number
}

export default function ProfileUsername({ name, joinDate }: { name: string, joinDate: Date }) {
  const fullDate: FullDate = {
    day: joinDate.getDate(),
    month: joinDate.getMonth(),
    year: joinDate.getFullYear(),
  }

  return (
    <div className="flex-1">
      <div className="flex items-center gap-3">
        <h3 className="text-2xl font-bold">
          {name}
        </h3>

        <span className="h-4 w-4 rounded-full bg-success" />
      </div>

      <p className="mt-3 text-sm">
        Juntou-se em {`${fullDate.day} de ${getMonthName(fullDate.month)} de ${fullDate.year}`}
      </p>
    </div>
  )
}