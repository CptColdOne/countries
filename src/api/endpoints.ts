import { axiosFetchDriverBackend } from '.';
import { fetchAllCountriesResponseType } from './types';

export const fetchAllCountries = async () => {
	const response = await axiosFetchDriverBackend<fetchAllCountriesResponseType>(
		'/all?fields=name,capital,population,region,flags,cca2',
	);

	return response;
};
