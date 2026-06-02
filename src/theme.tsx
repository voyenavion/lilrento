import { createTheme } from "@mui/material/styles";
import kulim from "./assets/fonts/KulimPark-ExtraLight.ttf";

// A custom theme for this app

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main:'#1d7dd1ff'
    }
  },
  typography: {
    fontFamily: 'kulim-park-extra-light',
    fontSize: 20
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: "kulim-park-extra-light";
        src: local("kulim-park-extra-light"),
        url(${kulim}) format("truetype");
      }
      `
    }
  }
})

theme = createTheme(theme, {
  palette: {
    something: theme.palette.augmentColor({
      color: {
        main: '#242424ff'
      },
      name: 'something'
    })
  }
})

export default theme;
