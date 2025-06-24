import { useEffect } from 'react';
import { fetchAllCountries } from '../../api/endpoints';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCountries } from '../../store/countries/countriesSlice';
import CountriesList from '../../components/CountriesList';

function CountriesListContainer() {
	const countries = useAppSelector((state) => state.countries);
	const dispatch = useAppDispatch();

	useEffect(() => {
		updateCountries();
	}, []);

	const updateCountries = () => {
		fetchAllCountries()
			.then((resp) => {
				dispatch(setCountries(resp));
			})
			.catch((err) => console.log('error: ', err));
	};

	return (
		<>
			<CountriesList countries={countries} />
		</>
	);
}

export default CountriesListContainer;
