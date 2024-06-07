import { configureStore } from "@reduxjs/toolkit";
import { popularMoviesApi } from "../services/movies";

const store = configureStore({
  reducer: {
    [popularMoviesApi.reducerPath]: popularMoviesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(popularMoviesApi.middleware),
});

export default store;
