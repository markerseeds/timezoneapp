import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";

export const store = createStore(reducers, compose(applyMiddleware(thunk)));

// import { configureStore } from "@reduxjs/toolkit";
// import scheduleSlice from "./reducers/scheduleReducer";

// export const store = configureStore({
//   reducer: scheduleSlice.reducer,
// });

// export const actions = scheduleSlice.actions;