import {
  weekArray,
  gridArray,
  yearOptions,
  monthOptions,
  timeZones,
} from "../../constant/index";

describe("constants should have data", () => {
  it("week array not null", () => {
    expect(weekArray).not.toBeNull();
  });

  it("grid array not null", () => {
    expect(gridArray).not.toBeNull();
  });

  it("yearoptions array not null", () => {
    expect(yearOptions).not.toBeNull();
  });

  it("monthoptions array not null", () => {
    expect(monthOptions).not.toBeNull();
  });

  it("timezones array not null", () => {
    expect(timeZones).not.toBeNull();
  });
});
