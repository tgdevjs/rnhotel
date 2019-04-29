import moment from 'moment';

// extract variables for reservation query so it may be reused for refetching queries when creating a reservation
export const getReservationsQueryVariables = ({
  name = '',
  orderBy = 'createdAt_DESC',
  timeRangeKey = 'arrivalDate_gte',
}) => {
  return {
    first: 500,
    where: {
      name,
      [timeRangeKey]: moment().format('YYYY-MM-DD'),
    },
    orderBy,
  };
};
