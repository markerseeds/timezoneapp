import { createStore } from "redux";
import { Provider } from "react-redux";
import { render, screen, cleanup } from "@testing-library/react";
import Calendar from "../Calendar";
import React, { useState as useStateMock } from "react";
import reducer from "../../../store/reducers/scheduleReducer";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe("testing useState mocked", () => {
  const setState = jest.fn();
  const useStateMock = (initState = true) => [initState, setState];

  jest.spyOn(React, "useState").mockImplementation(useStateMock);

  afterEach(() => {
    jest.clearAllMocks();
  });

  const renderWithRedux = (
    component,
    { initialState, store = createStore(reducer, initialState) } = {}
  ) => {
    return {
      ...render(<Provider store={store}>{component}</Provider>),
    };
  };

  test("should handle year click", () => {
    // renderWithRedux(<Calendar />)
  });
});
