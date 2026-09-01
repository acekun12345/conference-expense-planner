import { configureStore } from '@reduxjs/toolkit';
import venuesReducer from './venueSlice';
import addonsReducer from './addonsSlice';
import mealsReducer from './mealsSlice';

export const store = configureStore({
  reducer: {
    venues: venuesReducer,
    addons: addonsReducer,
    meals: mealsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;