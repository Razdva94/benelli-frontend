import { createSlice } from "@reduxjs/toolkit";

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: {
    portfolio: { type: null },
  },
  reducers: {
    openPortfolioPictures(state, actions) {
      state.portfolio = { type: actions.payload };
    },
    closePortfolioPictures(state) {
      state.portfolio = { type: null };
    },
  },
});

export const {
  openPortfolioPictures,
  closePortfolioPictures,
} = portfolioSlice.actions;
export default portfolioSlice.reducer;
