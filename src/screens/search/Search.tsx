import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { compose } from 'react-apollo';

import { DateDisplay, SignInButton } from '../../components';
import { withSearchQuery, withSearchMutation } from '../../apollo/client-state/search';
import { withUserQuery } from '../../apollo/client-state/user';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flex: 1,
  },
  signInContainer: {
    margin: 20,
  },
  userText: {
    fontSize: 16,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonContainer: {
    marginTop: 30,
  },
});

export class Search extends React.Component {
  static navigationOptions = () => ({ headerTitle: 'Search' });

  onPressDateDisplay = () => {
    const {
      endDay,
      navigation: { navigate },
      startDay,
    } = this.props;

    navigate('Calendar', { endDay, onSelectDates: this.onSelectDates, startDay });
  };

  onSelectDates = date => {
    const { setCurrentSearch } = this.props;

    setCurrentSearch({ variables: { input: { ...date } } });
  };

  renderUser() {
    const {
      navigation: { navigate },
      user: { name },
    } = this.props;

    if (name) return <Text style={styles.userText}>Hi, {name} </Text>;

    return <SignInButton onPress={() => navigate('SignIn')} />;
  }

  render() {
    const {
      endDay,
      navigation: { navigate },
      startDay,
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.signInContainer}>{this.renderUser()}</View>
        <View style={styles.main}>
          <TouchableOpacity style={{ width: 400 }} onPress={this.onPressDateDisplay}>
            <DateDisplay startDay={startDay} endDay={endDay} />
          </TouchableOpacity>
          <View style={styles.buttonContainer}>
            <Button title="FindHotels" onPress={() => navigate('Hotels')} />
          </View>
        </View>
      </View>
    );
  }
}

export const SearchWithQuery = compose(
  withSearchQuery,
  withSearchMutation,
  withUserQuery
)(Search);

Search.propTypes = {
  endDay: PropTypes.string.isRequired,
  navigation: PropTypes.shape({}).isRequired,
  setCurrentSearch: PropTypes.func.isRequired,
  startDay: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};
