import React from "react";
import { ReservationItem } from "../../../src/screens/stays";

describe("ReservationItem", () => {
  it("renders default", () => {
    expect(
      shallow(
        <ReservationItem
          item={{
            arrivalDate: "2019-06-01",
            departureDate: "2019-06-03",
            hotelName: "hotelName",
            id: "1"
          }}
        />
      )
    ).toMatchSnapshot();
  });
});
