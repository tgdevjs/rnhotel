import React from "react";
import { SingleDate } from "../../../src/components";
import moment from "moment";

describe("SingleDate", () => {
  afterEach(() => {
    mockdate.reset();
  });
  it("renders default", () => {
    expect(shallow(<SingleDate />)).toMatchSnapshot();
  });
});
