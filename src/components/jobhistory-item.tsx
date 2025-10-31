import type { JobDescription } from "@/data/jobhistory-data"
import { Calendar, Dot } from "lucide-react"

export default function JobHistoryItem({
  jobDescriptions,
}: { jobDescriptions: JobDescription[] }) {

  return (
    <div className="relative px-1 py-2 space-y-1 rounded-sm bg-gray-800">
      {jobDescriptions.map((job, jobIndex) => (
        <div key={'jd' + jobIndex} className="">
          <h5 className="text-slate-100 font-semibold">{job.title}</h5>
          <p className="inline-flex items-center border-b-2 my-1 pb-1 w-full">
            <span className="mr-1"><Calendar size={15} /></span>{job.dateFrom} - {job.dateTo}</p>
          {job.responsibilities.map((responsibility, responsibilityIndex) => (
            <p key={'jr' + responsibilityIndex} className="inline-flex items-baseline">
              <span className="mr-1"><Dot size={15} /></span>{responsibility}</p>
          ))}
        </div>
      ))}
    </div>
  )
}