import { createSlice } from '@reduxjs/toolkit';
import { getUserType } from '../../types/user';

const initialState = {
  user: {} as getUserType,
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
