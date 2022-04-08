import { Box, ThemeProvider, Container, PaletteMode } from '@mui/material';
import React, { useState } from 'react';
import './App.css';
import { Cards } from './components/cards';
import { LightTheme } from './Themes/lightTheme';
import NavBar from './components/appBar';
import { DarkTheme } from './Themes/darkTheme';
// type Country = {
//   country: string,
//   url: string,
//   title: string,
// }
// type Destinations = {
//   countries: Country[];
// }

function App() {
  const [themeActual, setThemeActual] = useState(LightTheme);

  const themeOption: PaletteMode = themeActual.palette.mode;

  const turnDarkMode = (): void => {
    if (themeOption === 'light') setThemeActual(DarkTheme)
    else { 
      setThemeActual(LightTheme);
    }  
  };

  return (
    <ThemeProvider theme={themeActual}>
      <div>
        <NavBar turnDarkMode={turnDarkMode} themeOption={themeOption} />
        <Container>
          <Box margin={5}>
            <Cards />
          </Box>
        </Container>  
      </div>  
    </ThemeProvider>
  );
}

export default App;
