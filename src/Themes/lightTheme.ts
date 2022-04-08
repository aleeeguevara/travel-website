import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: '#7b68ff',
      light: '#6E5AFF',
      dark: '#003d6a',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#9C27B0',
      light: '#BA68C8',
      dark: '#7B1FA2',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#9C27B0',
      light: '#EAF4FC',
      dark: '#3322B2',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#4CAF50',
      light: '#7BC67E',
      dark: '#3B873E',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#F44336',
      light: '#F88078',
      dark:'#E31B0C',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FF9800',
      light: '#FFB547',
      dark:'#C77700',
      contrastText: '#FFFFFF',
    },
  },
  components:{
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2"
          },
          style: {
            fontSize: 11,
          },
        },
      ],
    }
  }
});