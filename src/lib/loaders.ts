import type { ContentItemBullet } from "@/components/content-item"
import { remedySkills, devSkills, osSkills } from "@/data/skills-data"

export type Records = {
  _remedySkills: ContentItemBullet[]
  _devSkills: ContentItemBullet[]
  _osSkills: ContentItemBullet[]
}

export async function loadSkills(): Promise<Records> {
  return new Promise((resolve) => {
    setTimeout(() => {
      let records: Records = {
        _remedySkills: remedySkills,
        _devSkills: devSkills,
        _osSkills: osSkills
      }
      resolve(records)
    }, 1500)
  })
}