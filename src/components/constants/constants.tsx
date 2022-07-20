import { createGlobalStyle } from "styled-components";

export const SEQUENCE_ITEMS: {
  all: string[];
  top: string[];
  bottom: string[];
} = {
  all: [
    "Software Engineer",
    "Technology Consultant",
    "Infrastructure Engineer",
    "Solution Architect",
    "Full-Stack Developer",
  ],
  top: ["Software", "Technology", "Infrastructure", "Solution", "Full-Stack"],
  bottom: ["Engineer", "Consultant", "Engineer", "Architect", "Developer"],
};

export const ABOUT_TEXT = {
  Intro: `
  I'm a Software Engineer from born and raised in Loudoun County, Virginia.\
  My passion for technology began with the best of the best - PlayStation 2.\
  Video games were my gateway to technology. 
  `,
  College: `
  I refined my passion for technology at Penn State as part of the Millennium Scholars Program.\
  I earned my B.S. in Computer Science from the College of Engineering with a Minor in African American Studies.\
  During my time at Penn State I crossed into Alpha Phi Alpha Fraternity, Inc. by way of the Gamma Nu Chapter.
  My other involvements focused on peer mentorship and giving back to the College of Engineering, the Millennium Scholars Program, and the Black Community at Penn State.\

  `,
  background: "",
  education: "",
};

export const COLORS = {
  EMERALD_ENTRANCE: {
    light: {
      primary: "#F4EBD0",
      secondary: "#122620",
      accent_gold: "#D6AD60",
      accent_tan: "#B68D40",
    },
    dark: {
      primary: "#122620",
      secondary: "#F4EBD0",
      accent_gold: "#D6AD60",
      accent_tan: "#B68D40",
    },
  },

  ARTISAN_DREAM: {
    dark: {
      primary: "#0B1F65",
      secondary: "#E8E3CC",
      accent_mimosa: "#D7A449",
      accent_cinnabar: "#DB3F29",
    },
    light: {
      primary: "#E8E3CC",
      secondary: "#0B1F65",
      accent_mimosa: "#D7A449",
      accent_cinnabar: "#DB3F29",
    },
  },
};

export const GlobalStyle = createGlobalStyle`
  body {
      margin: 0;
      padding: 0;
      background: ${COLORS.EMERALD_ENTRANCE.dark.secondary};
      font-family: Open-Sans, Helvetica, Sans-Serif;
    }
`;
