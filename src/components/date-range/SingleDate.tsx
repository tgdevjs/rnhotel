import React from "react";
import { StyleSheet, Text, View } from "react-native";
import moment from "moment";
import { fonts } from "../../styles";

type Props = {
  containerStyle: object | null;
  date: string;
  textStyle: object | null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  dateText: fonts.H1,
  dateContainer: {
    justifyContent: "center"
  },
  dayContainer: {
    justifyContent: "center"
  }
});

export const SingleDate = ({ containerStyle, date, textStyle }: Props) => {
  const dateMoment = moment(date);

  return (
    <View style={[styles.container, containerStyle]}>
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
