
function AboutMeTitle({ title }: { title: string }) {
  return (
    <div className="bg-slate-500 rounded-sm pl-0.5">
      <h3 className="text-xl">{title}</h3>
    </div>
  )
}

function PersonalInfoItem({ title, value, isLink = false }: { title: string, value: string, isLink?: boolean }) {
  return (
    <div>
      <h5 className="text-slate-100 font-semibold">{title}</h5>
      {isLink ? (
        <a className="text-slate-300" href={value} target="_blank">{value}</a>
      ) : (
        <h5 className="text-slate-300">{value}</h5>
      )}
    </div>
  )
}

function SkillsItem({ skill, level }: { skill: string, level: string }) {
  return (
    <div>
      <h5 className="text-slate-100 font-semibold">{skill}</h5>
      <h5 className="text-slate-300">{level}</h5>
    </div>
  )
}

export default function AboutMe() {
  return (
    <div className="flex flex-col gap-3">
      <div className="space-y-1">
        <h4 className="text-lg text-orange-300">Senior BMC Helix Remedy Developer</h4>
        <h4 className="text-lg text-orange-300">Senior Integration Specialist</h4>
      </div>
      <AboutMeTitle title="Personal Info" />
      <div className="space-y-3">
        <PersonalInfoItem title="Email" value="xxxxxxxx@gmail.com" />
        {/* <PersonalInfoItem title="Phone" value="+27 83 294-1742" /> */}
        <PersonalInfoItem title="GitHub" value="https://github.com/openXapps" isLink={true} />
        <PersonalInfoItem title="Demographics" value="Caucasian male" />
        <PersonalInfoItem title="Country / Province" value="South Africa, Gauteng" />
        {/* <PersonalInfoItem title="Province" value="Gauteng" /> */}
        <PersonalInfoItem title="Age" value="##" />
      </div>
      <AboutMeTitle title="Skills" />

      <AboutMeTitle title="Languages" />
    </div>
  )
}
