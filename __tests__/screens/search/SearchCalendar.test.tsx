import React from "react";
import { SearchCalendar } from "../../../src/screens/search";

function searchCalendar(props = {}) {
  const defaultProps = {
    navigation: {
      setParams: jest.fn(() => null),
      state: { params: { endDay: "2019-06-03", startDay: "2019-06-01" } }
    },
    ...props
  };
  return shallow(<SearchCalendar {...defaultProps} />);
}

describe("SearchCalendar", () => {
  it("renders default", () => {
    expect(searchCalendar()).toMatchSnapshot();
  });
});
