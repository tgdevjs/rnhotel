import React from "react";
import PropTypes from "prop-types";
import { Query, Mutation } from "react-apollo";
import { FlatList, StyleSheet, View } from "react-native";

import { StayItem } from ".";
import {
  reservationsQuery,
  deleteReservationMutation
} from "../../apollo/queries";
import { getReservationsQueryVariables } from "../../utils";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  itemSeparator: {
    height: 8
  }
});

export class StaysList extends React.PureComponent {
  render() {
    const { name, orderBy, timeRangeKey } = this.props;
    const variables = getReservationsQueryVariables({
      name,
      orderBy,
      timeRangeKey
    });

    return (
      <Mutation
        mutation={deleteReservationMutation}
        update={(cache, { data: { deleteReservation } }) => {
          const { reservations } = cache.readQuery({
            query: reservationsQuery,
            variables
          });
          cache.writeQuery({
            query: reservationsQuery,
            variables,
            data: {
              reservations: reservations.filter(
                item => item.id !== deleteReservation.id
              )
            }
          });
        }}
      >
        {deleteReservation => (
          <Query query={reservationsQuery} variables={variables}>
            {({ data, loading }) => {
              if (loading) return null;

              return (
                <View style={styles.container}>
                  <FlatList
                    data={data.reservations}
                    horizontal={false}
                    ItemSeparatorComponent={() => (
                      <View style={styles.itemSeparator} />
                    )}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                      <StayItem
                        item={item}
                        onDeleteItem={id =>
                          deleteReservation({ variables: { where: { id } } })
                        }
                      />
                    )}
                  />
                </View>
              );
            }}
          </Query>
        )}
      </Mutation>
    );
  }
}

StaysList.propTypes = {
  name: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  timeRangeKey: PropTypes.string.isRequired
};
