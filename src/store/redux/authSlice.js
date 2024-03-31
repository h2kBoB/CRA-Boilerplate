/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

// TODO: 나중에 JWT 관련 이 파일 바꿔 주시요!
const initialState = {
  isLoggedIn: !!localStorage.getItem('isLoggedIn'),
  user: JSON.parse(localStorage.getItem('user')) || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('user');
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
