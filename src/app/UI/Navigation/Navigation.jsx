'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Wrapper from '../Wrapper/Wrapper'

import { RiArrowDropDownLine } from 'react-icons/ri'
import styles from './Navigation.module.scss'

const mobileNav = [
	{
		
	}
]

export default function Navigation() {
	const [activeMobileMenu, setActiveMenu] = useState(false)
	const [activeDropDownMobile, setDropDownMobile] = useState(null)
	const [navShadow, setNavShadow] = useState(false)

	function handleNavMobile() {
		setActiveMenu(prev => !prev)
		setDropDownMobile(null)
	}

	function toggleDropdown(dropdownId) {
		setDropDownMobile(prev => (prev === dropdownId ? null : dropdownId))
	}

	function closeMobileMenu() {
		setActiveMenu(false)
	}
	useEffect(() => {
		const handleShadowNav = () => {
			if (window.scrollY >= 300) {
				setNavShadow(true)
			} else {
				setNavShadow(false)
			}
		}

		window.addEventListener('scroll', handleShadowNav)
		return () => {
			window.removeEventListener('scroll', handleShadowNav)
		}
	}, [])

	return (
		<nav className={`${styles.nav} ${navShadow ? styles.navShadow : ''}`}>
			<Wrapper>
				<div className={styles.nav__inner}>
					<Link className={styles.navBrand} href={'/'}>
						my<span>Hobby</span>
					</Link>
					<ul className={`${styles.navMobile} ${activeMobileMenu ? styles.navActive : ''}`}>
						<li>
							<Link onClick={() => toggleDropdown('dropdown1')} className={styles.navDropdownLink} href={'/'}>
								Hobby <RiArrowDropDownLine size='2em' />
							</Link>
							{activeDropDownMobile === 'dropdown1' && (
								<ul>
									<li>
										<Link onClick={closeMobileMenu} href={'#badminton'}>
											Badminton
										</Link>
									</li>
									<li>
										<Link onClick={closeMobileMenu} href={'#pilka-nozna'}>
											Piłka Nożna
										</Link>
									</li>
									<li>
										<Link onClick={closeMobileMenu} href={'#programowanie'}>
											Programowanie
										</Link>
									</li>
								</ul>
							)}
						</li>
						<li>
							<Link onClick={closeMobileMenu} href={'/'}>
								Moje projekty
							</Link>
						</li>
						<li>
							<Link onClick={closeMobileMenu} href={'/'}>
								Zadania
							</Link>
						</li>
						<li>
							<Link onClick={closeMobileMenu} href={'/'}>
								Kontakt
							</Link>
						</li>
					</ul>
					<ul className={styles.navDesktop}>
						<li className={styles.navDesktopDropdownLi}>
							<Link className={styles.navDropdownLink} href={'#'} onClick={e=>e.preventDefault()}>
								Hobby <RiArrowDropDownLine size='2em' />
							</Link>
							<ul>
								<li>
									<Link href={'#badminton'}>Badminton</Link>
								</li>
								<li>
									<Link href={'#pilka-nozna'}>Piłka Nożna</Link>
								</li>
								<li>
									<Link href={'#programowanie'}>Programowanie</Link>
								</li>
							</ul>
						</li>
						<li>
							<Link href={'/'}>Moje projekty</Link>
						</li>
						<li>
							<Link href={'/'}>Zadania</Link>
						</li>
						<li>
							<Link href={'/'}>Kontakt</Link>
						</li>
					</ul>
					<button className={styles.navBurgerBtn} onClick={handleNavMobile}>
						<div className={styles.navBurgerBtn__Box}>
							<div className={styles.navBurgerBtn__Bars}></div>
						</div>
					</button>
				</div>
			</Wrapper>
		</nav>
	)
}
