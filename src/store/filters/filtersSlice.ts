import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
	name: 'filters',
	initialState: {
		region: '',
		search: '',
	},
	reducers: {
		setRegion: (state, action: PayloadAction<string>) => {
			state.region = action.payload;
		},
		setSearch: (state, action: PayloadAction<string>) => {
			state.search = action.payload;
		},
	},
});

export const { setRegion, setSearch } = filtersSlice.actions;
