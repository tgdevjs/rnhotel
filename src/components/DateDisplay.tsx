import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

const styles = StyleSheet.create({
  datesContainer: {
    alignItems: 'center',
  },
  dates: {
    flexDirection: 'row',
  },
  dateContainerLeft: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  dateContainerRight: {
    flex: 1,
    flexDirection: 'row',
  },
  dayContainer: {
    justifyContent: 'center',
  },
  dateText: {
    fontSize: 40,
    fontWeight: '600',
  },
});
export class DateDisplay extends React.PureComponent {
  render() {
    const { dateTextStyle, endDay, startDay, style } = this.props;
    const startMoment = moment(startDay);
    const endMoment = moment(endDay);

    return (
      <View style={[styles.datesContainer, style]}>
        <View style={styles.dates}>
          <View style={styles.dateContainerLeft}>
            <Text style={[styles.dateText, dateTextStyle]}>{startMoment.format('DD')}</Text>
            <View style={styles.dayContainer}>
              <Text>{startMoment.format('ddd')}</Text>
              <Text>{startMoment.format('MMM')}</Text>
            </View>
          </View>
          <Text style={[styles.dateText, dateTextStyle]}> - </Text>
          {!endDay ? (
            <View style={styles.dateContainerRight} />
          ) : (
            <View style={styles.dateContainerRight}>
              <Text style={[styles.dateText, dateTextStyle]}>
                {endDay ? endMoment.format('DD') : '  '}
              </Text>
              <View style={styles.dayContainer}>
                <Text>{endMoment.format('ddd')}</Text>
                <Text>{endMoment.format('MMM')}</Text>
              </View>
            </View>
          )}
        </View>
      </View>
    );
  }
}

DateDisplay.propTypes = {
  dateTextStyle: PropTypes.shape({}),
  endDay: PropTypes.string,
  startDay: PropTypes.string.isRequired,
  style: PropTypes.shape({}),
};

DateDisplay.defaultProps = {
  dateTextStyle: null,
  endDay: null,
  style: null,
};
