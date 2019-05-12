import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Swipeout from "react-native-swipeout";
import moment from "moment";

import { DateRange, HotelTitle, DateRangeError } from "../../components";
import { ReservationType } from "../../types";
import { borderRadius, colors, fonts, spacing } from "../../styles";

type Props = {
  item: ReservationType;
  onDeleteItem: (id: string) => void;
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: borderRadius.large,
    justifyContent: "center",
    marginHorizontal: spacing,
    height: 160
  },
  textContainer: {
    paddingLeft: 42
  },
  dateRange: {
    paddingBottom: spacing
  },
  dateText: fonts.H2,
  hotelTitle: {
    color: colors.black
  },
  name: fonts.Body,
  date: {
    flexDirection: "row"
  }
});

export const ReservationItem = ({
  item: { arrivalDate, departureDate, hotelName, id },
  onDeleteItem
}: Props) => {
  return (
    <Swipeout
      right={[
        {
          text: "Delete",
          backgroundColor: colors.red,
          onPress: () => onDeleteItem(id)
        }
      ]}
      autoClose
      backgroundColor="transparent"
    >
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.header}>
          {!moment(arrivalDate).isValid() ||
          !moment(departureDate).isValid() ? (
            <DateRangeError startDay={arrivalDate} endDay={departureDate} />
          ) : (
            <DateRange
              containerStyle={styles.dateRange}
              dateTextStyle={styles.dateText}
              startDay={arrivalDate}
              endDay={departureDate}
            />
          )}
          <HotelTitle style={styles.hotelTitle} title={hotelName} />
          <Text>{id}</Text>
        </View>
      </TouchableOpacity>
    </Swipeout>
  );
};
