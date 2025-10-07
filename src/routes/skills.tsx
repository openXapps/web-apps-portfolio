import { Item, ItemHeader, type ItemBullet } from '@/components/items';

const skills: ItemBullet[] = [
  {
    product: "BMC Remedy Core",
    experience: [
      "I've been building Remedy workflows since 1997.",
      "I support on-premises (v21.x), PaaS (v.25.x) & SaaS (v25.x) deployments.",
      "My strong points are to build stand-alone deplorable application in Remedy, customize existing workflow by following best-practice guidelines and ability to troubleshoot the most complex issues.",
    ],
    level: "Expert"
  },
  {
    product: "BMC Helix (Remedy) CMDB",
    experience: [
      "CMDB has been my passion.",
      "As a perfectionist, I enforce strict data naming conventions and prevent CI duplication.",
      "",
    ],
    level: "Expert"
  },
  {
    product: "BMC Helix (Remedy) CMDB",
    experience: [
      "CMDB has been my passion. As a perfectionist, ",
    ],
    level: "Intermediate"
  },
]

export default function Skills() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <ItemHeader title="BMC Helix (Remedy)" />
      {/* <div className="grid gap-2 grid-cols-1 md:grid-cols-2"> */}
      <div className="">
        <Item title="Development" titleCenter bullets={skills} />
      </div>
      <ItemHeader title="Web Development" />
      <ItemHeader title="Data Management" />
    </div>
  )
}
