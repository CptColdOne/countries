import { combineReducers } from 'redux';
import { themeSlice } from './theme/themeSlice';
import { countriesSlice } from './countries/countriesSlice';

const rootReducer = combineReducers({
	theme: themeSlice.reducer,
	countries: countriesSlice.reducer,
});

export default rootReducer;
