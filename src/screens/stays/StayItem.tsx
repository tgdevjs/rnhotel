import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Swipeout from "react-native-swipeout";
import moment from "moment";

import { DateRange, HotelTitle, DateRangeError } from "../../components";
import { ReservationType } from "../../types";

type Props = {
  item: ReservationType;
  onDeleteItem: (id: string) => void;
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    marginHorizontal: 10,
    height: 160
  },
  textContainer: {
    paddingLeft: 42
  },
  dateRange: {
    paddingBottom: 10
  },
  dateText: {
    fontSize: 30,
    fontWeight: "600"
  },
  hotelTitle: {
    color: "black"
  },
  name: {
    fontSize: 16,
    fontWeight: "600"
  },
  date: {
    flexDirection: "row"
  }
});

export const StayItem = ({
  item: { arrivalDate, departureDate, hotelName, id },
  onDeleteItem
}: Props) => {
  return (
    <Swipeout
      right={[
        {
          text: "Delete",
          backgroundColor: "red",
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
