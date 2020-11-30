import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import orange from "@material-ui/core/colors/orange";

let theme = createMuiTheme({
  typography: {
    fontWeightRegular: 300,
    fontFamily: "europa, sans-serif",
  },
  palette: {
    primary: orange,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 420,
      md: 768,
      lg: 1224,
      xl: 1824,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
