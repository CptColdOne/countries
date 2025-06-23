import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
	name: 'theme',
	initialState: 'Light',
	reducers: {
		changeTheme: (_state, action: PayloadAction<string>) => {
			return action.payload;
		},
	},
});

export const { changeTheme } = themeSlice.actions;
