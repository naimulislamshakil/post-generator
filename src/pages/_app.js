import '../styles/globals.css';
import Layout from '../layout';
import { useEffect } from 'react';
import AOS from 'aos';

import 'aos/dist/aos.css';
// import '../scss/style.scss';

export default function App({ Component, pageProps }) {
	useEffect(() => {
		AOS.init({
			easing: 'ease-out-cubic',
			once: true,
			offset: 50,
		});
	}, []);
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
