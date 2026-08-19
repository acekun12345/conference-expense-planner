import { createSlice } from '@reduxjs/toolkit';

export const addonsSlice = createSlice({
  name: 'addons',
  initialState: [
    { name: 'Projectors', cost: 200, quantity: 0 },
    { name: 'Speaker', cost: 35, quantity: 0 },
    { name: 'Microphones', cost: 45, quantity: 0 },
    { name: 'Whiteboards', cost: 80, quantity: 0 },
    { name: 'Signage', cost: 80, quantity: 0 },
  ],
  reducers: {
    incrementAvQuantity: (state, action) => {
      const index = action.payload;
      if (state[index]) {
        state[index].quantity++;
      }
    },
    decrementAvQuantity: (state, action) => {
      const index = action.payload;
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--;
      }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = addonsSlice.actions;
export default addonsSlice.reducer;