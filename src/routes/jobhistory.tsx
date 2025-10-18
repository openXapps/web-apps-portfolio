import { useLoaderData } from "react-router"

import ContentHeader from "@/components/content-header"
import JobHistoryItem from "@/components/jobhistory-item"
import { loadResponsibilities } from "@/lib/loaders"

export default function JobHistory() {
  const { responsibilities } = useLoaderData<typeof loadResponsibilities>()

  return (
    <div className="flex flex-col gap-3 w-full">
      <ContentHeader title="Standard Bank South Africa" />
      <div className="">
        <JobHistoryItem title="Senior Remedy Developer" responsibilities={responsibilities} />
      </div>
    </div>
  )
}
