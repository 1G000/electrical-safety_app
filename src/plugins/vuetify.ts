// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import colors from "vuetify/util/colors";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: colors.orange.lighten5,
          secondary: colors.amber.accent2, // #FFD740
        },
      },
    },
  },
});
