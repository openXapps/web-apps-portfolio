export type SkillsItemBullet = {
  product: string
  experience: string[]
  level: "Novice/Beginner" | "Intermediate/Competent" | "Advanced/Proficient" | "Expert"
}

/**
 *  Novice/Beginner:        You are just starting to learn the skill and may need
 *                          guidance to complete tasks.
 *  Intermediate/Competent: You have moved past the basics and can complete tasks
 *                          with some independence, though you may still need help for complex issues.
 *  Advanced/Proficient:    You can complete tasks independently and are confident in handling
 *                          most situations. You can also help others with the skill.
 *  Expert:                 You are highly confident, can troubleshoot problems, and can guide or teach others.
 */

export const remedySkills: SkillsItemBullet[] = [
  {
    product: "BMC Remedy Core",
    experience: [
      "I've been building Remedy workflows since 1997.",
      "I support on-premises (v21.x), PaaS (v.25.x) & SaaS (v25.x) deployments.",
      "Some of my many strong points are to build stand-alone deployable application in Remedy, customize existing workflow by following best-practice guidelines and ability to troubleshoot the most complex issues.",
    ],
    level: "Expert"
  },
  {
    product: "BMC Atrium CMDB",
    experience: [
      "Maintaining a clean and accurate CMDB has been my passion from day one.",
      "As a perfectionist, I enforce strict data naming conventions and prevent CI duplication.",
      "I understand how important asset life-cycle management is for any organization. My best work has been the implementation a custom asset life-cycle process that flows seamlessly into ITSM Asset Management.",
      "BMC's out-the-box normalization is weak in a sense of managing product life-cycle. I've built an end-to-end product normalization and maintenance life-cycle deployable application in Remedy that flows seamlessly between CMDB and ITSM Foundation Data.",
      "The secret of a clean CMDB resides in the ability to use Atrium Integrator (Pentaho) for CI transformation, design structured datasets, implement an optimized normalization process and build well-defined reconciliation jobs.",
      "I have extensive knowledge of how to utilize a variety of data sources to populate and supplement CMDB CIs, including Asset Management. I'm familiar with BMC Discovery (ADDM), SCCM, SAP Asset Management and other data sources.",
    ],
    level: "Expert"
  },
  {
    product: "BMC Discovery (ADDM)",
    experience: [
      "My current employer uses BMC Discovery (ADDM) extensively. One of my many responsibilities, is to configure and maintain the ADDM environment with 4 other team members.",
      "I use ADDM as one of the BMC Atrium CMDB data sources. However its essential to control what flows into the CMDB and prevent CI duplication. I have mastered this process.",
    ],
    level: "Advanced/Proficient"
  },
  {
    product: "BMC Atrium Integrator (Pentaho)",
    experience: [
      "The secret in mastering ETL development is to respect naming conventions, modular reusable components and robust effective content.",
      "Anyone can build a Pentaho job and transformation, but not everyone can do it like a pro. I have mastered the art of true automation and data quality through Atrium Integrator (Pentaho).",
    ],
    level: "Expert"
  },
  {
    product: "BMC IT Service Management",
    experience: [
      "I've been supporting BMC Remedy ITSM since its first release.",
      "A healthy and robust ITSM deployment relies on quality foundation data and a complete CMDB.",
      "As seen in most organizations, the ITSM suite is not always acceptable for all processes. I prefer to build custom modules that are meta data driven and configurable. These custom modules plug seamlessly into the ITSM suite with very little overlays if needed.",
      "I'm currently seen as the custodian of my employer's ITSM foundation data. Its my responsibility to make sure clean and quality organizational data flows into Remedy. For that I've established reliable data sources which I read, transform and push to Remedy via BMC Atrium Integrator (Pentaho).",
      "My current employer has a great team of Service Request (SR) developers. I've been building full automation with Atrium Integrator (Pentaho) on almost all their SRs. Some are simple and some are extremely complex with REST APIs and 3rd party automation.",
    ],
    level: "Advanced/Proficient"
  },
]

export const devSkills: SkillsItemBullet[] = [
  {
    product: "ReactJS",
    experience: [
      "In 2016, I tough myself ReactJS. At the time I've already worked in NodeJS for a while.",
      "Since then I've been building ReactJS web apps as pet projects and kept up with the latest releases.",
      "I've adapted to using Vite as my build tool, Tailwind as my CSS framework, Shadcn as my component builder, React Router for routing and TypeScript as my preferred compiler.",
      "Unfortunately my day job does not require React development, but I did build my team a handy React Progressive Web Application (PWA) that authenticates into BMC Remedy RSSO and allow for a full mobile experience with a lightweight comprehensive ITSM management user interface.",
    ],
    level: "Advanced/Proficient"
  },
  {
    product: "NextJS",
    experience: [
      "I've been developing in NextJS since mid 2025.",
    ],
    level: "Intermediate/Competent"
  },
  {
    product: "Java & Spring Boot",
    experience: [
      "I've completed a number of Java and Spring Boot courses, but I haven't had the opportunity to use it in my place of work.",
      "I know enough about Java and Spring Boot development to build basic functional programs, but I'm not an expert.",
    ],
    level: "Novice/Beginner"
  },
]

export const osSkills: SkillsItemBullet[] = [
  {
    product: "Microsoft Windows",
    experience: [
      "I've been working in the Microsoft Windows operating system since Windows 95.",
    ],
    level: "Advanced/Proficient"
  },
  {
    product: "Linux",
    experience: [
      "I run a Linux operating system when and where ever possible. I prefer Linux over Windows.",
      "Whether its Linux for desktop to server, I've been working with this beautiful operating system since early 2000."
    ],
    level: "Advanced/Proficient"
  },
]
