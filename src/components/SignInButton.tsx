import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropType from 'prop-types';

const styles = StyleSheet.create({
  signInButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'dodgerblue',
  },
  signInButtonText: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export const SignInButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.signInButton} onPress={onPress}>
      <Text style={styles.signInButtonText}>Sign In</Text>
    </TouchableOpacity>
  );
};

SignInButton.propTypes = {
  onPress: PropType.func,
};

SignInButton.defaultProps = {
  onPress: () => {},
};
