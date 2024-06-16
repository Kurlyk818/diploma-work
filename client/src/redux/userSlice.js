import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, setLogout } = userSlice.actions;

export default userSlice.reducer;