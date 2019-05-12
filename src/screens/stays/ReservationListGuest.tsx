import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { SignInButton } from "../../components";
import { fonts } from "../../styles";

type Props = {
  onSignIn: () => void;
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  main: {
    alignItems: "center"
  },
  actionSection: {
    margin: 20,
    alignItems: "center"
  },
  actionText: fonts.H3,
  valueText: fonts.H3
});

export const ReservationListGuest = ({ onSignIn }: Props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.main}>
        <View style={styles.actionSection}>
          <Text style={styles.actionText}>Sign in</Text>
          <Text style={styles.valueText}>to see your reservations</Text>
        </View>
        <SignInButton onPress={onSignIn} />
      </View>
    </View>
  );
};
