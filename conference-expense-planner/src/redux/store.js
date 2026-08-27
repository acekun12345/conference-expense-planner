import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './venueSlice';
import addonsReducer from './addonsSlice';
import mealsReducer from './mealsSlice';

export const store = configureStore({
  reducer: {
    venue: venueReducer,
    addons: addonsReducer,
    meals: mealsReducer,
  },
});

export default store;