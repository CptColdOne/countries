import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
	fetchCountryInfoThunk,
	setSelectedCountryCode,
} from '../../store/selectedCountry/selectedCountrySlice';
import CountryInfo from '../../components/CountryInfo';
import Spinner from '../../components/Spinner';
import { useParams } from 'react-router-dom';

function SelectedCountryContainer() {
	const { country, countryCode, loading, error } = useAppSelector(
		(state) => state.selectedCountry,
	);
	const dispatch = useAppDispatch();
	const { country_code } = useParams();

	useEffect(() => {
		if (country_code && country_code !== countryCode) {
			dispatch(setSelectedCountryCode(country_code));
			dispatch(fetchCountryInfoThunk(country_code));
		} else if (country_code && !Object.keys(country).length) {
			dispatch(fetchCountryInfoThunk(country_code));
		}
	}, [country_code, countryCode, dispatch, country]);

	return loading ? <Spinner /> : <CountryInfo error={error} />;
}

export default SelectedCountryContainer;
