import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { countryItemType } from '../../api/types';

export const countriesSlice = createSlice({
	name: 'countries',
	initialState: [] as countryItemType[],
	reducers: {
		setCountries: (_state, action: PayloadAction<countryItemType[]>) => {
			return action.payload;
		},
	},
});

export const { setCountries } = countriesSlice.actions;
