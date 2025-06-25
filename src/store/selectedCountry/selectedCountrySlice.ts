import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { selectedCountryItemType } from '../../api/types';

export const selectedCountrySlice = createSlice({
	name: 'selectedCountry',
	initialState: { countryCode: '', country: {} as selectedCountryItemType },
	reducers: {
		setSelectedCountryCode: (state, action: PayloadAction<string>) => {
			state.countryCode = action.payload;
		},
		setSelectedCountry: (
			state,
			action: PayloadAction<selectedCountryItemType>,
		) => {
			return { countryCode: state.countryCode, country: action.payload };
		},
		resetSelectedCountry: () => {
			return { countryCode: '', country: {} as selectedCountryItemType };
		},
	},
});

export const {
	setSelectedCountryCode,
	setSelectedCountry,
	resetSelectedCountry,
} = selectedCountrySlice.actions;
