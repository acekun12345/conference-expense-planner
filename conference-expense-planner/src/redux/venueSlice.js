import { createSlice } from '@reduxjs/toolkit';

export const venueSlice = createSlice({
  name: 'venue',
  initialState: [
    {
      img: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=500&q=80',
      name: 'Auditorium Hall',
      cost: 5500,
      quantity: 0,
      capacity: 200,
    },
    {
      img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=500&q=80',
      name: 'Conference Room',
      cost: 3500,
      quantity: 0,
      capacity: 15,
    },
    {
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=80',
      name: 'Presentation Room',
      cost: 700,
      quantity: 0,
      capacity: 50,
    },
    {
      img: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=500&q=80',
      name: 'Large Meeting Room',
      cost: 900,
      quantity: 0,
      capacity: 10,
    },
    {
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=80',
      name: 'Small Meeting Room',
      cost: 1100,
      quantity: 0,
      capacity: 5,
    },
  ],
  reducers: {
    incrementQuantity: (state, action) => {
      const index = action.payload;
      if (state[index]) {
        state[index].quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const index = action.payload;
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--;
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity } = venueSlice.actions;
export default venueSlice.reducer;