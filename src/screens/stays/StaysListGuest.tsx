import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { SignInButton } from '../../components';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    alignItems: 'center',
  },
  actionSection: {
    margin: 20,
    alignItems: 'center',
  },
  actionText: {
    fontSize: 20,
    fontWeight: '600',
  },
  valueText: {
    fontSize: 20,
  },
});

export class StaysListGuest extends React.PureComponent {
  render() {
    const { onSignIn } = this.props;

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
  }
}

StaysListGuest.propTypes = {
  onSignIn: PropTypes.func.isRequired,
};
