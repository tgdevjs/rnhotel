import React from "react";
import { StyleSheet, Text, View } from "react-native";
import moment from "moment";

import { Nights, SingleDate } from ".";

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
    fontSize: 50,
    fontWeight: "bold"
  },
  dateContainerLeft: {
    justifyContent: "flex-end"
  },
  nightsColumn: {
    justifyContent: "center"
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
        {!endDay ? (
          <>
            <Text style={styles.dashText}> - </Text>
            <View style={styles.datePlaceholder} />
          </>
        ) : (
          <>
            <View style={styles.nightsColumn}>
              <Nights nightsTotal={moment(endDay).diff(startMoment, "days")} />
            </View>
            <SingleDate
              containerStyle={null}
              date={endDay}
              textStyle={dateTextStyle}
            />
          </>
        )}
      </View>
    </View>
  );
};
