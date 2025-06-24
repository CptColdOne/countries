import { useState, useEffect, useCallback } from 'react';
import { IoSearch, IoClose } from 'react-icons/io5';
import { useAppDispatch } from '../../hooks';
import { setSearch } from '../../store/filters/filtersSlice';
import styles from './SearchInput.module.sass';

function SearchInput() {
	const [inputValue, setInputValue] = useState('');
	const dispatch = useAppDispatch();

	const debouncedSearch = useCallback(
		(value: string) => {
			if (value === '') {
				dispatch(setSearch(''));
				return;
			}

			const timer = setTimeout(() => {
				dispatch(setSearch(value));
			}, 300);

			return () => clearTimeout(timer);
		},
		[dispatch],
	);

	useEffect(() => {
		const cleanup = debouncedSearch(inputValue);
		return cleanup;
	}, [inputValue, debouncedSearch]);

	return (
		<div className={styles.input_container}>
			<IoSearch className={styles.search_icon} />
			<input
				className={styles.input}
				type="text"
				placeholder="Search for a country..."
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<IoClose
				className={styles.cross_icon}
				onClick={() => setInputValue('')}
			/>
		</div>
	);
}

export default SearchInput;
