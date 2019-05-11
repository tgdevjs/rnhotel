import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PropTypes from "prop-types";
import Swipeout from "react-native-swipeout";
import moment from "moment";

import { DateRange, HotelTitle, DateRangeError } from "../../components";

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

export class StayItem extends React.PureComponent {
  renderDate() {
    const {
      item: { arrivalDate, departureDate }
    } = this.props;

    // @todo standarize a date format for all reservations
    if (!moment(arrivalDate).isValid() || !moment(departureDate).isValid()) {
      return <DateRangeError startDay={arrivalDate} endDay={departureDate} />;
    }

    return (
      <DateRange
        dateTextStyle={styles.dateText}
        style={styles.dateRange}
        startDay={arrivalDate}
        endDay={departureDate}
      />
    );
  }

  render() {
    const {
      item: { id, hotelName },
      onDeleteItem
    } = this.props;
    const swipeBtns = [
      {
        text: "Delete",
        backgroundColor: "red",
        onPress: () => onDeleteItem(id)
      }
    ];

    return (
      <Swipeout right={swipeBtns} autoClose backgroundColor="transparent">
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.header}>
            {this.renderDate()}
            <HotelTitle style={styles.hotelTitle} title={hotelName} />
            <Text>{id}</Text>
          </View>
        </TouchableOpacity>
      </Swipeout>
    );
  }
}

StayItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    hotelName: PropTypes.string,
    arrivalDate: PropTypes.string,
    departureDate: PropTypes.string
  }).isRequired,
  onDeleteItem: PropTypes.func.isRequired
};
