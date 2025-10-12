
import { useLoaderData } from "react-router"

import ContentItemHeader from '@/components/content-item-header'
import ContentItem from '@/components/content-item'
import type { loadSkills } from "@/lib/loaders"

export default function Skills() {
  const { _remedySkills, _devSkills, _osSkills } = useLoaderData<typeof loadSkills>()

  return (
    <div className="flex flex-col gap-3 w-full">
      <ContentItemHeader title="BMC Helix (Remedy)" />
      <div className="">
        <ContentItem title="Development & Operational Abilities" titleCenter bullets={_remedySkills} />
      </div>
      <ContentItemHeader title="Development Platforms" />
      <div className="flex flex-col gap-1">
        <ContentItem titleCenter bullets={_devSkills} />
        <ContentItem title="ReactJS Projects" value="https://openapps.co.za" isLink />
      </div>
      <ContentItemHeader title="Operating Systems" />
      <div className="">
        <ContentItem bullets={_osSkills} />
      </div>
    </div>
  )
}
