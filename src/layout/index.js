import { Box } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';

const index = ({ children }) => {
	return (
		<div>
			<Navbar />
			<Banner />
			{children}
		</div>
	);
};

export default index;
