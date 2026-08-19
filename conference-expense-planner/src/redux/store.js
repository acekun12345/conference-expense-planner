import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './venueSlice';
import addonsReducer from './addonsSlice';
import mealsReducer from './mealsSlice';

export default configureStore({
  reducer: {
    venue: venueReducer,
    addons: addonsReducer,
    meals: mealsReducer,
  },
});