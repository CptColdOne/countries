import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCountryInfo } from '../../api/endpoints';
import {
	setSelectedCountry,
	setSelectedCountryCode,
} from '../../store/selectedCountry/selectedCountrySlice';
import CountryInfo from '../../components/CountryInfo';
import Spinner from '../../components/Spinner';
import { useParams } from 'react-router-dom';

function SelectedCountryContainer() {
	const [isLoading, setIsLoading] = useState(true);
	const selectedCountry = useAppSelector((state) => state.selectedCountry);
	const dispatch = useAppDispatch();
	const { country_code } = useParams();

	useEffect(() => {
		if (country_code && country_code !== selectedCountry.countryCode) {
			dispatch(setSelectedCountryCode(country_code));
			fetchCountryData(country_code);
		} else if (country_code && !Object.keys(selectedCountry.country).length) {
			fetchCountryData(country_code);
		}
	}, [country_code, selectedCountry.countryCode]);

	const fetchCountryData = (code: string) => {
		setIsLoading(true);

		fetchCountryInfo(code)
			.then((resp) => {
				dispatch(setSelectedCountry(resp));
				setIsLoading(false);
			})
			.catch((err) => {
				console.log('error: ', err);
				setIsLoading(false);
			});
	};

	return <>{isLoading ? <Spinner /> : <CountryInfo />}</>;
}

export default SelectedCountryContainer;
