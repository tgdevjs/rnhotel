import React from "react";

import { Calendar } from "../../src/components";

function calendar(
  { endDay, onSetDates, startDay } = {
    endDay: "2019-06-03",
    onSetDates: () => {},
    startDay: "2019-06-01"
  }
) {
  return shallow(
    <Calendar endDay={endDay} onSetDates={dates => {}} startDay={startDay} />
  );
}

describe("HelloTitle", () => {
  it("renders default", () => {
    const getRangeOfDates = ["2019-06-01", "2019-06-02", "2019-06-03"];
    Calendar.getRangeOfDates = jest.fn(() => getRangeOfDates);

    expect(calendar).toMatchSnapshot();
    Calendar.getRangeOfDates.mockReset();
  });
});
