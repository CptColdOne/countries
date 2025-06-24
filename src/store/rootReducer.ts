import { combineReducers } from 'redux';
import { themeSlice } from './theme/themeSlice';
import { countriesSlice } from './countries/countriesSlice';
import { filtersSlice } from './filters/filtersSlice';

const rootReducer = combineReducers({
	theme: themeSlice.reducer,
	countries: countriesSlice.reducer,
	filters: filtersSlice.reducer,
});

export default rootReducer;
