const black = "#000000";

const colors = {
  white: "#ffffff",
  softWhite: "#f5f5f5",
  softerWhite: `#e5e5e5`,
  black,
  softBlack: `${black}cc`,
  softerBlack: `${black}66`,
  pallete: {
    splitComplementary: {
      primary: "#eb4fed",
      complementary: "#51ed4f",
      left: "#9fed4f",
      right: "#4fed9f",
    },
  },
};

const theme = {
  colors,
  backgroundColor: colors.softWhite,
};

export type Theme = typeof theme;

export default theme;
