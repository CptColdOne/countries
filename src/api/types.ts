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
};
