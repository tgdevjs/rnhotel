import React from "react";
import { Button, StyleSheet, View } from "react-native";
import Ionicons from "react-native-vector-icons/MaterialIcons";

import { SignInButton } from "../../components";
import { colors } from "../../styles";

type Props = {
  onPress: (screen: string) => void;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    marginTop: 80
  },
  separator: {
    height: 20
  }
});

export const AccountGuest = ({ onPress }: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <Ionicons name="person" size={80} color={colors.dogerBlue} />
        <View style={styles.buttonContainer}>
          <SignInButton onPress={() => onPress("SignIn")} />
          <View style={styles.separator} />
          <Button title="Join" onPress={() => onPress("Join")} />
        </View>
      </View>
    </View>
  );
};
