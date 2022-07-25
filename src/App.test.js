import React from "react";
import { render } from "@testing-library/react";
import Enzyme from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

import App from "./App";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("With React Testing Library", () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('Shows "Hello world!"', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});
