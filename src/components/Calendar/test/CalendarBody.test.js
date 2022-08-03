import { createStore } from "redux";
import { Provider } from "react-redux";
import { render, screen, cleanup } from "@testing-library/react";
import CalendarBody from "../CalendarBody";
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

const mockUserData = {
  date: '2022-7-12',
  time: '07:00',
  data: {
    name: 'Mark',
    date: '12',
    time: '07:00',
    timezone: 'Africa/Abidjan'
  }
}

const date = '11';

describe("CalendarBody Component", () => {
  test("should render without crashing", () => {
    const { container } = renderWithRedux(<CalendarBody />);
    expect(container).not.toBeNull();
  });

  test("should render draggable component on load", () => {
    renderWithRedux(<CalendarBody />);
    const draggable = screen.getByTestId("drag-element");
    expect(draggable).not.toBeNull();
  });

  test("should render draggable component with data", () => {
    renderWithRedux(<CalendarBody userData={mockUserData} date={date} />);
  });
});
