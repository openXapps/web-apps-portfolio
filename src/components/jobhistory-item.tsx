import type { Responsibility } from "@/data/jobhistory-data"

type JobHistoryItemProps = {
  title?: string
  dateFrom?: string
  dateTo?: string
  responsibilities?: Responsibility[]
}

export default function JobHistoryItem({
  title = "",
  dateFrom = "",
  dateTo = "",
  responsibilities = [],
}: JobHistoryItemProps) {

  return (
    <div className="relative px-1 py-2 space-y-1 rounded-sm bg-gray-800">
      {title && <h5 className="text-slate-100 font-semibold">{title}</h5>}

      {responsibilities.length > 0 && responsibilities.map((v, i) => (
        <div key={i} className="flex gap-3">
          <p className="">-</p>
          <p className="">{v.responsibility}</p>
        </div>
      ))}
    </div>
  )
}