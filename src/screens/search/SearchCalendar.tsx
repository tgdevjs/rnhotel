import React, { Component } from "react";
import { Button } from "react-native";
import { NavigationScreenProp } from "react-navigation";

import { Calendar } from "../../components";

type Props = {
  navigation: NavigationScreenProp<any, any>;
};

export class SearchCalendar extends Component<Props> {
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
      )
    };
  };

  render() {
    const {
      navigation: {
        setParams,
        state: {
          params: { endDay, startDay }
        }
      }
    } = this.props;

    return (
      <Calendar
        endDay={endDay}
        onSetDates={dates => setParams(dates)}
        startDay={startDay}
      />
    );
  }
}
