import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../types';

export const selectAllCountries = (state: RootState) => state.countries;

export const selectFilteredCountries = createSelector(
	[selectAllCountries, (state: RootState) => state.filters],
	(countries, filters) => {
		let result = [...countries];

		if (filters.search) {
			result = result.filter((country) =>
				country.name.common
					.toLowerCase()
					.includes(filters.search.toLowerCase()),
			);
		}

		if (filters.region) {
			result = result.filter((country) => country.region === filters.region);
		}

		return result;
	},
);
