import { configureStore } from '@reduxjs/toolkit';
import searchingReducer from '@/app/reducer/searchReducer';

export const store = configureStore({
  reducer: {
    searchPokemon: searchingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
