import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";

import { borderRadius, colors, spacing } from "../../styles";

type Props = {
  nightsTotal: number;
};

const styles = {
  icons: {
    margin: 2
  },
  nightsContainer: {
    backgroundColor: colors.darkGray,
    borderRadius: borderRadius.small,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: spacing,
    marginHorizontal: spacing
  },
  nightsText: {
    color: colors.white
  }
};

export const Nights = ({ nightsTotal }: Props) => {
  const nightsText = nightsTotal === 1 ? "night" : "nights";
  return (
    <View style={styles.nightsContainer}>
      <Icons
        style={styles.icons}
        name={"power-sleep"}
        size={14}
        fontWeight="bold"
        color={colors.white}
      />
      <Text style={styles.nightsText}>
        {nightsTotal} {nightsText}
      </Text>
    </View>
  );
};
