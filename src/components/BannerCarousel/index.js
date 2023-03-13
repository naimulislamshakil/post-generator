import homepage_banner from '@/constants/Banner';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Banner from '../Banner';

const index = () => {
	return (
		<Carousel>
			{homepage_banner.map((item, i) => (
				// eslint-disable-next-line react/jsx-key
				<Banner key={i} item={item} />
			))}
		</Carousel>
	);
};

export default index;
