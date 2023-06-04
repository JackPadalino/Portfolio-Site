import { createSlice } from "@reduxjs/toolkit";

interface NavView {
  navVisible: boolean;
}

const navInititialState: NavView = {
  navVisible: false,
};

export const navSlice = createSlice({
  name: "nav",
  initialState: navInititialState,
  reducers: {
    setNavVisible: (state, action) => {
      state.navVisible = action.payload;
    },
  },
});

export const { setNavVisible } = navSlice.actions;
export default navSlice.reducer;
