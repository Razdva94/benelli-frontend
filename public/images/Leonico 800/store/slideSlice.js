import { createSlice } from "@reduxjs/toolkit";

const slideSlice = createSlice({
  name: "slide",
  initialState: {
    slide: false,
  },
  reducers: {
    toggleSlide(state) {
      state.slide = !state.slide;
    },
    closeSlide(state) {
      state.slide = false;
    },
  },
});

export const { toggleSlide, closeSlide } = slideSlice.actions;
export default slideSlice.reducer;
