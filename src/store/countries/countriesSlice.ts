import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { countryItemType } from '../../api/types';
import { fetchAllCountries } from '../../api/endpoints';

export const fetchCountriesThunk = createAsyncThunk(
	'countries/fetchAll',
	async () => {
		const response = await fetchAllCountries();
		return response;
	},
);

export const countriesSlice = createSlice({
	name: 'countries',
	initialState: {
		data: [] as countryItemType[],
		loading: false,
		error: false,
	},
	reducers: {
		setCountries: (state, action: PayloadAction<countryItemType[]>) => {
			state.data = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCountriesThunk.pending, (state) => {
				state.loading = true;
				state.error = false;
			})
			.addCase(fetchCountriesThunk.fulfilled, (state, action) => {
				state.data = action.payload;
				state.loading = false;
			})
			.addCase(fetchCountriesThunk.rejected, (state, action) => {
				state.loading = false;
				state.error = true;
			});
	},
});

export const { setCountries } = countriesSlice.actions;
