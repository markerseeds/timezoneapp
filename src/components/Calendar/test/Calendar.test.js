import { createStore } from "redux";
import { Provider } from "react-redux";
import { render, screen, cleanup } from "@testing-library/react";
import Calendar from "../Calendar";
import React, { useState as useStateMock } from "react";
import reducer from "../../../store/reducers/scheduleReducer";

describe("testing useState mocked", () => {
  const mockSetState = jest.fn();

  beforeEach(() => {
    jest.mock('react', () => ({
      ...jest.requireActual('react'),
      useState: (initialState) => [initialState, mockSetState]
    }))
  })

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
    renderWithRedux(<Calendar />)
  });
});
