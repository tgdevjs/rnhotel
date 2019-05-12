export const colors = {
  black: "#000",
  blackAlpha: "#00000099",
  darkGray: "#a9a9a9",
  gray: "#C3C3C3",
  white: "#eee",
  lightBlue: "#add8e6",
  lightSkyBlue: "#87cefa",
  dogerBlue: "#1E90FF",
  blueAlpha: "#3b599888",
  red: "#FF0000"
};

export const spacing = 10;

const fontWeights = {
  regular: "regular",
  bold: "bold"
};

const typeSizes = [80, 48, 36, 24, 20, 16];

export const fonts = {
  H1: {
    color: colors.black,
    fontSize: typeSizes[2],
    fontWeight: fontWeights.bold,
    lineHeight: 48
  },
  H2: {
    color: colors.black,
    fontSize: typeSizes[3],
    fontWeight: fontWeights.bold,
    lineHeight: 36
  },
  H3: {
    color: colors.black,
    fontSize: typeSizes[4],
    fontWeight: fontWeights.regular,
    lineHeight: 24
  },
  Body: {
    color: colors.black,
    fontSize: typeSizes[5],
    fontWeight: fontWeights.regular,
    lineHeight: 24
  }
};

export default {
  colors,
  fonts,
  spacing
};
