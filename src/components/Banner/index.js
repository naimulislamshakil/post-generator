import { Box, Container, CssBaseline, Grid, Typography } from '@mui/material';
import React from 'react';

const index = () => {
	return (
		<div className="banner1">
			<Box>
				<CssBaseline />
				<Container maxWidth="xl" className="">
					<Typography color={'red'}>gfhhg</Typography>
					<Grid container spacing={2}>
						<Grid item xs={8}>
							<Typography className="flex">
								RELIABILITY. TRUST. QUALITY.
							</Typography>
						</Grid>
						<Grid item xs={4}>
							<p>xs=4</p>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</div>
	);
};

export default index;
