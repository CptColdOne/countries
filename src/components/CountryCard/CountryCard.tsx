import { formatNumberWithCommas } from '../../helpers/formatNumber';
import styles from './CountryCard.module.sass';
import { CountryCardProps } from './types';

function CountryCard({ country }: CountryCardProps) {
	return (
		<div className={styles.wrapper}>
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
