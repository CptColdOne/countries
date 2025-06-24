import { useEffect, useState } from 'react';
import { fetchAllCountries } from '../../api/endpoints';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCountries } from '../../store/countries/countriesSlice';
import CountriesList from '../../components/CountriesList';
import Spinner from '../../components/Spinner';
import { selectFilteredCountries } from '../../store/countries/countriesSelector';

function CountriesListContainer() {
	const [isLoading, setIsLoading] = useState(true);
	const countries = useAppSelector(selectFilteredCountries);
	const dispatch = useAppDispatch();

	useEffect(() => {
		updateCountries();
	}, []);

	const updateCountries = () => {
		setIsLoading(true);

		fetchAllCountries()
			.then((resp) => {
				dispatch(setCountries(resp));
				setIsLoading(false);
			})
			.catch((err) => console.log('error: ', err));
	};

	return (
		<>{isLoading ? <Spinner /> : <CountriesList countries={countries} />}</>
	);
}

export default CountriesListContainer;
