import React from "react";
import { StyleSheet, Text } from "react-native";

type Props = {
  style?: object;
  title: string;
};

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center"
  }
});

export const HotelTitle = ({ style, title }: Props) => {
  return <Text style={[styles.title, style]}>{title}</Text>;
};
