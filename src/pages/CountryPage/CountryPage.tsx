import styles from './CountryPage.module.sass';
import SelectedCountryContainer from '../../containers/SelectedCountryContainer';
import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { useAppDispatch } from '../../hooks';
import { resetSelectedCountry } from '../../store/selectedCountry/selectedCountrySlice';

function CountryPage() {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const handleOnBack = () => {
		dispatch(resetSelectedCountry());
		navigate(-1);
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.back_button} onClick={handleOnBack}>
				<BiArrowBack className={styles.back_icon} />
				Back
			</div>
			<SelectedCountryContainer />
		</div>
	);
}

export default CountryPage;
