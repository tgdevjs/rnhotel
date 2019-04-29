import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropType from 'prop-types';

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export const HotelTitle = ({ style, title }) => {
  return <Text style={[styles.title, style]}>{title}</Text>;
};

HotelTitle.propTypes = {
  style: PropType.shape({}),
  title: PropType.string.isRequired,
};

HotelTitle.defaultProps = {
  style: null,
};
