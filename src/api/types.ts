export type fetchAllCountriesResponseType = countryItemType[];

export type countryItemType = {
	name: {
		common: string;
		official: string;
		nativeName: {
			[key: string]: {
				official: string;
				common: string;
			};
		};
	};
	capital: string[];
	region: string;
	population: '';
	flags: {
		png: string;
		svg: string;
		alt: string;
	};
	cca2: string;
};
