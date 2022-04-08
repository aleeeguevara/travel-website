import { ThemeProvider, PaletteMode, GlobalStyles } from '@mui/material';
import React, { useState } from 'react';
import './App.css';
import { LightTheme } from './Themes/lightTheme';
import { DarkTheme } from './Themes/darkTheme';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DestinationTravel } from './pages/destination-travel';
import NavBar from './components/appBar';

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
      <GlobalStyles styles={{
        body: {backgroundColor: themeOption === 'light' ? '#f1f1f1' : '#222222' }
      }} />
      <BrowserRouter>
        <NavBar turnDarkMode={turnDarkMode} themeOption={themeOption} theme={themeActual} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route  path='/:id' element={<DestinationTravel />}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
