import React from "react";
import { StyleSheet, Text, View } from "react-native";
import moment from "moment";

import { SingleDate } from ".";

type Props = {
  dateTextStyle: object;
  endDay: string | null;
  startDay: string;
  style: object;
};

const styles = StyleSheet.create({
  datesContainer: {
    alignItems: "center"
  },
  dates: {
    flexDirection: "row"
  },
  datePlaceholder: {
    flex: 1,
    flexDirection: "row"
  },
  dashText: {
    fontSize: 40,
    fontWeight: "600"
  },
  dateContainerLeft: {
    justifyContent: "flex-end"
  }
});

export const DateRange = ({
  dateTextStyle,
  endDay,
  startDay,
  style
}: Props) => {
  const startMoment = moment(startDay);

  return (
    <View style={[styles.datesContainer, style]}>
      <View style={styles.dates}>
        <SingleDate
          containerStyle={styles.dateContainerLeft}
          date={startDay}
          textStyle={dateTextStyle}
        />
        <Text style={[styles.dashText, dateTextStyle]}> - </Text>
        {!endDay ? (
          <View style={styles.datePlaceholder} />
        ) : (
          <SingleDate
            containerStyle={null}
            date={endDay}
            textStyle={dateTextStyle}
          />
        )}
      </View>
    </View>
  );
};
