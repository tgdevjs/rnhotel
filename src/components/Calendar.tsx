import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { CalendarList } from "react-native-calendars";
import moment from "moment";
import PropTypes, { array } from "prop-types";

import { DateRange } from "./date-range";

type Props = {
  endDay: string;
  onSetDates: (dates: SelectedDates) => void;
  startDay: string;
};

type State = {
  currentDate: string;
  selectedDates: SelectedDates;
  markedDates: MarkedDates;
};

type SelectedDates = {
  startDay: string;
  endDay: string | null;
};

type MarkedDates = { [key: string]: MarkedCalendarDate };

type MarkedCalendarDate = {
  startingDay: boolean;
  endingDay: boolean;
  disableTouchEvent: boolean;
  color: string;
  textColor: string;
};

type SelectedCalendarDate = {
  dateString: string;
};

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: "#eee",
    height: 350
  },
  text: {
    textAlign: "center",
    borderColor: "#bbb",
    padding: 10,
    backgroundColor: "#eee"
  },
  container: {
    flex: 1
  }
});

export class Calendar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const { endDay, startDay } = this.props;

    this.state = {
      currentDate: moment().format(moment.HTML5_FMT.DATE),
      selectedDates: { endDay, startDay },
      markedDates: this.getMarkedDates(startDay, endDay)
    };

    this.onDayPress = this.onDayPress.bind(this);
  }

  selectedColor = "#00bfff";
  textColor = "white";

  static getRangeOfDates(start: string, end: string): [string?] {
    const startMoment = moment(start);
    const endMoment = moment(end);
    const now = startMoment.clone();
    const dates: [string?] = [];

    while (now.isSameOrBefore(endMoment)) {
      dates.push(now.format(moment.HTML5_FMT.DATE));
      now.add(1, "days");
    }
    return dates;
  }

  getMarkedDates(start: string, end: string): MarkedDates {
    // Return an object with keys of dates between start and end date
    const { selectedColor, textColor } = this;
    const dates = Calendar.getRangeOfDates(start, end);
    const markedDates: MarkedDates = dates.reduce(
      (previousValue, currentValue) => ({
        ...previousValue,
        [currentValue]: { color: selectedColor, textColor }
      }),
      {}
    );
    markedDates[start].startingDay = true;
    markedDates[end].endingDay = true;

    return markedDates;
  }

  onDayPress({ dateString }: SelectedCalendarDate): void {
    const { selectedColor, textColor } = this;
    const {
      selectedDates: { endDay, startDay }
    } = this.state;

    let newStartDay = dateString;
    let newEndDay = null;

    // Set MarkedDates to selected day
    let markedDates: MarkedDates = {
      [newStartDay]: {
        startingDay: true,
        endingDay: true,
        disableTouchEvent: true,
        color: selectedColor,
        textColor
      }
    };

    if (!endDay && moment(dateString).isAfter(moment(startDay))) {
      // Set Marked Dates to range between startDay and selectedDay
      newStartDay = startDay;
      newEndDay = dateString;
      markedDates = this.getMarkedDates(newStartDay, newEndDay);
    }

    const selectedDates: SelectedDates = {
      startDay: newStartDay,
      endDay: newEndDay
    };

    this.setState({ selectedDates, markedDates }, () => {
      this.props.onSetDates(selectedDates);
    });
  }

  render() {
    const {
      currentDate,
      selectedDates: { startDay, endDay },
      markedDates
    } = this.state;

    return (
      <View style={styles.container}>
        <DateRange startDay={startDay} endDay={endDay} />
        <CalendarList
          style={styles.calendar}
          current={currentDate}
          onDayPress={this.onDayPress}
          pastScrollRange={0}
          futureScrollRange={50}
          scrollEnabled
          showScrollIndicator
          markedDates={markedDates}
          markingType="period"
          minDate={currentDate}
        />
      </View>
    );
  }
}
