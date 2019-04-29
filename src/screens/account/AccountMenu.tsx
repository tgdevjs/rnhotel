import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { withUserMutation } from '../../apollo/client-state/user';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelText: {
    fontSize: 16,
  },
  valueText: {
    fontSize: 20,
    fontWeight: '600',
  },
  buttonSection: {
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export class AccountMenu extends React.PureComponent {
  render() {
    const {
      setUser,
      user: { name },
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.labelText}>User Name:</Text>
          <Text style={styles.valueText}>{name}</Text>
        </View>
        <View style={styles.buttonSection}>
          <Button
            title="SignOut"
            onPress={() => {
              setUser({ variables: { input: { name: null } } });
            }}
          />
        </View>
      </View>
    );
  }
}

export const AccountMenuWithQuery = withUserMutation(AccountMenu);

AccountMenu.propTypes = {
  setUser: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};
