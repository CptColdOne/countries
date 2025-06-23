import { lazy } from 'react';
import styles from './App.module.sass';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';

const CountriesListPage = lazy(() => import('../src/pages/CountriesListPage'));

function App() {
	return (
		<div className={styles.app}>
			<Header />
			<div className={styles.content}>
				<Routes>
					<Route path={'/'} element={<CountriesListPage />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
