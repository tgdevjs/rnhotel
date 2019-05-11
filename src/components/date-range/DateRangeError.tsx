import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  startDay: string | null;
  endDay: string | null;
};

const styles = StyleSheet.create({
  Container: {
    alignItems: "center",
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10
  },
  text: {
    color: "dodgerblue",
    fontSize: 20,
    fontWeight: "600"
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
