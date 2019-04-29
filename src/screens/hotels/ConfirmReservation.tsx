import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { StackActions, NavigationActions } from 'react-navigation';
import { compose, graphql } from 'react-apollo';
import LinearGradient from 'react-native-linear-gradient';
import cuid from 'cuid';

import { DateDisplay, HotelTitle, SignInButton } from '../../components';
import { withSearchMutation, withSearchQuery } from '../../apollo/client-state/search';
import { withUserQuery } from '../../apollo/client-state/user';
import { reservationsQuery, createReservationMutation } from '../../apollo/queries';
import { getReservationsQueryVariables } from '../../utils';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  dateDisplay: {
    paddingBottom: 30,
  },
  hotelTitle: {
    color: 'black',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonSection: {
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionSection: {
    margin: 20,
    alignItems: 'center',
  },
  actionText: {
    fontSize: 16,
  },
  labelText: {
    fontSize: 16,
  },
  valueText: {
    fontSize: 20,
    fontWeight: '600',
  },
});

export class ConfirmReservation extends React.Component {
  state = { hasCreatedReservation: false };

  id = cuid();

  renderContent() {
    const {
      createReservation,
      endDay,
      navigation: { dispatch, getParam, navigate, popToTop },
      startDay,
      user: { name },
    } = this.props;
    const { name: hotelName } = getParam('hotel');

    const variables = {
      data: {
        id: this.id,
        name,
        hotelName,
        arrivalDate: startDay,
        departureDate: endDay,
      },
    };
    const { hasCreatedReservation } = this.state;

    // User not logged in
    if (!name) {
      return (
        <View style={styles.buttonSection}>
          <View style={styles.actionSection}>
            <Text style={styles.labelText}>Sign in to continue.</Text>
          </View>
          <SignInButton onPress={() => navigate('SignIn')} />
        </View>
      );
    }

    if (!hasCreatedReservation) {
      return (
        <View style={styles.buttonSection}>
          <View style={styles.actionSection}>
            <Text style={styles.labelText}>User Name:</Text>
            <Text style={styles.valueText}>{name}</Text>
          </View>
          <Button
            title="Book Now"
            onPress={async () => {
              await createReservation({
                variables,
                refetchQueries: [
                  { query: reservationsQuery, variables: getReservationsQueryVariables({ name }) },
                ],
              });
              this.setState({ hasCreatedReservation: true });
            }}
          />
        </View>
      );
    }

    return (
      <View style={styles.buttonSection}>
        <View style={styles.actionSection}>
          <Text style={styles.valueText}>Success!</Text>
          <Text style={styles.labelText}>Your reservation was created.</Text>
        </View>
        <Button title="Start New Search" onPress={() => popToTop()} />
        <Button
          title="View Reservations"
          onPress={() => {
            // Reset Main stack
            dispatch(
              StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Main' })],
              })
            );
            navigate('Stays');
          }}
        />
      </View>
    );
  }

  render() {
    const {
      endDay,
      navigation: { getParam },
      startDay,
    } = this.props;
    const { name: hotelName } = getParam('hotel');

    return (
      <View style={styles.container}>
        <LinearGradient colors={['#192f6a00', '#3b599888']} style={styles.header}>
          <DateDisplay style={styles.dateDisplay} startDay={startDay} endDay={endDay} />
          <HotelTitle style={styles.hotelTitle} title={hotelName} />
          <Text>{this.id}</Text>
        </LinearGradient>
        <View style={styles.main}>{this.renderContent()}</View>
      </View>
    );
  }
}

export const ConfirmReservationQuery = compose(
  withSearchQuery,
  withSearchMutation,
  withUserQuery,
  graphql(createReservationMutation, { name: 'createReservation' })
)(ConfirmReservation);

ConfirmReservation.propTypes = {
  createReservation: PropTypes.func.isRequired,
  endDay: PropTypes.string.isRequired,
  navigation: PropTypes.shape({}).isRequired,
  startDay: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};
