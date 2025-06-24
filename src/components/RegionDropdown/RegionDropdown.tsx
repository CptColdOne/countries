import { useState } from 'react';
import styles from './RegionDropdown.module.sass';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setRegion } from '../../store/filters/filtersSlice';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';

function RegionDropdown() {
	const [isOpen, setIsOpen] = useState(false);
	const regions = ['All', 'Africa', 'America', 'Asia', 'Europe', 'Oceania'];
	const selectedRegion = useAppSelector((state) => state.filters.region);
	const dispatch = useAppDispatch();

	const handleRegionSelect = (region: string) => {
		dispatch(setRegion(region === 'All' ? '' : region));
		setIsOpen(false);
	};

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={styles.dropdown_container}>
			<div className={styles.dropdown_header} onClick={toggleDropdown}>
				<span>{selectedRegion || 'Filter by Region'}</span>
				{isOpen ? <IoChevronUp /> : <IoChevronDown />}
			</div>
			{isOpen && (
				<div className={styles.dropdown_list}>
					{regions.map((region) => (
						<div
							key={region}
							className={styles.dropdown_item}
							onClick={() => handleRegionSelect(region)}
						>
							{region}
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default RegionDropdown;
