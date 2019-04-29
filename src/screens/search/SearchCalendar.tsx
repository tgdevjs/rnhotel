import React, { Component } from 'react';
import { Button } from 'react-native';
import PropTypes from 'prop-types';

import { Calendar } from '../../components';

export class SearchCalendar extends Component {
  static navigationOptions = ({ navigation }) => {
    const { startDay, endDay, onSelectDates } = navigation.state.params;

    return {
      headerRight: (
        <Button
          onPress={() => {
            onSelectDates({ startDay, endDay });
            navigation.goBack();
          }}
          disabled={!endDay}
          title="Done"
        />
      ),
    };
  };

  onSetDates = dates => {
    const {
      navigation: { setParams },
    } = this.props;

    setParams(dates);
  };

  render() {
    const {
      navigation: {
        state: {
          params: { endDay, startDay },
        },
      },
    } = this.props;

    return <Calendar endDay={endDay} onSetDates={this.onSetDates} startDay={startDay} />;
  }
}

SearchCalendar.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};
