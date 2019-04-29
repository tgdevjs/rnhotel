import React, { Component } from 'react';
import { ImageBackground, FlatList, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableHighlight } from 'react-native-gesture-handler';

import { HotelTitle } from '../../components';

const styles = StyleSheet.create({
  iconRow: {
    flexDirection: 'row',
  },
  item: {
    justifyContent: 'flex-end',
    height: 160,
    width: '100%',
  },
  itemTitleBar: {
    marginHorizontal: 8,
    marginVertical: 8,
  },
  icons: {
    margin: 2,
  },
  // itemSubTitle: {
  //   color: 'white',
  //   fontSize: 1,
  //   fontWeight: '700',
  // },
  itemSeparator: {
    backgroundColor: 'white',
    height: 10,
  },
  linearGradient: {
    // paddingLeft: 15,
    // paddingRight: 15,
    // borderRadius: 5,
  },
});

export class Hotels extends Component {
  onRenderIconRow = () => {
    const icons = [
      'key-variant',
      'bus-side',
      'car',
      'wifi',
      'smoking-off',
      'silverware-fork-knife',
    ].map(v => (
      <Icons style={styles.icons} key={`${v}`} name={v} size={25} fontWeight="800" color="white" />
    ));

    return <View style={styles.iconRow}>{icons}</View>;
  };

  onRenderItem = ({ item, item: { name, imageSrc } }) => {
    const {
      navigation: { navigate },
    } = this.props;

    return (
      <TouchableHighlight onPress={() => navigate('ConfirmReservation', { hotel: item })}>
        <ImageBackground source={{ uri: imageSrc }} style={styles.item}>
          {/* <View style={styles.item}> */}
          <LinearGradient
            colors={['#192f6a00', '#3b599888', '#4c669fff']}
            style={styles.linearGradient}
          >
            <View style={styles.itemTitleBar}>
              <HotelTitle title={name} />
              {this.onRenderIconRow()}
            </View>
          </LinearGradient>
          {/* </View> */}
        </ImageBackground>
      </TouchableHighlight>
    );
  };

  render() {
    const data = Array.from({ length: 30 }, (v, i) => ({
      key: String(i),
      name: `hotel-${i}`,
      imageSrc: 'http://lorempixel.com/320/280/city',
      price: '$120',
    }));
    return (
      <FlatList
        data={data}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        renderItem={this.onRenderItem}
      />
    );
  }
}

Hotels.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};
