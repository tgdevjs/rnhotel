import React from "react";

import { HotelTitle } from "../../src/components";

describe("HelloTitle", () => {
  it("renders default", () => {
    expect(shallow(<HotelTitle title="HotelTitle" />)).toMatchSnapshot();
  });
});
