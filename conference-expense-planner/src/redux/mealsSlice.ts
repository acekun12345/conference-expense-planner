import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MealItem {
  id: number;
  name: string;
  cost: number;
  selected: boolean;
}

export interface MealsState {
  numberOfPeople: number;
  items: MealItem[];
}

const initialState: MealsState = {
  numberOfPeople: 1,
  items: [
    { id: 1, name: 'Breakfast', cost: 50, selected: false },
    { id: 2, name: 'High Tea', cost: 25, selected: false },
    { id: 3, name: 'Lunch', cost: 65, selected: false },
    { id: 4, name: 'Dinner', cost: 70, selected: false },
  ],
};

export const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    toggleMealSelection: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      if (state.items[index]) {
        state.items[index].selected = !state.items[index].selected;
      }
    },
    setNumberOfPeople: (state, action: PayloadAction<number>) => {
      state.numberOfPeople = action.payload;
    },
  },
});

export const { toggleMealSelection, setNumberOfPeople } = mealsSlice.actions;
export default mealsSlice.reducer;