import {createSlice} from '@reduxjs/toolkit';

const intialState = {
	  crrPage: 'explore',
};

export const navbarSlice = createSlice({
	name: 'navbar',
  	initialState: intialState,
  	reducers: {
		setPage: (state, action) => {
	  		state.crrPage = action.payload;
		},
  	},
});

export const { setPage } = navbarSlice.actions;
export const getPage = (state) => state.navbar.crrPage;
export default navbarSlice.reducer;