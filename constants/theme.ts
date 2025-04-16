type ThemeColors = {
  primary: string;
  primaryDark: string;
  background: string;
  backgroundDark: string;
  backgroundDarkest: string;
  backgroundLight: string;
  gray: string;
  text: string;
  textLight: string;
  textDark: string;
  rose: string;
  roseLight: string;
};

type ThemeFonts = {
  medium: string;
  semibold: string;
  bold: string;
  extraBold: string;
};

type ThemeRadius = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};

type Theme = {
  colors: ThemeColors;
  fonts: ThemeFonts;
  radius: ThemeRadius;
};

export const lightTheme: Theme = {
  colors: {
    primary: "#D1193B",
    primaryDark: "#851127",
    background: "#f3f3f3",
    backgroundDark: "#ffffff",
    backgroundDarkest: "#ffffff",
    backgroundLight: "rgba(0,0,0,0.07)",
    gray: "#a1a1a1",
    text: "#2b2b2b",
    textLight: "#4a4a4a",
    textDark: "#000000",
    rose: "#ef4444",
    roseLight: "#f87171",
  },
  fonts: {
    medium: "500",
    semibold: "600",
    bold: "700",
    extraBold: "800",
  },
  radius: {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18,
    xxl: 22,
  },
};

export const darkTheme: Theme = {
  colors: {
    primary: "#D1193B",
    primaryDark: "#851127",
    background: "#2b2b2b",
    backgroundDark: "#1b1b1b",
    backgroundDarkest: "#000000",
    backgroundLight: "rgba(0,0,0,0.1)",
    gray: "#5b5b5b",
    text: "#e3e3e3",
    textLight: "#bfbfbf",
    textDark: "#ffffff",
    rose: "#ef4444",
    roseLight: "#f87171",
  },
  fonts: {
    medium: "500",
    semibold: "600",
    bold: "700",
    extraBold: "800",
  },
  radius: {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18,
    xxl: 22,
  },
};
