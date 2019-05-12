import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { compose } from "react-apollo";

import { DateRange, SignInButton } from "../../components";
import {
  withSearchQuery,
  withSearchMutation
} from "../../apollo/client-state/search";
import { withUserQuery } from "../../apollo/client-state/user";
import { UserType } from "../../types";

type Props = {
  endDay: string;
  navigation: NavigationScreenProp<any, any>;
  setCurrentSearch: () => void;
  startDay: string;
  user: UserType;
};
const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    flex: 1
  },
  signInContainer: {
    margin: 20
  },
  userText: {
    fontSize: 16
  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  buttonContainer: {
    marginTop: 30
  }
});

export class Search extends React.Component<Props> {
  static navigationOptions = () => ({ headerTitle: "Search" });

  onSelectDates = date => {
    const { setCurrentSearch } = this.props;

    setCurrentSearch({ variables: { input: { ...date } } });
  };

  render() {
    const {
      endDay,
      navigation: { navigate },
      startDay,
      user: { name }
    } = this.props;
    const { onSelectDates } = this;

    return (
      <View style={styles.container}>
        <View style={styles.signInContainer}>
          {name ? (
            <Text style={styles.userText}>Hi, {name} </Text>
          ) : (
            <SignInButton onPress={() => navigate("SignIn")} />
          )}
        </View>
        <View style={styles.main}>
          <TouchableOpacity
            style={{ width: 400 }}
            onPress={() => {
              navigate("Calendar", {
                endDay,
                onSelectDates,
                startDay
              });
            }}
          >
            <DateRange startDay={startDay} endDay={endDay} />
          </TouchableOpacity>
          <View style={styles.buttonContainer}>
            <Button title="FindHotels" onPress={() => navigate("Hotels")} />
          </View>
        </View>
      </View>
    );
  }
}

export const SearchWithQuery = compose(
  withSearchQuery,
  withSearchMutation,
  withUserQuery
)(Search);
