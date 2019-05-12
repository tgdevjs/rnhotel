import React from "react";
import { DateRange } from "../../../src/components";

describe("DateRange", () => {
  it("renders default", () => {
    expect(shallow(<DateRange />)).toMatchSnapshot();
  });
});
