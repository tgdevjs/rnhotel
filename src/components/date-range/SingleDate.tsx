import React from "react";
import { StyleSheet, Text, View } from "react-native";
import moment from "moment";

type Props = {
  containerStyle: object | null;
  date: string;
  textStyle: object;
};

const styles = StyleSheet.create({
  dateText: {
    fontSize: 40,
    fontWeight: "600"
  },
  dateContainer: {
    flex: 1,
    flexDirection: "row"
  },
  dayContainer: {
    justifyContent: "center"
  }
});

export const SingleDate = ({ containerStyle, date, textStyle }: Props) => {
  const dateMoment = moment(date);

  return (
    <View style={[styles.dateContainer, containerStyle]}>
      <Text style={[styles.dateText, textStyle]}>
        {dateMoment.format("DD")}
      </Text>
      <View style={styles.dayContainer}>
        <Text>{dateMoment.format("ddd")}</Text>
        <Text>{dateMoment.format("MMM")}</Text>
      </View>
    </View>
  );
};
