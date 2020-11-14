import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import orange from "@material-ui/core/colors/orange";

let theme = createMuiTheme({
  palette: {
    primary: orange,
  },
});

theme = responsiveFontSizes(theme);

export default theme;
