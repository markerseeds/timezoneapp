const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SCHEDULE":
      state = [...state, action.payload];
      // localStorage.setItem("scheduleData", JSON.stringify(state));
      console.log(state);
      return state;
    case "UPDATE_SCHEDULE":
      const updatedItem = state.find(state => state.data.id === +action.payload.sourceId)
      const array = updatedItem.date.split('-');
      array[2] = action.payload.destDate;
      const updatedDate = array.join('-');
      updatedItem.date = updatedDate;
      updatedItem.data.date = action.payload.destDate;
      state = [...state];
      console.log(state);
      return state;
    case "DELETE_SCHEDULE":
      const filteredState = state.filter(state => state.data.id !== action.payload)
      state = [...filteredState]
      return state;
    default:
      return state;
  }
};

export default reducer;

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = [];

// const scheduleSlice = createSlice({
//   name: 'schedule',
//   initialState,
//   reducers: {
//     add(state, action) {
//       state.push(action.payload);
//       localStorage.setItem("scheduleData", JSON.stringify(state));
//     }
//   }
// });

// export default scheduleSlice;