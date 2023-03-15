import {
	Box,
	Typography,
	Container,
	AppBar,
	CssBaseline,
	Toolbar,
	Button,
	MenuItem,
	IconButton,
	Menu,
	Tooltip,
	Avatar,
} from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/material/styles';
import Link from 'next/link';
import navigation from '../../../navigation';
import React, { useEffect, useState } from 'react';
// import logo from '/images/digitalweb it ltd.png';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const index = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [anchorElNav, setAnchorElNav] = useState(null);
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [anchorElUser, setAnchorElUser] = useState(null);
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [user, setUser] = useState();
	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		// Perform localStorage action
		setUser(localStorage.getItem('user'));
	}, []);
	console.log(user);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	return (
		<Box>
			<CssBaseline />
			<AppBar
				className="nav-font"
				position="fixed"
				style={{ backgroundColor: '#212C4F' }}
			>
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="inherit"
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'left',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: 'block', md: 'none' },
								}}
							>
								{navigation.map((page) => (
									<MenuItem key={page} onClick={handleCloseNavMenu}>
										<Link
											className="word-spece"
											href={page.route}
											textAlign="center"
										>
											{page.title}
										</Link>
									</MenuItem>
								))}
							</Menu>
						</Box>
						<Link href={'/'}>
							<img
								src={'/images/digitalweb it ltd.png'}
								alt=""
								className="w-60"
							/>
						</Link>

						<Box
							sx={{
								flexGrow: 1,
								display: { xs: 'none', md: 'flex', justifyContent: 'center' },
							}}
						>
							{navigation.map((page) => (
								<Link
									href={page.route}
									key={page}
									className="p-5 word-spece"
									sx={{ my: 2, color: 'white', display: 'block' }}
								>
									{page.title}
								</Link>
							))}
						</Box>

						<Box sx={{ flexGrow: 0 }}>
							{user ? (
								<>
									<Tooltip title="Open settings">
										<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
											<Avatar
												alt="Remy Sharp"
												src="/static/images/avatar/2.jpg"
											/>
										</IconButton>
									</Tooltip>
									<Menu
										sx={{ mt: '45px' }}
										id="menu-appbar"
										anchorEl={anchorElUser}
										anchorOrigin={{
											vertical: 'top',
											horizontal: 'right',
										}}
										keepMounted
										transformOrigin={{
											vertical: 'top',
											horizontal: 'right',
										}}
										open={Boolean(anchorElUser)}
										onClose={handleCloseUserMenu}
									>
										{settings.map((setting) => (
											<MenuItem key={setting} onClick={handleCloseUserMenu}>
												<Typography textAlign="center">{setting}</Typography>
											</MenuItem>
										))}
									</Menu>
								</>
							) : (
								<Button
									variant="contained"
									className="bg-[#36B88C] hover:bg-[#1f7458] rounded-full w-36"
								>
									LOGIN
								</Button>
							)}
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
};

export default index;
