import { createGlobalStyle } from "styled-components";

export const SEQUENCE_ITEMS = {
  all: [
    "Software Engineer",
    "Technology Consultant",
    "Infrastructure Engineer",
    "Solutions Architect",
    "Full-Stack Developer",
  ],
  top: ["Software", "Technology", "Infrastructure", "Solution", "Full-Stack"],
  bottom: ["Engineer", "Consultant", "Engineer", "Architect", "Developer"],
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
