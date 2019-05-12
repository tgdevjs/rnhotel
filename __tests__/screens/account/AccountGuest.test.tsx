import React from "react";
import { AccountGuest } from "../../../src/screens/account";

describe("AccountGuest", () => {
  it("renders default", () => {
    expect(shallow(<AccountGuest />)).toMatchSnapshot();
  });
});
