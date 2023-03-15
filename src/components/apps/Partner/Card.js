import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Card = ({ item }) => {
	return (
		<Box>
			<Image
				className="mr-2"
				src={item.img}
				alt={item.tooltip}
				width={150}
				height={40}
			/>
		</Box>
	);
};

export default Card;
