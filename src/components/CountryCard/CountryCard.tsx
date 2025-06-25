import { formatNumberWithCommas } from '../../helpers/formatNumber';
import { useAppDispatch } from '../../hooks';
import { setSelectedCountryCode } from '../../store/selectedCountry/selectedCountrySlice';
import styles from './CountryCard.module.sass';
import { CountryCardProps } from './types';
import { useNavigate } from 'react-router-dom';

function CountryCard({ country }: CountryCardProps) {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleOnSelect = () => {
		dispatch(setSelectedCountryCode(country.cca2));
		navigate(`/country/${country.cca2}`);
	};

	return (
		<div className={styles.wrapper} onClick={handleOnSelect}>
			<img className={styles.flag} src={country.flags.svg} alt="" />
			<div className={styles.description}>
				<p className={styles.name}>{country.name.official}</p>
				<p className={styles.info_row}>
					<span>Population:</span> {formatNumberWithCommas(country.population)}
				</p>
				<p className={styles.info_row}>
					<span>Region:</span> {country.region}
				</p>
				<p className={styles.info_row}>
					<span>Capital:</span> {country.capital}
				</p>
			</div>
		</div>
	);
}

export default CountryCard;
