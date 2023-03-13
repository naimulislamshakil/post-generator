const navigation = [
	{
		title: 'HOME',
		route: '/',
		dropdown: false,
	},
	{
		title: 'ABOUT US',
		route: '/about_us',
		dropdown: false,
	},
	{
		title: 'SERVICES',
		route: '/services',
		dropdown: [
			{
				title: 'Facebook',
				routr: '/facebook',
			},
		],
	},
	{
		title: 'PORTFOLIO',
		route: '/portfolio',
		dropdown: false,
	},

	{
		title: 'CONTUCT US',
		route: '/contact_us',
		dropdown: false,
	},
];

export default navigation;
