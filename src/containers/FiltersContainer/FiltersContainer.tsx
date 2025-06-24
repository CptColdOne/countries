import styles from './FiltersContainer.module.sass';
import SearchInput from '../../components/SearchInput';
import RegionDropdown from '../../components/RegionDropdown';

function FiltersContainer() {
	return (
		<div className={styles.wrapper}>
			<SearchInput />
			<RegionDropdown />
		</div>
	);
}

export default FiltersContainer;
