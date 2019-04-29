import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import moment from 'moment';
import PropTypes from 'prop-types';

import { DateDisplay } from '.';

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350,
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee',
  },
  container: {
    flex: 1,
  },
});

export class Calendar extends Component {
  static getRangeOfDates(startMoment, endMoment) {
    const now = startMoment.clone();
    const dates = [];

    while (now.isSameOrBefore(endMoment)) {
      dates.push(now.format(moment.HTML5_FMT.DATE));
      now.add(1, 'days');
    }
    return dates;
  }

  constructor(props) {
    super(props);
    this.selectedColor = '#00bfff';
    this.textColor = 'white';

    const { endDay, startDay } = this.props;

    this.state = {
      currentDate: moment().format(moment.HTML5_FMT.DATE),
      endDay,
      startDay,
      markedDates: this.getMarkedDates(startDay, endDay),
    };

    this.onDayPress = this.onDayPress.bind(this);
  }

  onDayPress({ dateString }) {
    const { selectedColor, textColor } = this;
    const { endDay, startDay } = this.state;

    let newStartDay = dateString;
    let newEndDay = null;
    let markedDates = {
      [newStartDay]: {
        startingDay: true,
        endingDay: true,
        disableTouchEvent: true,
        color: selectedColor,
        textColor,
      },
    };

    if (!endDay && moment(dateString).isAfter(moment(startDay))) {
      newStartDay = startDay;
      newEndDay = dateString;
      markedDates = this.getMarkedDates(newStartDay, newEndDay);
    }

    const dates = {
      startDay: newStartDay,
      endDay: newEndDay,
      markedDates,
    };

    this.setState(dates, () => {
      const { onSetDates } = this.props;

      onSetDates(dates);
    });
  }

  getMarkedDates(start, end) {
    // return an object with keys of dates between start and end date
    const { selectedColor, textColor } = this;
    const dates = Calendar.getRangeOfDates(moment(start), moment(end));
    const markedDates = dates.reduce(
      (prev, date) => ({
        ...prev,
        [date]: { color: selectedColor, textColor },
      }),
      {}
    );
    markedDates[start].startingDay = true;
    markedDates[end].endingDay = true;

    return markedDates;
  }

  render() {
    const { currentDate, endDay, markedDates, startDay } = this.state;

    return (
      <View style={styles.container}>
        <DateDisplay startDay={startDay} endDay={endDay} />
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

Calendar.propTypes = {
  endDay: PropTypes.string,
  onSetDates: PropTypes.func,
  startDay: PropTypes.string,
};

Calendar.defaultProps = {
  endDay: null,
  onSetDates: () => {},
  startDay: null,
};
