import React from "react";
import { Account } from "../../../src/screens/account";

function account(props = {}) {
  const defaultProps = {
    navigation: { navigate: jest.fn() },
    user: { name: "hello" },
    ...props
  };
  return shallow(<Account {...defaultProps} />);
}

describe("Account", () => {
  it("renders default", () => {
    expect(account()).toMatchSnapshot();
  });
});
