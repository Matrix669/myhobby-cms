import Link from 'next/link'
import styles from './Footer.module.scss'
import Wrapper from '../Wrapper/Wrapper'

const links_Websites_School_Friends = [
	{
		name: 'Mikołaj Jadczyk',
		href: 'https://mikolajjadczyk.zsti.me/',
	},
	{
		name: 'Jakub Woźny',
		href: 'https://jwozny.zsti.me/',
	},
	{
		name: 'Wiktor Galuszka',
		href: 'https://ilovehotnerds.zsti.me/',
	},
	{
		name: 'Kacper Szechlecki',
		href: 'https://sigmamale.zsti.me/',
	},
	{
		name: 'Roman Sałagacki',
		href: 'https://romansalagacki.pl/',
	},
	{
		name: 'Michał Winiarski',
		href: 'https://mwiniarski.zsti.me/',
	},
	{
		name: 'Filip Gryzło',
		href: 'https://tebuniversity.zsti.me/',
	},
	{
		name: 'Kacper Miszok',
		href: 'https://big-g-grisza.zsti.me/',
	},
	{
		name: 'Mateusz Bródka',
		href: 'https://szalonyhtml.zsti.me/',
	},
	{
		name: 'Bartosz Pieprzak',
		href: 'https://poorinhtmlsite.zsti.me/',
	},
	{
		name: 'Bartłomiej Plok',
		href: 'https://ilovewisents.zsti.me/',
	},
	{
		name: 'Jakub Szadok',
		href: 'https://mojehobby.zsti.me/',
	},
	{
		name: 'Dawid Myszczuk',
		href: 'https://aternos.zsti.me/',
	},
	{
		name: 'Aleksander Mika',
		href: 'https://pasjaznicze.zsti.me/',
	},
]

export default function Footer() {
	const year = new Date().getFullYear()
	const accountLink = 'https://github.com/Matrix669'
	return (
		<footer className={styles.footer}>
			<Wrapper>
				<div className={styles.footer__contactBox}>
					<h3>Linki do stron od kolegów z klasy :D</h3>
					<ul>
						{links_Websites_School_Friends.map(link => {
							return (
								<li key={link.name}>
									<Link href={link.href} target='_blank'>
										{link.name}
									</Link>
								</li>
							)
						})}
					</ul>
				</div>
				<div className={styles.footer__infos}>
					<a href='tel+48 420 692 137'>+48 420 692 137</a>
					<a href='mailto:hau@mail.pl'>hau@mail.pl</a>
					<p>
						© {year} Created by{' '}
						<Link target='_blank' href={accountLink}>
							Maks
						</Link>
					</p>
				</div>
			</Wrapper>
		</footer>
	)
}
