import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "./slideSlice";
import portfolioReducer from "./portfolioSlice";
import mobileSlideSlice from "./mobileSlideSlice";

export default configureStore({
  reducer: {
    mobileSlide: mobileSlideSlice,
    slide: slideReducer,
    portfolio: portfolioReducer
  },
});
