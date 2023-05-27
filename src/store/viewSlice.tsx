import { createSlice } from "@reduxjs/toolkit";

interface View {
  ninetiesMode: boolean;
}

const viewInitialState: View = {
  ninetiesMode: false,
};

export const viewSlice = createSlice({
  name: "view",
  initialState: viewInitialState,
  reducers: {
    setNinetiesMode: (state, action) => {
      state.ninetiesMode = action.payload;
    },
  },
});

export const { setNinetiesMode } = viewSlice.actions;
export default viewSlice.reducer;
