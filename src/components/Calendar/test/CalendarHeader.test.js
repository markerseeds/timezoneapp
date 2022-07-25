import { fireEvent, render, screen } from "@testing-library/react";
import CalendarHeader from "../CalendarHeader";
import Calendar from "../Calendar";

export const yearOptions = ["2021", "2022", "2023", "2024"];

export const monthOptions = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
];

test("button has correct initial color", () => {
  render(<CalendarHeader />);
  const createButton = screen.getByRole("button", { name: "Create Schedule" });
  expect(createButton).toHaveStyle({ backgroundColor: "#228c22" });
});

it("should call click", () => {
  const handleYear = jest.fn();
  const handleMonth = jest.fn();
  render(<CalendarHeader defaultYear={'2022'} defaultMonth={'7'} onYearSelect={handleYear} onMonthSelect={handleMonth} />);
});

it("should call props.openModal on click", () => {
  const handleClick = jest.fn()
  render(<CalendarHeader openModal={handleClick} />)
  const createButton = screen.getByRole("button", { name: "Create Schedule" });
  fireEvent.click(createButton)
  expect(handleClick).toHaveBeenCalledTimes(1)
});

