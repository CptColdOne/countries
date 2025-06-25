import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCountriesThunk } from '../../store/countries/countriesSlice';
import CountriesList from '../../components/CountriesList';
import Spinner from '../../components/Spinner';
import { selectFilteredCountries } from '../../store/countries/countriesSelector';

function CountriesListContainer() {
	const countries = useAppSelector(selectFilteredCountries);
	const { loading, error } = useAppSelector((state) => state.countries);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchCountriesThunk());
	}, [dispatch]);

	return loading ? (
		<Spinner />
	) : (
		<CountriesList countries={countries} error={error} />
	);
}

export default CountriesListContainer;
