import partner from '@/constants/Partner';
import { Box, Container, CssBaseline, Paper } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Card from './Card';

const index = () => {
	return (
		<Box>
			<CssBaseline />
			<Container maxWidth="lg">
				<Paper
					elevation={2}
					className="mt-[-40px] p-3 flex  justify-center items-center"
				>
					{partner.map((item, i) => (
						<Card key={i} item={item} />
					))}
				</Paper>
			</Container>
		</Box>
	);
};

export default index;
