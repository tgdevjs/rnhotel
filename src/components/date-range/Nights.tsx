import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";

import { colors } from "../../styles";

type Props = {
  nightsTotal: number;
};

const styles = {
  icons: {
    margin: 2
  },
  nightsContainer: {
    backgroundColor: colors.darkGray,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10
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
        fontWeight="800"
        color={colors.white}
      />
      <Text style={styles.nightsText}>
        {nightsTotal} {nightsText}
      </Text>
    </View>
  );
};
