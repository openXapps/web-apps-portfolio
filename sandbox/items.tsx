import { Clipboard } from "lucide-react"
import { twMerge } from 'tailwind-merge'

export function ItemHeader({ title }: { title: string }) {
  return (
    <div className="bg-slate-500 rounded-sm px-0.5 py-2 text-center">
      <h3 className="text-xl">{title}</h3>
    </div>
  )
}

export type ItemBullet = {
  product: string
  experience: string[]
  level: "Beginner" | "Intermediate" | "Expert"
}

type ItemProps = {
  title?: string
  titleCenter?: boolean
  value?: string
  valueCenter?: boolean
  bullets?: ItemBullet[]
  isLink?: boolean
  showCopy?: boolean
}

export function Item({
  title = "",
  titleCenter = false,
  value = "",
  valueCenter = false,
  bullets = [],
  isLink = false,
  showCopy = false
}: ItemProps) {

  return (
    <div className="relative px-1 py-2 space-y-1 rounded-sm bg-gray-800">
      {title && <h5 className={twMerge(titleCenter && "text-center", "text-slate-100 font-semibold")}>{title}</h5>}

      {isLink && value && (
        <div className={twMerge(valueCenter && "text-center")}>
          <a className="text-slate-300" href={value} target="_blank" rel="noopener noreferrer">{value}</a>
        </div>
      )}

      {!isLink && value && <p className={twMerge(valueCenter && "text-center", "text-slate-300")}>{value}</p>}

      {bullets.length > 0 && bullets.map((v, i) => (
        // <div key={i} className="flex border-t-2 py-3 px-0.5">
        <div key={i} className="py-3 px-0.5">
          <p className="border-b-2 font-semibold mb-1 pb-1">{v.product} - <span className="font-normal">{v.level}</span></p>
          <div>
            {v.experience.map((v2, i2) => (
              <div className="flex gap-3">
                <p key={i2} className="">-</p>
                <p key={i2} className="">{v2}</p>
              </div>
            ))}
          </div>
          {/* <p className="w-24 min-w-24 max-w-24 text-right">{v.level}</p> */}
        </div>
      ))}

      {showCopy && <Clipboard size={15} className="absolute right-1 top-1 hover:cursor-copy" />}
    </div>
  )
}