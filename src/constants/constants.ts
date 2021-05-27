import js from "../asset/javascript.png";
import aws from "../asset/aws.png";
import vscode from "../asset/vscode.png";
import typescript from "../asset/typescript.png";
import nodejs from "../asset/nodejs.png";
import jira from "../asset/jira.png";
import bitbucket from "../asset/bitbucket.png";
import bootstrap from "../asset/bootstrap.png";
import css from "../asset/css.png";
import dbeaver from "../asset/dbeaver.png";
import excel from "../asset/excel.png";
import google from "../asset/google.png";
import adobe from "../asset/adobe.png";
import html from "../asset/html.png";
import intelliJ from "../asset/intelliJ.png";
import npm from "../asset/npm.png";
import outlook from "../asset/outlook.png";
import postgresql from "../asset/postgresql.png";
import postman from "../asset/postman.png";
import react from "../asset/react.png";
import sass from "../asset/sass.png";
import storybook from "../asset/storybook.png";
import teams from "../asset/teams.png";
import zeplin from "../asset/zeplin.png";

export const softwareLogos = [
  {
    label: "JavaScript",
    name: js,
    startMotion: "upward",
  },
  {
    label: "TypeScript",
    name: typescript,
    startMotion: "downward",
  },
  {
    label: "AWS",
    name: aws,
    startMotion: "upward",
  },
  {
    label: "Visual Studio Code",
    name: vscode,
    startMotion: "downward",
  },
  {
    label: "Node.js",
    name: nodejs,
    startMotion: "upward",
  },
  {
    label: "Excel",
    name: excel,
    startMotion: "downward",
  },
  {
    label: "Dbeaver",
    name: dbeaver,
    startMotion: "upward",
  },
  {
    label: "Bootstrap",
    name: bootstrap,
    startMotion: "downward",
  },
  {
    label: "CSS",
    name: css,
    startMotion: "upward",
  },
  {
    label: "Adobe",
    name: adobe,
    startMotion: "downward",
  },
  {
    label: "Bitbucket",
    name: bitbucket,
    startMotion: "upward",
  },
  {
    label: "Outlook",
    name: outlook,
    startMotion: "downward",
  },
  {
    label: "IntelliJ",
    name: intelliJ,
    startMotion: "upward",
  },
  {
    label: "HTML 5",
    name: html,
    startMotion: "downward",
  },
  {
    label: "SASS",
    name: sass,
    startMotion: "upward",
  },
  {
    label: "Node Package Manager",
    name: npm,
    startMotion: "downward",
  },
  {
    label: "PostgreSQL",
    name: postgresql,
    startMotion: "upward",
  },
  {
    label: "Postman API",
    name: postman,
    startMotion: "downward",
  },
  {
    label: "React",
    name: react,
    startMotion: "upward",
  },
  {
    label: "Storybook",
    name: storybook,
    startMotion: "downward",
  },
  {
    label: "Teams",
    name: teams,
    startMotion: "upward",
  },
  {
    label: "Zeplin",
    name: zeplin,
    startMotion: "downward",
  },
  {
    label: "Jira",
    name: jira,
    startMotion: "upward",
  },
  {
    label: "G Suite",
    name: google,
    startMotion: "downward",
  },
];

export const headerConstants = {
  EMAIL: "ubah.davidt@gmail.com",
  MOBILE_NUMBER: "848-467-1358",
  UNIVERSITY: "Kean University, Union New Jersey",
  DEGREE: "Bachelor of Science in Computer Science/Information System",
  COLLEGE_TIMELINE: "(September 2012 - May 2017)",
  SUMMARY_DESCRIPTION:
    "I am a software developer with experience building front-end applications using React, Redux, Bootstrap, HTML and CSS. I have also developed server-side applications using technologies such as Node.js, Express, Spring, and Hibernate. Additionally, I have worked in collaborative environments following Agile and engaged in a lot of DevOps practices using technologies such as AWS Codebuild, AWS EC2, Jenkins and Git",
};

export const frontEndstate = {
  labels: [
    "HTML (yr. of EXP)",
    "React (yr. of EXP)",
    "Bootstrap (yr. of EXP)",
    "Redux (yr. of EXP)",
    "CSS (yr. of EXP)",
  ],
  datasets: [
    {
      label: "Front End",
      backgroundColor: ["#B21F00", "#C9DE00", "#2FDE00", "#00A6B4", "#6800B4"],
      hoverBackgroundColor: [
        "#501800",
        "#4B5000",
        "#175000",
        "#003350",
        "#35014F",
      ],
      data: [5, 2, 2, 2, 5],
    },
  ],
};

export const middleTierState = {
  labels: [
    "Spring (yr. of EXP)",
    "Node.js (yr. of EXP)",
    "Express (yr. of EXP)",
    "Spring MVC (yr. of EXP)",
    "Spring AOP (yr. of EXP)",
  ],
  datasets: [
    {
      label: "Middle-Tier",
      backgroundColor: ["#B21F00", "#C9DE00", "#2FDE00", "#00A6B4", "#6800B4"],
      hoverBackgroundColor: [
        "#501800",
        "#4B5000",
        "#175000",
        "#003350",
        "#35014F",
      ],
      data: [1, 2, 2, 1, 1],
    },
  ],
};

export const backEndState = {
  labels: [
    "JDBC (yr. of EXP)",
    "Spring Data (yr. of EXP)",
    "Hibernate (yr. of EXP)",
    "PostgreSQL (yr. of EXP)",
    "Node-postgres (yr. of EXP)",
  ],
  datasets: [
    {
      label: "Back End",
      backgroundColor: ["#B21F00", "#C9DE00", "#2FDE00", "#00A6B4", "#6800B4"],
      hoverBackgroundColor: [
        "#501800",
        "#4B5000",
        "#175000",
        "#003350",
        "#35014F",
      ],
      data: [1, 1, 1, 2, 2],
    },
  ],
};

export const languageState = {
  labels: [
    "JavaScript (yr. of EXP)",
    "TypeScript (yr. of EXP)",
    "Java (yr. of EXP)",
    "HTML/CSS (yr. of EXP)",
    "SQL (yr. of EXP)",
  ],
  datasets: [
    {
      label: "Languages",
      backgroundColor: ["#B21F00", "#C9DE00", "#2FDE00", "#00A6B4", "#6800B4"],
      hoverBackgroundColor: [
        "#501800",
        "#4B5000",
        "#175000",
        "#003350",
        "#35014F",
      ],
      data: [2, 2, 1, 5, 2],
    },
  ],
};

export const devOpsState = {
  labels: [
    "AWS (yr. of EXP)",
    "Jenkins (yr. of EXP)",
    "Maven (yr. of EXP)",
    "Amazon EC2 (yr. of EXP)",
    "CodeBuild (yr. of EXP)",
  ],
  datasets: [
    {
      label: "DevOps",
      backgroundColor: ["#B21F00", "#C9DE00", "#2FDE00", "#00A6B4", "#6800B4"],
      hoverBackgroundColor: [
        "#501800",
        "#4B5000",
        "#175000",
        "#003350",
        "#35014F",
      ],
      data: [1, 1, 1, 1, 1],
    },
  ],
};

export const productivityState = {
  labels: [
    "Jira (yr. of EXP)",
    "Excel (yr. of EXP)",
    "Pivotal (yr. of EXP)",
    "Fun Retro (yr. of EXP)",
    "Zeplin (yr. of EXP)",
  ],
  datasets: [
    {
      label: "Productivity Tools",
      backgroundColor: ["#B21F00", "#C9DE00", "#2FDE00", "#00A6B4", "#6800B4"],
      hoverBackgroundColor: [
        "#501800",
        "#4B5000",
        "#175000",
        "#003350",
        "#35014F",
      ],
      data: [2, 5, 2, 2, 2],
    },
  ],
};


export const experienceInfo = [{
  company:"Key Bank",
    location:"Cleveland Ohio",
    timeline:"March 2021 – Current",
    project:"Key Bank Web/Mobile Application",
    role:"Software Developer",
    projectDescription:"This is a web and mobile banking application following existing banking policies and operations integrated with an authentication middleware (Transmit)",
    responsiblities: [
      "Provide ongoing maintenance and enhancements in existing systems and platforms.",
      "Develop single page application using React.js, Bootstrap, SASS, and Redux.",
      "Develop, maintain, and orchestrate authentication journeys using Transmit.",
      "Monitoring the application activities, logs, and events using Kibana.",
      "Software development following the agile methodology.Cross-functional collaborations with data scientists, business users, project managers and other engineers to aid production.",
      "Run automated code quality checks, unit tests, and code coverage tools using ES-lint, Jest, Mocha to achieve continuous integration.",
      "Protecting confidential information to support operations.",
      "Cross-functional collaborations with data scientists, business users, project managers, testers, and engineers to aid production.",
      "Create technical documentation as required in the form of technical specifications, and project artifacts.",
      "Develop and discuss best practices for manual code reviews."
    ]
},{
    company:"College Board",
    location:"Reston Virginia",
    timeline:"August 2019 – August 2020",
    project:"Send Scores Application",
    role:"Software Developer",
    projectDescription:"This application provides the ability to send pending or available SAT scores to colleges using existing and new policies",
    responsiblities: [
      "Provide ongoing maintenance and enhancements in existing systems and platforms.",
      "Software development using agile methodology.",
      "Run automated code quality checks, unit tests and code coverage tools using ES-lint, Jest, Mocha in order to achieve continuous integration.",
      "Protecting confidential information to support operations.",
      "Cross-functional collaborations with data scientists, business users, project managers and other engineers to aid production.",
      "Creating and documenting algorithms using flowcharts, layouts, diagrams, and charts.",
      "Develop and discuss best practices for manual code reviews."
    ]
}]