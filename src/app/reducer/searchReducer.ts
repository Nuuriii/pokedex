import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
  search: string;
}

const initialState: SearchState = {
  search: '',
};

export const searchingSlice = createSlice({
  name: 'searching',
  initialState,
  reducers: {
    searchPokemonByName: (state, action: PayloadAction<SearchState>) => {
      state.search = action.payload.search;
    },
  },
});

export const { searchPokemonByName } = searchingSlice.actions;

export default searchingSlice.reducer;
