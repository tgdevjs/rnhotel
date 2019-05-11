import React from "react";
import { StyleSheet, View } from "react-native";
import SegmentedControlTab from "react-native-segmented-control-tab";
import { NavigationScreenProp } from "react-navigation";

import { withUserQuery } from "../../apollo/client-state/user";
import { StaysList, StaysListGuest } from ".";
import { UserType } from "../../types";

type Props = {
  navigation: NavigationScreenProp<any, any>;
  user: UserType;
};

type State = {
  selectedIndex: number;
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  segmentedControlContainer: {
    padding: 30
  }
});
export class Stays extends React.PureComponent<Props, State> {
  static navigationOptions = () => ({ headerTitle: "Stays" });

  state = { selectedIndex: 1 };

  render() {
    const { selectedIndex } = this.state;
    const {
      navigation: { navigate },
      user: { name }
    } = this.props;
    const isSignedIn = !!name;
    const timeRangeKey =
      selectedIndex === 1 ? "arrivalDate_gte" : "arrivalDate_lt";

    return (
      <View style={styles.container}>
        <View style={styles.segmentedControlContainer}>
          <SegmentedControlTab
            enabled={isSignedIn}
            values={["Past", "Upcoming"]}
            selectedIndex={selectedIndex}
            onTabPress={(index: number) => {
              this.setState({ selectedIndex: index });
            }}
          />
        </View>
        {isSignedIn ? (
          <StaysList
            name={name}
            orderBy="createdAt_DESC"
            timeRangeKey={timeRangeKey}
          />
        ) : (
          <StaysListGuest onSignIn={() => navigate("SignIn")} />
        )}
      </View>
    );
  }
}

export const StaysWithQuery = withUserQuery(Stays);
