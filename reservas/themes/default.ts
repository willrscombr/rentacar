import { createTheme, PaletteMode } from "@mui/material";
import { amber, blue, deepOrange, green, grey, orange, purple, red } from "@mui/material/colors";
import { palette } from "@mui/system";


export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: purple,
        background: {
          default: "#e4f0e2"
        }
      },
    
});


export const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            primary: amber,
            divider: amber[200],
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
            ...palette
          }
        : {
            // palette values for dark mode
            primary: deepOrange,
            divider: deepOrange[700],
            background: {
              default: deepOrange[900],
              paper: deepOrange[900],
            },
            text: {
              primary: '#fff',
              secondary: grey[500],
            },
            ...palette
          }),
    },
  });
  