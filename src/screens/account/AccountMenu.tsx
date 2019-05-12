import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { withUserMutation } from "../../apollo/client-state/user";
import { UserType } from "../../types";
import { fonts } from "../../styles";

type Props = {
  setUser: (user: UserType) => void;
  user: UserType;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  labelText: fonts.Body,
  valueText: fonts.H3,
  buttonSection: {
    marginBottom: 40,
    justifyContent: "center",
    alignItems: "center"
  }
});

export const AccountMenu = ({ setUser, user: { name } }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.labelText}>User Name:</Text>
        <Text style={styles.valueText}>{name}</Text>
      </View>
      <View style={styles.buttonSection}>
        <Button
          title="SignOut"
          onPress={() => setUser({ variables: { input: { name: null } } })}
        />
      </View>
    </View>
  );
};

export const AccountMenuWithQuery = withUserMutation(AccountMenu);
