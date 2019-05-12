import React from "react";
import { SignInModal } from "../../../src/screens/account";

function signInModal(props = {}) {
  const defaultProps = {
    navigation: { goBack: jest.fn() },
    ...props
  };
  return shallow(<SignInModal {...defaultProps} />);
}

describe("SignInModal", () => {
  it("renders default", () => {
    expect(signInModal()).toMatchSnapshot();
  });
});
