import { Item, ItemHeader } from '@/components/items';


export default function Home() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="space-y-1 text-center">
        <h4 className="text-lg text-orange-300">Senior BMC Helix Remedy Developer</h4>
        <h4 className="text-lg text-orange-300">Senior Integration Specialist</h4>
      </div>
      <ItemHeader title="Personal Info" />
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
        <Item title="Email Address" value="xxxxxxxx@gmail.com" showCopy />
        <Item title="Mobile Number" value="+27 ## ###-####" showCopy />
        <Item title="GitHub Home" value="https://github.com/openXapps" isLink={true} />
        <Item title="Demographics" value="Caucasian male" />
        <Item title="Country / Province" value="South Africa, Gauteng" />
        <Item title="Age" value="##" />
        <Item value="Some text with no title Some text with no title Some text with no title Some text with no title" showCopy />
      </div>
    </div>
  )
}
