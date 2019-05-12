import React from "react";
import { ConfirmReservation } from "../../../src/screens/hotels";

function confirmReservation(props = {}) {
  const defaultProps = {
    navigation: { getParam: jest.fn(() => ({ name: "hotelName" })) },
    user: { name: "userName" },
    ...props
  };
  return shallow(<ConfirmReservation {...defaultProps} />);
}

describe("ConfirmReservation", () => {
  it("renders default", () => {
    expect(confirmReservation()).toMatchSnapshot();
  });
});
