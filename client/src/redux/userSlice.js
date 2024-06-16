import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : null,
  token: JSON.parse(localStorage.getItem('token')) ? JSON.parse(localStorage.getItem('token')) : null,
  isAuthenticated: JSON.parse(localStorage.getItem('isAuthenticated')) ? JSON.parse(localStorage.getItem('isAuthenticated')) : false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      localStorage.setItem('user', JSON.stringify(state.user));
      localStorage.setItem('token', JSON.stringify(state.token));
      localStorage.setItem('isAuthenticated', JSON.stringify(true));
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null; 
      state.isAuthenticated = false;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      localStorage.removeItem('isAuthenticated');
    }
  }
});

export const { setUser, setLogout } = userSlice.actions;
export default userSlice.reducer;