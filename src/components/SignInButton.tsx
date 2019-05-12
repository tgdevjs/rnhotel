import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { borderRadius, colors, spacing } from "../styles";

type Props = {
  onPress: () => void;
};

const styles = StyleSheet.create({
  signInButton: {
    padding: spacing,
    borderRadius: borderRadius.small,
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
