import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import orange from "@material-ui/core/colors/orange";

let theme = createMuiTheme({
  typography: {
    fontWeightRegular: 600,
  },
  palette: {
    primary: orange,
  },
});

theme = responsiveFontSizes(theme);

export default theme;
