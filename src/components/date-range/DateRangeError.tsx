import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors } from "../../styles";

type Props = {
  startDay: string | null;
  endDay: string | null;
};

const styles = StyleSheet.create({
  Container: {
    alignItems: "center",
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10
  },
  text: {
    color: colors.dogerBlue,
    fontSize: 20,
    fontWeight: "bold"
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
