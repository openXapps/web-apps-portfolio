import ContentItemHeader from '@/components/content-item-header';
import ContentItem from '@/components/content-item';
import { remedySkills, webDevSkills, dataSkills } from "@/data/skills-data"

export default function Skills() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <ContentItemHeader title="BMC Helix (Remedy)" />
      <div className="">
        <ContentItem title="Development & Operational Abilities" titleCenter bullets={remedySkills} />
      </div>
      <ContentItemHeader title="Web Development" />
      <div className="flex flex-col gap-1">
        <ContentItem titleCenter bullets={webDevSkills} />
        <ContentItem title="ReactJS Projects" value="https:openapps.co.za" isLink />
      </div>
      <ContentItemHeader title="Data Management" />
      <div className="">
        <ContentItem title="Development & Operational Abilities" titleCenter bullets={dataSkills} />
      </div>
    </div>
  )
}
