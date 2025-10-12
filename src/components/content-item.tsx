import { Clipboard } from "lucide-react"
import { twMerge } from 'tailwind-merge'

export type ContentItemBullet = {
  product: string
  experience: string[]
  level: "Novice/Beginner" | "Intermediate/Competent" | "Advanced/Proficient" | "Expert"
}

/**
 *  Novice/Beginner:        You are just starting to learn the skill and may need
 *                          guidance to complete tasks.
 *  Intermediate/Competent: You have moved past the basics and can complete tasks
 *                          with some independence, though you may still need help for complex issues.
 *  Advanced/Proficient:    You can complete tasks independently and are confident in handling
 *                          most situations. You can also help others with the skill.
 *  Expert:                 You are highly confident, can troubleshoot problems, and can guide or teach others.
 */

type ContentItemProps = {
  title?: string
  titleCenter?: boolean
  value?: string
  valueCenter?: boolean
  bullets?: ContentItemBullet[]
  isLink?: boolean
  showCopy?: boolean
}

export default function ContentItem({
  title = "",
  titleCenter = false,
  value = "",
  valueCenter = false,
  bullets = [],
  isLink = false,
  showCopy = false
}: ContentItemProps) {

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
        <div key={i} className="py-3 px-0.5">
          <p className="border-b-2 font-semibold mb-1 pb-1">{v.product} - <span className="font-normal">{v.level}</span></p>
          <div>
            {v.experience.map((v2, i2) => (
              <div key={i2} className="flex gap-3">
                <p className="">-</p>
                <p className="">{v2}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {showCopy && <Clipboard size={15} className="absolute right-1 top-1 hover:cursor-copy" />}
    </div>
  )
}