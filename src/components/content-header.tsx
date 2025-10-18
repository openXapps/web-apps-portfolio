export default function ContentHeader({ title }: { title: string }) {
  return (
    <div className="bg-slate-500 rounded-sm px-0.5 py-2 text-center">
      <h3 className="text-xl">{title}</h3>
    </div>
  )
}
