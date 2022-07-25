/* eslint-disable testing-library/no-debugging-utils */
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Schedule from "../Schedule";
import reducer from "../../../store/reducers/scheduleReducer";

afterEach(cleanup);

const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
};

jest.mock('../../../store/actions/index.ts', () => ({
  deleteSchedule: jest.fn(() => {}),
}));

test("it renders with redux", () => {
  renderWithRedux(<Schedule name={'Mark'} time={'11:00'} />);
  const div = screen.getByTestId('custom-element');
  expect(div).toBeInTheDocument();
  const deleteButton = screen.getByRole("button");
  expect(deleteButton).toBeInTheDocument();
});
