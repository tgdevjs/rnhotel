import React, { Component } from "react";
import { ImageBackground, FlatList, StyleSheet, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import LinearGradient from "react-native-linear-gradient";
import { TouchableHighlight } from "react-native-gesture-handler";

import { HotelTitle } from "../../components";

type Props = {
  navigation: NavigationScreenProp<any, any>;
};

const styles = StyleSheet.create({
  iconRow: {
    flexDirection: "row"
  },
  item: {
    justifyContent: "flex-end",
    height: 160,
    width: "100%"
  },
  itemTitleBar: {
    marginHorizontal: 8,
    marginVertical: 8
  },
  icons: {
    margin: 2
  },
  itemSeparator: {
    backgroundColor: "white",
    height: 10
  }
});

const data = Array.from({ length: 30 }, (v, i) => ({
  key: String(i),
  name: `hotel-${i}`,
  imageSrc: "http://lorempixel.com/320/280/city",
  price: "$120"
}));

const renderIconRow = () => {
  const icons = [
    "key-variant",
    "bus-side",
    "car",
    "wifi",
    "smoking-off",
    "silverware-fork-knife"
  ].map(v => (
    <Icons
      style={styles.icons}
      key={`${v}`}
      name={v}
      size={25}
      fontWeight="800"
      color="white"
    />
  ));

  return <View style={styles.iconRow}>{icons}</View>;
};

export const Hotels = ({ navigation: { navigate } }: Props) => {
  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      renderItem={({ item, item: { name, imageSrc } }) => (
        <TouchableHighlight
          onPress={() => navigate("ConfirmReservation", { hotel: item })}
        >
          <ImageBackground source={{ uri: imageSrc }} style={styles.item}>
            {/* <View style={styles.item}> */}
            <LinearGradient colors={["#192f6a00", "#3b599888", "#4c669fff"]}>
              <View style={styles.itemTitleBar}>
                <HotelTitle title={name} />
                {renderIconRow()}
              </View>
            </LinearGradient>
            {/* </View> */}
          </ImageBackground>
        </TouchableHighlight>
      )}
    />
  );
};
