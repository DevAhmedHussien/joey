'use client';
import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          500: "#666666",
        },
        primary: {
          100: "#001028d9", // backGround
          200: "#ffffff", // text for greeting
          300: "#3399ff", // one blue word
          400: "#e5eaf299", // border
          500: "#9DBC98", // border hover #3399ff
          600: "linear-gradient(to top right, rgba(235, 245, 255, 0.3) 40%, rgba(243, 246, 249, 0.2) 100%)", // hover
          700: "#3399ff", // icons cards
          800: `linear-gradient(to right bottom, #007fff, blue 120%)`, // button background
          900: "#6b7a9061", // UNDER LINE SENTENCE
          950: "#253546", // cards inner About me, experience, projects, and contact me
          1000: "linear-gradient(rgb(77 181 255), #cdcdcd00)", // background photo header
          1050: '#eee',
          1100: 'rgba(0, 0, 0, 0.1) 0px 20px 25px, rgba(0, 0, 0, 0.04) 0px 10px 10px',
          1500: 'black',
          1600: '#e48a81',
        },
      }
    : {
        grey: {
          500: "#666666",
        },
        primary: {
          100: "#ffffff", // backGround fffff
          200: "#001d4a", // text for greeting
          300: "#3399ff", // one blue word
          400: "#eee",
          500: "#eee", // manually changed #141b2d
          600: "#1F2A40",
          700: "#727681",
          800: "#a1a4ab",
          900: "#ebebeb99",
          1000: "linear-gradient(silver, white)",
          1050: 'black',
          1100: '-1px 2px 10px 0px #3399ff',
          1500: '#f5f5f5',
          1600: '#e48a81',
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.grey[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.grey[500],
            },
          }),
    },
    typography: {
      fontFamily: 'Italiana, serif',
      fontWeightLight: 500,
      fontSize: 15,
      h1: {
        fontFamily: 'Italiana, serif',
        fontWeight: 500,
        fontSize: '3rem', // Responsive size for h1
        lineHeight: 1.1,  // Compact line height
        letterSpacing: '0.02em',
        '@media (max-width:600px)': { // Mobile adjustments
          fontSize: '2.2rem',
        },
      },
      h2: {
        fontFamily: 'Italiana, serif',
        fontWeight: 400,
        fontSize: '2.5rem',
        lineHeight: 1.15,
        letterSpacing: '0.02em',
        '@media (max-width:600px)': { // Mobile adjustments
          fontSize: '1.7rem',
        },
      },
      h3: {
        fontFamily: 'Italiana, serif',
        fontWeight: 300,
        fontSize: '2rem',
        lineHeight: 1.2,
        letterSpacing: '0.01em',
        '@media (max-width:600px)': { // Mobile adjustments
          fontSize: '1.5rem',
        },
      },
      h4: {
        fontFamily: 'Italiana, serif',
        fontWeight: 200,
        fontSize: '1.5rem',
        lineHeight: 1.25,
        letterSpacing: '0.01em',
        '@media (max-width:600px)': { // Mobile adjustments
          fontSize: '1.3rem',
        },
      },
      h5: {
        fontFamily: 'Italiana, serif',
        fontWeight: 100,
        fontSize: '1.25rem',
        lineHeight: 1.3,
        letterSpacing: '0.01em',
        '@media (max-width:600px)': { // Mobile adjustments
          fontSize: '1.2rem',
        },
      },
      h6: {
        fontFamily: 'Italiana, serif',
        fontWeight: 100,
        fontSize: '1.1rem',
        lineHeight: 1.35,
        letterSpacing: '0.01em',
        '@media (max-width:600px)': { // Mobile adjustments
          fontSize: '1rem',
        },
      },
      body1: {
        fontFamily: 'Italiana, serif',
        fontSize: '1rem',
        lineHeight: 1.5,  // Compact line height for body text
        letterSpacing: '0.02em',
        '@media (max-width:600px)': { // Mobile adjustments
          fontSize: '0.9rem',
        },
      },
      body2: {
        fontFamily: 'Italiana, serif',
        fontSize: '0.875rem',
        lineHeight: 1.45,
        letterSpacing: '0.02em',
        '@media (max-width:600px)': { // Mobile adjustments
          fontSize: '0.8rem',
        },
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("light");
  const toggleColorMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, toggleColorMode, mode];
};