import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import styles from './Header.module.sass';
import { changeTheme } from '../../store/theme/themeSlice';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';

function Header() {
	const theme = useAppSelector((state) => state.theme);
	const dispatch = useAppDispatch();

	useEffect(() => {
		document.body.setAttribute('data-theme', theme);
	}, [theme]);

	const toggleTheme = () => {
		dispatch(changeTheme(theme === 'Light' ? 'Dark' : 'Light'));
	};

	return (
		<div className={styles.header}>
			<div className={styles.content}>
				<div className={styles.logo}>Where in the world?</div>
				<div className={styles.mode_switcher}>
					<div className={styles.switcher} onClick={toggleTheme}>
						{theme === 'Light' ? (
							<IoMoonOutline size={'14px'} />
						) : (
							<IoMoon size={'14px'} />
						)}
						{theme === 'Light' ? 'Dark' : 'Light'} mode
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
