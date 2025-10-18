import { useLoaderData } from "react-router"

import ContentHeader from "@/components/content-header"
import SkillsItem from "@/components/skills-item"
import type { loadSkills } from "@/lib/loaders"

export default function Skills() {
  const { _remedySkills, _devSkills, _osSkills } = useLoaderData<typeof loadSkills>()

  return (
    <div className="flex flex-col gap-3 w-full">
      <ContentHeader title="BMC Helix (Remedy)" />
      <div className="">
        <SkillsItem title="Development & Operational Abilities" titleCenter bullets={_remedySkills} />
      </div>
      <ContentHeader title="Development Platforms" />
      <div className="flex flex-col gap-1">
        <SkillsItem titleCenter bullets={_devSkills} />
        <SkillsItem title="ReactJS Projects" value="https://openapps.co.za" isLink />
      </div>
      <ContentHeader title="Operating Systems" />
      <div className="">
        <SkillsItem bullets={_osSkills} />
      </div>
    </div>
  )
}
