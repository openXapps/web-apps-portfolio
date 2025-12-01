import ContentHeader from "@/components/content-header"
import OverviewItem from "@/components/overview-item"


export default function Home() {
  const age = new Date().getFullYear() - 1973
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="space-y-1 text-center">
        <h4 className="text-lg text-orange-300">BMC Helix (Remedy) Developer</h4>
        <h4 className="text-lg text-orange-300">& Integration Specialist</h4>
      </div>
      <ContentHeader title="Personal Info" />
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
        <OverviewItem title="Email Address" value="xxxxxxxx@gmail.com" showCopy titleCenter valueCenter />
        <OverviewItem title="Mobile Number" value="+27 ## ###-####" showCopy titleCenter valueCenter />
        <OverviewItem title="GitHub Home" value="https://github.com/openXapps" isLink={true} titleCenter valueCenter />
        <OverviewItem title="Age & Demographics" value={`${age} years old, caucasian male`} titleCenter valueCenter />
        <OverviewItem title="Country & Province" value="South Africa, Gauteng" titleCenter valueCenter />
      </div>
    </div>
  )
}
