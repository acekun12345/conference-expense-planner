import { createSlice } from '@reduxjs/toolkit';

export const venueSlice = createSlice({
  name: 'venue',
  initialState: [
    {
      img: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=300',
      name: 'Conference Room (Capacity:15)',
      cost: 1500,
      quantity: 0,
    },
    {
      img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=300',
      name: 'Auditorium Hall (Capacity:200)',
      cost: 5500,
      quantity: 0,
    },
    {
      img: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=300',
      name: 'Presentation Room (Capacity:50)',
      cost: 3500,
      quantity: 0,
    },
    {
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=300',
      name: 'Large Meeting Room (Capacity:10)',
      cost: 1000,
      quantity: 0,
    },
    {
      img: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=300',
      name: 'Small Meeting Room (Capacity:5)',
      cost: 800,
      quantity: 0,
    },
  ],
  reducers: {
    incrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index]) {
        if (state[index].name === 'Small Meeting Room (Capacity:5)' && state[index].quantity >= 10) {
          return;
        }
        state[index].quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--;
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity } = venueSlice.actions;
export default venueSlice.reducer;