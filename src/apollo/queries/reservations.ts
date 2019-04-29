import gql from 'graphql-tag';

export const createReservationMutation = gql`
  mutation createReservation($data: ReservationCreateInput!) {
    createReservation(data: $data) {
      id
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`;

export const deleteReservationMutation = gql`
  mutation deleteReservation($where: ReservationWhereUniqueInput!) {
    deleteReservation(where: $where) {
      id
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`;

export const reservationsQuery = gql`
  query reservationsQuery(
    $first: Int
    $where: ReservationWhereInput
    $orderBy: ReservationOrderByInput
  ) {
    reservations(first: $first, where: $where, orderBy: $orderBy) {
      id
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`;
