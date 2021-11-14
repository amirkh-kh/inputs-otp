import fa from "vuetify/es5/locale/fa";

export default {
  rtl: true,
  options: {
    minifyTheme: true,
    themeCache: true,
    defaultAssets: {
      font: false,
      icons: false,
    },
    treeShake: true,
  },
  theme: {
    dark: true,
    themes: {
      dark: {
        base: "#4A6073",
        lightbase: "#bdd9d5",
        secondary: "#28292d", //"#1E2026",
        darkBlue: "#496073",
        primary: "#fff",
        headColor: "#4A6073", //"#AB8557",
        tertiary: "#4A6073", //"#AB8557",
        quaternary: "#6586a3",
        tradeCard: "#191919",
        success: "#02c076",
        lightbg: 'f7f8fa'
      },
      light: {
        base: "#4A6073",
        lightbase: "#bdd9d5",
        secondary: "#fafafa", //"#1E2026",
        darkBlue: "#496073",
        primary: "#ddd",
        headColor: "#4A6073", //"#AB8557",
        tertiary: "#4A6073", //"#AB8557",
        quaternary: "#6586a3",
        tradeCard: "#fafafa",
        success: "#02c076",
        lightbg: 'f7f8fa'
      },
    },
  },
  lang: {
    locales: { fa },
    current: "fa",
  },
};
