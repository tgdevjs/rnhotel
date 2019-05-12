import React from "react";
import { Search } from "../../../src/screens/search";

function search(props = {}) {
  const defaultProps = {
    navigation: { navigate: jest.fn() },
    user: { name: "userName" },
    ...props
  };
  return shallow(<Search {...defaultProps} />);
}

describe("Search", () => {
  it("renders default", () => {
    expect(search()).toMatchSnapshot();
  });
});
