export type JobDescription = {
  companyId: number
  title: string
  dateFrom: string
  dateTo: string
  responsibilities: string[]
}

export const jobDescriptions: JobDescription[] = [
  {
    companyId: 1,
    title: "Integration Specilist",
    dateFrom: "1 June 2017",
    dateTo: "today",
    responsibilities: [
      "We are a team of 11 people and I'm one of 3 lead developers.",
      "My primary role changed to integration specialist. Automation plays a big part of Bank processes and I'm mostly responsible for all foundation data, CMDB and complex service request automation.",
      "As a technology motivated company, users wanted to operate Remedy (ITSM) via mobile. This inspiered me to build a lightweight React JS progressive web application (PWA) that allows users to connect to Remedy via their mobile devices. The PWA authenticates via Remedy Single Sign-On (RSSO), redirecting the user to Azure SSO and back to the PWA landing page.",
    ]
  },
  {
    companyId: 1,
    title: "Technical Specialist",
    dateFrom: "1 June 2017",
    dateTo: "1 June 2019",
    responsibilities: [
      "We are a team of 11 people and I'm one of 3 lead developers.",
    ]
  },
  {
    companyId: 2,
    title: "Senior Remedy Consultant",
    dateFrom: "1 January 2015",
    dateTo: "31 May 2017",
    responsibilities: [
      "Company startup with myself as director & technical consultant.",
      "Primary contract was with Standard Bank South Africa. During this time I was part of a team ",
    ]
  },
  {
    companyId: 3,
    title: "Senior Remedy Consultant",
    dateFrom: "1 January 2015",
    dateTo: "31 May 2017",
    responsibilities: [
      "Company startup with myself as director & technical consultant.",
    ]
  },
]