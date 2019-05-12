import React from "react";
import { StyleSheet, Text } from "react-native";

import { colors, fonts } from "../styles";

type Props = {
  style?: object;
  title: string;
};

const styles = StyleSheet.create({
  title: {
    ...fonts.H3,
    color: colors.white,
    textAlign: "center"
  }
});

export const HotelTitle = ({ style, title }: Props) => {
  return <Text style={[styles.title, style]}>{title}</Text>;
};
