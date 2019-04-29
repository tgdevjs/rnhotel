import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/MaterialIcons';

import { SignInButton } from '../../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 80,
  },
  separator: {
    height: 20,
  },
});

export class AccountGuest extends React.PureComponent {
  render() {
    const { navigate } = this.props;
    return (
      <View style={styles.container}>
        <View>
          <Ionicons name="person" size={80} color="blue" />
          <View style={styles.buttonContainer}>
            <SignInButton onPress={() => navigate('SignIn')} />
            <View style={styles.separator} />
            <Button title="Join" onPress={() => navigate('Join')} />
          </View>
        </View>
      </View>
    );
  }
}

AccountGuest.propTypes = {
  navigate: PropTypes.func.isRequired,
};
