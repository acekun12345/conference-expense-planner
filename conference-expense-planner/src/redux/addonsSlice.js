import { createSlice } from '@reduxjs/toolkit';

export const addonsSlice = createSlice({
  name: 'addons',
  initialState: [
    {
      img: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=500&q=80',
      name: 'Projectors',
      cost: 200,
      quantity: 0,
    },
    {
      img: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=500&q=80',
      name: 'Speakers',
      cost: 35,
      quantity: 0,
    },
    {
      img: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=500&q=80',
      name: 'Microphones',
      cost: 45,
      quantity: 0,
    },
    {
      img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=500&q=80',
      name: 'Whiteboards',
      cost: 80,
      quantity: 0,
    },
    {
      img: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=500&q=80',
      name: 'Signage',
      cost: 80,
      quantity: 0,
    },
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