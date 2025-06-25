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

export type selectedCountryItemType = {
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
	population: number;
	region: string;
	subregion: string;
	capital: string[];
	tld: string[];
	currencies: {
		[key: string]: {
			symbol: string;
			name: string;
		};
	};
	flags: {
		png: string;
		svg: string;
		alt: string;
	};
	languages: {
		[key: string]: string;
	};
	borders: string[];
};

export type countryInfoResponseType = selectedCountryItemType[];
