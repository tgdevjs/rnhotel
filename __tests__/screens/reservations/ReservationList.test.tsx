import React from "react";
import { ReservationList } from "../../../src/screens/stays";

describe("ReservationList", () => {
  it("renders default", () => {
    expect(shallow(<ReservationList />)).toMatchSnapshot();
  });
});
