export type ReservationDateRangeType = {
  startDay: string;
  endDay: string | null;
};

export type ReservationType = {
  id: string;
  name: string;
  hotelName: string;
  arrivalDate: string;
  departureDate: string;
};

export type UserType = {
  name: string;
};
