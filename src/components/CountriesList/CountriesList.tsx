import styles from './CountriesList.module.sass';
import { CountriesListProps } from './types';
import CountryCard from '../CountryCard';

function CountriesList({ countries, error }: CountriesListProps) {
	return (
		<div className={styles.wrapper}>
			{error ? (
				<></>
			) : (
				countries.map((item) => <CountryCard key={item.cca2} country={item} />)
			)}
		</div>
	);
}

export default CountriesList;
