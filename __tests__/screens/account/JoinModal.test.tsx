import React from "react";
import { JoinModal } from "../../../src/screens/";

function joinModal(props = {}) {
  const defaultProps = {
    navigation: { goBack: jest.fn() },
    ...props
  };
  return shallow(<JoinModal {...defaultProps} />);
}

describe("JoinModal", () => {
  it("renders default", () => {
    expect(joinModal()).toMatchSnapshot();
  });
});
