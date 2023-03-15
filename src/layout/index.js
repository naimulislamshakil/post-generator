import { Box } from '@mui/material';
import React from 'react';
import Navbar from '../components/apps/Navbar';

const index = ({ children }) => {
	return (
		<div>
			<Navbar />

			{children}
		</div>
	);
};

export default index;
