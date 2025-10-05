import { Item, ItemHeader } from '@/components/items';

export default function Skills() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <ItemHeader title="BMC Helix (Remedy)" />
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
        <Item title="Development" value="X" />
        <Item value="Some text with no title Some text with no title Some text with no title Some text with no title" showCopy />
      </div>
      <ItemHeader title="Web Development" />
      <ItemHeader title="Data Management" />
    </div>
  )
}
