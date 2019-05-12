import React from "react";
import { ReservationListGuest } from "../../../src/screens/stays";

describe("ReservationListGuest", () => {
  it("renders default", () => {
    expect(shallow(<ReservationListGuest />)).toMatchSnapshot();
  });
});
