import { axiosFetchDriverBackend } from '.';
import {
	countryInfoResponseType,
	fetchAllCountriesResponseType,
	selectedCountryItemType,
} from './types';

export const fetchAllCountries = async () => {
	const response = await axiosFetchDriverBackend<fetchAllCountriesResponseType>(
		'/all?fields=name,capital,population,region,flags,cca2',
	);

	return response;
};

export const fetchCountryInfo = async (code: string) => {
	const response = await axiosFetchDriverBackend<selectedCountryItemType>(
		`/alpha/${code}?fields=name,population,region,subregion,capital,tld,currencies,flags,languages,borders`,
	);

	return response;
};
