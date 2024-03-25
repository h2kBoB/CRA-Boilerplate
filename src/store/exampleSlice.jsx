import { createSlice } from '@reduxjs/toolkit';

const exampleSlice = createSlice({
  name: 'example',
  initialState: {
    // add initstate
  },
  reducers: {
    // add reducer func
  },
});

export const { actions, reducer } = exampleSlice;
export default reducer;
