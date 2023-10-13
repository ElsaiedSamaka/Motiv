import { configureStore } from "@reduxjs/toolkit";
import { carsApi } from "core/services/cars.service";
export const store = configureStore({
  reducer: {
    [carsApi.reducerPath]: carsApi.reducer,
  },

  /**
   *
   * @param {function} getDefaultMiddleware - The function used to get the default middleware.
   * @return {object} The initialized middleware object.
   */
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      carsApi.middleware
    ),
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
