import React from "react";

import { SignInButton } from "../../src/components";

describe("SignInButton", () => {
  it("renders default", () => {
    expect(shallow(<SignInButton onPress={() => null} />)).toMatchSnapshot();
  });
});
