import type { SkillsItemBullet } from "@/data/skills-data"
import { remedySkills, devSkills, osSkills } from "@/data/skills-data"
import { jobDescriptions, type JobDescription } from "@/data/jobhistory-data"

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

export async function loadJobDescriptions(): Promise<JobDescription[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      let records: JobDescription[] = jobDescriptions
      resolve(records)
    }, 500)
  })
}