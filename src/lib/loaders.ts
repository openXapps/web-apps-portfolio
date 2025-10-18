import type { SkillsItemBullet } from "@/data/skills-data"
import { remedySkills, devSkills, osSkills } from "@/data/skills-data"
import type { Responsibility } from "@/data/jobhistory-data"
import { responsibilities } from "@/data/jobhistory-data"

type SkillRecords = {
  _remedySkills: SkillsItemBullet[]
  _devSkills: SkillsItemBullet[]
  _osSkills: SkillsItemBullet[]
}

export async function loadSkills(): Promise<SkillRecords> {
  return new Promise((resolve) => {
    setTimeout(() => {
      let records: SkillRecords = {
        _remedySkills: remedySkills,
        _devSkills: devSkills,
        _osSkills: osSkills
      }
      resolve(records)
    }, 500)
  })
}

type ResponsibilityRecords = {
  responsibilities: Responsibility[]
}

export async function loadResponsibilities(): Promise<ResponsibilityRecords> {
  return new Promise((resolve) => {
    setTimeout(() => {
      let records: ResponsibilityRecords = {
        responsibilities: responsibilities,
      }
      resolve(records)
    }, 500)
  })
}