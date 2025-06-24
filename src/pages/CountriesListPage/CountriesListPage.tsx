import styles from './CountriesListPage.module.sass';
import CountriesListContainer from '../../containers/CountriesListContainer';
import FiltersContainer from '../../containers/FiltersContainer';

function CountriesListPage() {
	return (
		<div className={styles.wrapper}>
			<FiltersContainer />
			<CountriesListContainer />
		</div>
	);
}

export default CountriesListPage;
