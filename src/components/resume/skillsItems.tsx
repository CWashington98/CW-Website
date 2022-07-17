interface ResumeExperience {
  company: string;
  role: string;
  description: string[];
  start: string;
  end: string;
}

interface CloudCertifcation {
  provider: string;
  name: string;
  level: string;
  expirationDate: string;
  url: string;
}

export const WorkExperience: ResumeExperience[] = [
  {
    company: "Accenture",
    role: "Technology Architecture Analyst",
    description: [
      "Designed and Developed Proof of Concept Financial Services applications using a novel Cloud Native Core Banking system - Thought Machine",
      "Assisted in the training and certification of 5 other developers in Thought Machine Vault Fundamentals",
      "Configured and Implemented Minimum Viable Product US Checkings and Savings Accounts with industry-leading customizabiliy using Thought Machine for an international top-ranking Financial Services company.",
    ],
    start: "August 2021",
    end: "Present",
  },
  {
    company: "CodeHouse Solutions, LLC",
    role: "Co-Founder",
    description: [
      "Designed and developed a Cloud Native Process Automation script for a locally renowned Auto Dealership in the Northern Virginia area",
      "Converted a 32-hour manual task to a 3-hour automated task with no human intervention necessary saving the comapny $640/month",
    ],
    start: "June 2021",
    end: "Present",
  },
];

export const Languages: string[] = [
  "Python",
  "TypeScript/JavaScript",
  "Java",
  "C/C++",
];

export const Frameworks: string[] = [
  "React",
  "Angular",
  "NextJS",
  "React Native",
  "Android Studio",
  "Django",
  "Flask",
];

export const CloudCertifications: CloudCertifcation[] = [
  {
    provider: "AWS",
    name: "Solution Architect",
    level: "Associate",
    expirationDate: "4/22/2025",
    url: "https://www.credly.com/badges/a8641cff-54ef-4251-8d97-168df6f24909/public_url",
},
];