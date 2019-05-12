import React from "react";
import { Hotels } from "../../../src/screens/hotels";

function hotels(props = {}) {
  const defaultProps = {
    navigation: { navigate: jest.fn() },
    ...props
  };
  return shallow(<Hotels {...defaultProps} />);
}

describe("Hotels", () => {
  it("renders default", () => {
    expect(hotels()).toMatchSnapshot();
  });
});
