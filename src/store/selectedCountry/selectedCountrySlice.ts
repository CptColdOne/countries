import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { selectedCountryItemType } from '../../api/types';
import { fetchCountryInfo } from '../../api/endpoints';

export const fetchCountryInfoThunk = createAsyncThunk(
	'selectedCountry/fetchInfo',
	async (code: string) => {
		const response = await fetchCountryInfo(code);
		return response;
	},
);

export const selectedCountrySlice = createSlice({
	name: 'selectedCountry',
	initialState: {
		countryCode: '',
		country: {} as selectedCountryItemType,
		loading: false,
		error: false,
	},
	reducers: {
		setSelectedCountryCode: (state, action: PayloadAction<string>) => {
			state.countryCode = action.payload;
		},
		setSelectedCountry: (
			state,
			action: PayloadAction<selectedCountryItemType>,
		) => {
			state.country = action.payload;
		},
		resetSelectedCountry: (state) => {
			state.countryCode = '';
			state.country = {} as selectedCountryItemType;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCountryInfoThunk.pending, (state) => {
				state.loading = true;
				state.error = false;
			})
			.addCase(fetchCountryInfoThunk.fulfilled, (state, action) => {
				state.country = action.payload;
				state.loading = false;
			})
			.addCase(fetchCountryInfoThunk.rejected, (state, action) => {
				state.loading = false;
				state.error = true;
			});
	},
});

export const {
	setSelectedCountryCode,
	setSelectedCountry,
	resetSelectedCountry,
} = selectedCountrySlice.actions;
