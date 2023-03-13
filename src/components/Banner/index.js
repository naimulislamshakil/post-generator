import { RELIABILITY_TRUST_QUALITY } from '@/constants/Banner';
import {
	Box,
	Button,
	Container,
	CssBaseline,
	Grid,
	Paper,
	Typography,
} from '@mui/material';
import Image from 'next/image';
import React from 'react';

const index = (props) => {
	return (
		<div className="banner1">
			<Box>
				<CssBaseline />
				<Container maxWidth="xl">
					<Grid container spacing={2}>
						<Grid sx={12} md={6}>
							<Box className="flex justify-start h-[100vh] items-center">
								<Box>
									<Typography variant="p" className="mt-3" color="#09A78E">
										{RELIABILITY_TRUST_QUALITY}
									</Typography>
									<Typography
										variant="h2"
										className="mt-3"
										fontWeight="bold"
										color="wheat"
									>
										{props.item.title}
									</Typography>

									<Typography variant="h6" className="mt-4" color="white">
										{props.item.description}
									</Typography>
									<Button
										variant="contained"
										className="bg-[#36B88C] hover:bg-[#1f7458] rounded-full w-52 h-14 mt-6"
									>
										GET START
									</Button>
								</Box>
							</Box>
						</Grid>
						<Grid className="flex  justify-center items-center" sx={12} md={6}>
							<Image
								src={props.item.img}
								alt={props.item.alt}
								width={500}
								height={200}
							/>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</div>
	);
};

export default index;
