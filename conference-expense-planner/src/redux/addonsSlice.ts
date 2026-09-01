import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AddonItem {
  id: number;
  name: string;
  cost: number;
  img: string;
  quantity: number;
}

const initialState: AddonItem[] = [
  {
    id: 1,
    name: 'Projectors',
    cost: 200,
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&q=80',
    quantity: 0,
  },
  {
    id: 2,
    name: 'Speakers',
    cost: 35,
    img: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=500&q=80',
    quantity: 0,
  },
  {
    id: 3,
    name: 'Microphones',
    cost: 45,
    img: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=500&q=80',
    quantity: 0,
  },
  {
    id: 4,
    name: 'Whiteboards',
    cost: 80,
    img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=500&q=80',
    quantity: 0,
  },
  {
    id: 5,
    name: 'Signage',
    cost: 80,
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=500&q=80',
    quantity: 0,
  },
];

export const addonsSlice = createSlice({
  name: 'addons',
  initialState,
  reducers: {
    incrementAddonQuantity: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      if (state[index]) {
        state[index].quantity += 1;
      }
    },
    decrementAddonQuantity: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity -= 1;
      }
    },
  },
});

export const { incrementAddonQuantity, decrementAddonQuantity } = addonsSlice.actions;
export default addonsSlice.reducer;