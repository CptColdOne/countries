import { lazy } from 'react';
import styles from './App.module.sass';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';

const CountriesListPage = lazy(() => import('../src/pages/CountriesListPage'));
const CountryPage = lazy(() => import('../src/pages/CountryPage'));

function App() {
	return (
		<div className={styles.app}>
			<Header />
			<div className={styles.content}>
				<Routes>
					<Route path={'/'} element={<CountriesListPage />} />
					<Route path="/country" element={<CountryPage />}>
						<Route path="/country/:country_code" element={<CountryPage />} />
					</Route>
				</Routes>
			</div>
		</div>
	);
}

export default App;
