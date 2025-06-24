import styles from './CountriesList.module.sass';
import { CountriesListProps } from './types';
import CountryCard from '../CountryCard';

function CountriesList({ countries }: CountriesListProps) {
	return (
		<div className={styles.wrapper}>
			{countries.map((item) => (
				<CountryCard key={item.numericCode} country={item} />
			))}
		</div>
	);
}

export default CountriesList;
