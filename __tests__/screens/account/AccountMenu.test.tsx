import React from "react";
import { AccountMenu } from "../../../src/screens/account";

describe("AccountMenu", () => {
  it("renders default", () => {
    expect(shallow(<AccountMenu user={{ name: "hello" }} />)).toMatchSnapshot();
  });
});
