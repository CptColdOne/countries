import { useNavigate } from 'react-router-dom';
import { formatNumberWithCommas } from '../../helpers/formatNumber';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setSelectedCountryCode } from '../../store/selectedCountry/selectedCountrySlice';
import styles from './CountryInfo.module.sass';

function CountryInfo({ error }: { error: boolean }) {
	const selectedCountry = useAppSelector((state) => state.selectedCountry);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleOnClickBorder = (border: string) => {
		dispatch(setSelectedCountryCode(border));
		navigate(`/country/${border}`);
	};

	const hasData =
		selectedCountry?.country && Object.keys(selectedCountry.country).length > 0;

	return error || !hasData ? (
		<div className={styles.wrapper}></div>
	) : (
		<div className={styles.wrapper}>
			<div className={styles.flag}>
				{selectedCountry.country.flags?.svg && (
					<img src={selectedCountry.country.flags.svg} alt="" />
				)}
			</div>

			<div className={styles.country_info}>
				<p className={styles.country_name}>
					{selectedCountry.country.name?.official || ''}
				</p>

				<div className={styles.info_columns}>
					<div className={styles.info_column}>
						<p className={styles.info}>
							<span>Native Name:</span>
							{selectedCountry.country.name?.nativeName
								? Object.values(selectedCountry.country.name.nativeName)
										.map((name: any) => name.official)
										.join(', ')
								: ''}
						</p>
						<p className={styles.info}>
							<span>Population:</span>
							{selectedCountry.country.population
								? formatNumberWithCommas(selectedCountry.country.population)
								: ''}
						</p>
						<p className={styles.info}>
							<span>Region:</span>
							{selectedCountry.country.region || ''}
						</p>
						<p className={styles.info}>
							<span>Sub Region:</span>
							{selectedCountry.country.subregion || ''}
						</p>
						<p className={styles.info}>
							<span>Capital:</span>
							{selectedCountry.country.capital || ''}
						</p>
					</div>
					<div className={styles.info_column}>
						<p className={styles.info}>
							<span>Top Level Domain:</span>
							{selectedCountry.country.tld?.join(', ') || ''}
						</p>
						<p className={styles.info}>
							<span>Currencies:</span>
							{selectedCountry.country.currencies
								? Object.values(selectedCountry.country.currencies)
										.map((currency: any) => currency.name)
										.join(', ')
								: ''}
						</p>
						<p className={styles.info}>
							<span>Languages:</span>
							{selectedCountry.country.languages
								? Object.values(selectedCountry.country.languages).join(', ')
								: ''}
						</p>
					</div>
				</div>

				<div className={styles.borders}>
					<span>Border Countries:</span>
					<div className={styles.borders_container}>
						{selectedCountry.country.borders?.map((border: string) => (
							<div
								key={border}
								className={styles.border_button}
								onClick={() => handleOnClickBorder(border)}
							>
								{border}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default CountryInfo;
