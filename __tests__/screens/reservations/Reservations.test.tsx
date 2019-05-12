import React from "react";
import { Reservations } from "../../../src/screens/stays";

function reservations(props = {}) {
  const defaultProps = {
    navigation: { navigate: jest.fn() },
    user: { name: "userName" },
    ...props
  };
  return shallow(<Reservations {...defaultProps} />);
}

describe("Reservations", () => {
  it("renders default", () => {
    expect(reservations()).toMatchSnapshot();
  });
});
