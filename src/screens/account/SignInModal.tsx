import React from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { compose } from "react-apollo";
import { NavigationScreenProp } from "react-navigation";

import { withUserListQuery } from "../../apollo/client-state/userList";
import { withUserMutation } from "../../apollo/client-state/user";
import { colors } from "../../styles";

type Props = {
  navigation: NavigationScreenProp<any, any>;
  setUser: () => void;
  userList: [];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  header: {
    height: 160,
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20
  },
  actionText: {
    fontSize: 16
  },
  list: {
    height: "70%"
  },
  itemSeparator: {
    backgroundColor: colors.black,
    height: 1
  },
  item: {
    justifyContent: "center",
    height: 60
  },
  itemTitleText: {
    marginLeft: 40
  },
  footer: {
    height: 60
  }
});

export const SignInModal = ({
  navigation: { goBack },
  setUser,
  userList
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>SignIn</Text>
        <Text style={styles.actionText}>Select a user account.</Text>
      </View>
      <FlatList
        style={styles.list}
        data={userList}
        keyExtractor={({ name }) => name}
        renderItem={({ item: { name } }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              setUser({ variables: { input: { name } } });
              goBack();
            }}
          >
            <Text style={styles.itemTitleText}>{name}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      />
      <Button title="Cancel" onPress={() => goBack()} />
      <View style={styles.footer} />
    </View>
  );
};

export const SignInModalWithQuery = compose(
  withUserListQuery,
  withUserMutation
)(SignInModal);
