import { combineReducers } from 'redux';
import { themeSlice } from './theme/themeSlice';
import { countriesSlice } from './countries/countriesSlice';
import { filtersSlice } from './filters/filtersSlice';
import { selectedCountrySlice } from './selectedCountry/selectedCountrySlice';

const rootReducer = combineReducers({
	theme: themeSlice.reducer,
	countries: countriesSlice.reducer,
	filters: filtersSlice.reducer,
	selectedCountry: selectedCountrySlice.reducer,
});

export default rootReducer;
