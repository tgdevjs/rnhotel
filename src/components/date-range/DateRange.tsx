import React from "react";
import { StyleSheet, Text, View } from "react-native";
import moment from "moment";

import { SingleDate } from ".";

type Props = {
  containerStyle?: object;
  dateTextStyle?: object | null;
  endDay: string | null;
  startDay: string;
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
  containerStyle,
  dateTextStyle = null,
  endDay,
  startDay
}: Props) => {
  const startMoment = moment(startDay);

  return (
    <View style={[styles.datesContainer, containerStyle]}>
      <View style={styles.dates}>
        <SingleDate
          containerStyle={styles.dateContainerLeft}
          date={startDay}
          textStyle={dateTextStyle}
        />
        <Text style={styles.dashText}> - </Text>
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