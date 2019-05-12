import React from "react";
import { Query, Mutation } from "react-apollo";
import { FlatList, StyleSheet, Text, View } from "react-native";

import { ReservationItem } from ".";
import { ReservationType } from "../../types";
import {
  reservationsQuery,
  deleteReservationMutation
} from "../../apollo/queries";
import { getReservationsQueryVariables } from "../../utils";
import { fonts } from "../../styles";

type Props = {
  name: string;
  orderBy: string;
  timeRangeKey: string;
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  itemSeparator: {
    height: 8
  },
  listEmpty: {
    alignItems: "center",
    flex: 1,
    height: 400,
    justifyContent: "center"
  },
  actionText: fonts.H3
});

export const ReservationList = ({ name, orderBy, timeRangeKey }: Props) => {
  const variables = getReservationsQueryVariables({
    name,
    orderBy,
    timeRangeKey
  });
  const timeRange = timeRangeKey === "arrivalDate_gte" ? "upcoming" : "past";

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
              (item: ReservationType) => item.id !== deleteReservation.id
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
                  keyExtractor={(item: ReservationType) => item.id}
                  ListEmptyComponent={
                    <View style={styles.listEmpty}>
                      <Text style={styles.actionText}>
                        {`No ${timeRange} stays`}
                      </Text>
                    </View>
                  }
                  renderItem={({ item }) => (
                    <ReservationItem
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
};
