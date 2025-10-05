import { Clipboard } from "lucide-react"

export function ItemHeader({ title }: { title: string }) {
  return (
    <div className="bg-slate-500 rounded-sm px-0.5 py-2 text-center">
      <h3 className="text-xl">{title}</h3>
    </div>
  )
}

type ItemProps = {
  title?: string
  value?: string
  bullets?: {
    product: string
    experience: string
  }[]
  isLink?: boolean
  showCopy?: boolean
}

export function Item({ title = "", value = "", bullets = [], isLink = false, showCopy = false }: ItemProps) {
  return (
    <div className="text-center px-0.5 py-2 space-y-1 rounded-sm bg-gray-800">
      {title && <h5 className="text-slate-100 font-semibold">{title}</h5>}

      {isLink && value && <a className="text-slate-300" href={value} target="_blank">{value}</a>}

      {value && <h5 className="text-slate-300"
      >{value} {showCopy && <span className="inline-flex align-text-top ml-2 hover:cursor-copy">
        <Clipboard size={15} />
      </span>}
      </h5>
      }

      {bullets.length > 0 && bullets.map((v, i) => (
        <h5 key={i}>{v.product + " " + v.experience}</h5>
      ))}
    </div>
  )
}