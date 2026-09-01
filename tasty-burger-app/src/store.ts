import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './components/venuesSlice';

export const store = configureStore({
  reducer: {
    venue: venueReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;