import React from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";
import { compose } from "react-apollo";
import { NavigationScreenProp } from "react-navigation";

import { withUserMutation } from "../../apollo/client-state/user";
import { withAddUserMutation } from "../../apollo/client-state/userList";

type Props = {
  navigation: NavigationScreenProp<any, any>;
  setUser: () => void;
  addUser: () => void;
};

type State = {
  nameInput: string;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  nameInput: {
    height: 40,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    margin: 10
  }
});

export class JoinModal extends React.PureComponent<Props, State> {
  state = { nameInput: "" };

  onJoin = () => {
    const {
      addUser,
      navigation: { goBack },
      setUser
    } = this.props;
    const { nameInput: name } = this.state;

    if (name === "") {
      Alert.alert("Not valid name", "please input name");
    } else {
      setUser({ variables: { input: { name } } });
      addUser({ variables: { input: { name } } });
      goBack();
    }
  };

  render() {
    const {
      navigation: { goBack }
    } = this.props;
    const { nameInput } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={text => this.setState({ nameInput: text })}
          onSubmitEditing={this.onJoin}
          placeholder="name"
          style={styles.nameInput}
          value={nameInput}
        />
        <Button title="Join" onPress={this.onJoin} />
        <Button title="Cancel" onPress={() => goBack()} />
      </View>
    );
  }
}

export const JoinModalWithQuery = compose(
  withAddUserMutation,
  withUserMutation
)(JoinModal);
