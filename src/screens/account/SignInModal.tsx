import React from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { compose } from 'react-apollo';

import { withUserListQuery } from '../../apollo/client-state/userList';
import { withUserMutation } from '../../apollo/client-state/user';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 20,
  },
  actionText: {
    fontSize: 16,
  },
  list: {
    height: '70%',
  },
  itemSeparator: {
    backgroundColor: 'black',
    height: 1,
  },
  item: {
    justifyContent: 'center',
    height: 60,
  },
  itemTitleText: {
    marginLeft: 40,
  },
  footer: {
    height: 60,
  },
});

export class SignInModal extends React.PureComponent {
  onPressItem = ({ name }) => {
    const {
      navigation: { goBack },
      setUser,
    } = this.props;

    setUser({ variables: { input: { name } } });
    goBack();
  };

  onRenderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.item} onPress={() => this.onPressItem(item)}>
        <Text style={styles.itemTitleText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    const {
      navigation: { goBack },
      userList,
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>SignIn</Text>
          <Text style={styles.actionText}>Select a user account.</Text>
        </View>
        <FlatList
          style={styles.list}
          data={userList}
          keyExtractor={({ name }) => name}
          renderItem={this.onRenderItem}
          ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        />
        <Button title="Cancel" onPress={() => goBack()} />
        <View style={styles.footer} />
      </View>
    );
  }
}

export const SignInModalWithQuery = compose(
  withUserListQuery,
  withUserMutation
)(SignInModal);

SignInModal.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
  setUser: PropTypes.func.isRequired,
  userList: PropTypes.arrayOf(() => {}).isRequired,
};
