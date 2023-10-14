import { createSlice } from "@reduxjs/toolkit";

const mobileSlideSlice = createSlice({
  name: "mobileSlide",
  initialState: {
    mobileSlide: false,
    displayState: false,
  },
  reducers: {
    toggleMobileSlide(state) {
      state.mobileSlide = !state.mobileSlide;
    },
    closeMobileSlide(state) {
      state.mobileSlide = false;
    },
    defineDisplayWithSlide(state, actions) {
      state.displayState = actions.payload;
    },
  },
});

export const { toggleMobileSlide, closeMobileSlide, defineDisplayWithSlide } = mobileSlideSlice.actions;
export default mobileSlideSlice.reducer;