'use client';

import { ThemeProvider, CssBaseline } from "@mui/material";
import { ColorModeContext, useMode } from "@/theme/theme";

export default function ThemeProviderWrapper({ children }) {
  const [theme, toggleColorMode, mode] = useMode();
 
  return (
    <ColorModeContext.Provider value={{ toggleColorMode, mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
