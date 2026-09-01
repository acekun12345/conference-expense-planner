import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface VenueItem {
  id: number;
  name: string;
  capacity: number;
  cost: number;
  img: string;
  quantity: number;
}

const initialState: VenueItem[] = [
  {
    id: 1,
    name: 'Auditorium Hall',
    capacity: 200,
    cost: 5500,
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&q=80',
    quantity: 0,
  },
  {
    id: 2,
    name: 'Conference Room',
    capacity: 15,
    cost: 3500,
    img: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=500&q=80',
    quantity: 0,
  },
  {
    id: 3,
    name: 'Presentation Room',
    capacity: 50,
    cost: 700,
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=80',
    quantity: 0,
  },
  {
    id: 4,
    name: 'Large Meeting Room',
    capacity: 10,
    cost: 900,
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=80',
    quantity: 0,
  },
  {
    id: 5,
    name: 'Small Meeting Room',
    capacity: 5,
    cost: 1100,
    img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=500&q=80',
    quantity: 0,
  },
];

export const venuesSlice = createSlice({
  name: 'venues',
  initialState,
  reducers: {
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      if (state[index]) {
        state[index].quantity += 1;
      }
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity -= 1;
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity } = venuesSlice.actions;
export default venuesSlice.reducer;