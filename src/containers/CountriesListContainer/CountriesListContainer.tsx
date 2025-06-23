import { useEffect } from 'react';
import { fetchAllCountries } from '../../api/endpoints';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCountries } from '../../store/countries/countriesSlice';

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
			{countries.map((item) => (
				<p>{item.name.common}</p>
			))}
		</>
	);
}

export default CountriesListContainer;
