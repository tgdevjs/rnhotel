import React from "react";
import { DateRangeError } from "../../../src/components";

describe("DateRangeError", () => {
  it("renders default", () => {
    expect(shallow(<DateRangeError />)).toMatchSnapshot();
  });
});
