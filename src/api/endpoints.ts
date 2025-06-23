import { axiosFetchDriverBackend } from '.';
import { fetchAllCountriesResponseType } from './types';

export const fetchAllCountries = async () => {
	const response = await axiosFetchDriverBackend<fetchAllCountriesResponseType>(
		'/all?fields=name',
	);

	return response;
};
