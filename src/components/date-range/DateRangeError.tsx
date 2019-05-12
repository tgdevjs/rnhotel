import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { borderRadius, colors, fonts, spacing } from "../../styles";

type Props = {
  startDay: string | null;
  endDay: string | null;
};

const styles = StyleSheet.create({
  Container: {
    alignItems: "center",
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: borderRadius.large,
    padding: spacing
  },
  text: {
    color: colors.dogerBlue,
    ...fonts.H3
  },
  messageContainer: {
    flexDirection: "row"
  }
});

export const DateRangeError = ({ endDay, startDay }: Props) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.text}>Invalid dates</Text>
      <View style={styles.messageContainer}>
        <Text>{startDay}</Text>
        <Text>to</Text>
        <Text>{endDay}</Text>
      </View>
    </View>
  );
};
