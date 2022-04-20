import React, { useMemo } from 'react';
import { createTheme, ThemeProvider, StyledEngineProvider, ThemeOptions, responsiveFontSizes, PaletteColor } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { INITIAL_THEME } from './configTheme';

const AppThemeProvider = ({ children }) => {
  // const theme = useMemo(() => (state.darkMode ? createTheme(DARK_THEME) : createTheme(INITIAL_THEME)));
  console.log(INITIAL_THEME);
  // const themeOptions = useMemo(
  //   () => (INITIAL_THEME),
  //   []
  // );
  const themeOptions = INITIAL_THEME;

  // let theme = responsiveFontSizes(createTheme(themeOptions));
  let theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export { AppThemeProvider, INITIAL_THEME };
