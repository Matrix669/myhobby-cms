import { closeMobileMenu } from "../utils/closeMobileMenu";

export const NAV_LINKS = [
	{
		name: 'Hobby',
		href: '/',
		dropdownLinks: [
			{
				name: 'Badminton',
				href: '/#badminton',
				onClick: closeMobileMenu,
			},
			{
				name: 'Piłka nożna',
				href: '/#pilka-nozna',
				onClick: closeMobileMenu,
			},
			{
				name: 'Programowanie',
				href: '/#programowanie',
				onClick: closeMobileMenu,
			},
		],
	},
	{
		name: 'Moje projekty',
		href: '/moje-projekty',
		onClick: closeMobileMenu,
	},
	{
		name: 'Zadania',
		href: '/zadania',
		onClick: closeMobileMenu,
	},
	{
		name: 'Kontakt',
		href: '/#kontakt',
		onClick: closeMobileMenu,
	},
]
