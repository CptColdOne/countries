import { countryItemType } from '../../api/types';

export interface CountriesListProps {
	countries: countryItemType[];
	error: boolean;
}
