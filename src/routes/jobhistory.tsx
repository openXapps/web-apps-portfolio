import { useLoaderData } from "react-router"

import ContentHeader from "@/components/content-header"
import JobHistoryItem from "@/components/jobhistory-item"
import { loadJobDescriptions } from "@/lib/loaders"

export default function JobHistory() {
  const data = useLoaderData<typeof loadJobDescriptions>()

  return (
    <div className="flex flex-col gap-3 w-full">
      <ContentHeader title="Standard Bank South Africa" />
      <div className="">
        <JobHistoryItem jobDescriptions={data.filter(v => (v.companyId === 1))} />
      </div>
      <ContentHeader title="Bellrock Consulting" />
      <div className="">
        <JobHistoryItem jobDescriptions={data.filter(v => (v.companyId === 2))} />
      </div>
    </div>
  )
}
