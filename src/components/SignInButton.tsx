import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../styles";

type Props = {
  onPress: () => void;
};

const styles = StyleSheet.create({
  signInButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.dogerBlue
  },
  signInButtonText: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export const SignInButton = ({ onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.signInButton} onPress={onPress}>
      <Text style={styles.signInButtonText}>Sign In</Text>
    </TouchableOpacity>
  );
};
