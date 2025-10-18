import { Clipboard } from "lucide-react"
import { twMerge } from 'tailwind-merge'

type OverviewItemProps = {
  title?: string
  titleCenter?: boolean
  value?: string
  valueCenter?: boolean
  isLink?: boolean
  showCopy?: boolean
}

export default function OverviewItem({
  title = "",
  titleCenter = false,
  value = "",
  valueCenter = false,
  isLink = false,
  showCopy = false
}: OverviewItemProps) {

  return (
    <div className="relative px-1 py-2 space-y-1 rounded-sm bg-gray-800">
      {title && <h5 className={twMerge(titleCenter && "text-center", "text-slate-100 font-semibold")}>{title}</h5>}

      {isLink && value && (
        <div className={twMerge(valueCenter && "text-center")}>
          <a className="text-slate-300" href={value} target="_blank" rel="noopener noreferrer">{value}</a>
        </div>
      )}

      {!isLink && value && <p className={twMerge(valueCenter && "text-center", "text-slate-300")}>{value}</p>}

      {showCopy && <Clipboard size={15} className="absolute right-1 top-1 hover:cursor-copy" />}
    </div>
  )
}