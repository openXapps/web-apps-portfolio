import type { JobDescription } from "@/data/jobhistory-data"

export default function JobHistoryItem({
  jobDescriptions
}: {jobDescriptions: JobDescription[]}) {

  return (
    <div className="relative px-1 py-2 space-y-1 rounded-sm bg-gray-800">
      <h5 className="text-slate-100 font-semibold">{jobDescriptions[0].title}</h5>

      {jobDescriptions[0].responsibilities.map((v, i) => (
        <div key={i} className="flex gap-3">
          <p className="">-</p>
          <p className="">{v}</p>
        </div>
      ))}
    </div>
  )
}