import styles from './Spinner.module.sass';

function Spinner() {
	return (
		<div className={styles.spinner}>
			<div className={styles.spinner_bounce1} />
			<div className={styles.spinner_bounce2} />
			<div className={styles.spinner_bounce3} />
		</div>
	);
}

export default Spinner;
