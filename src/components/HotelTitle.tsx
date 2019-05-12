import React from "react";
import { StyleSheet, Text } from "react-native";

import { colors } from "../styles";

type Props = {
  style?: object;
  title: string;
};

const styles = StyleSheet.create({
  title: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export const HotelTitle = ({ style, title }: Props) => {
  return <Text style={[styles.title, style]}>{title}</Text>;
};
