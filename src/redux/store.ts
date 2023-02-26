import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/user';

export const store = configureStore({
  reducer: userSlice,
});
export type RootState = ReturnType<typeof store.getState>;
