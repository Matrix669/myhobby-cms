'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

import { RiArrowDropDownLine } from 'react-icons/ri'
import styles from './Navigation.module.scss'
import Wrapper from '../Wrapper/Wrapper'
import Logo from '../Logo/Logo'
import BurgerBtn from '../BurgerBtn/BurgerBtn'

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
	const mobileNav = [
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
			href: '/',
			onClick: closeMobileMenu,
		},
		{
			name: 'Zadania',
			href: '/',
			onClick: closeMobileMenu,
		},
		{
			name: 'Kontakt',
			href: '/#kontakt',
			onClick: closeMobileMenu,
		},
	]
	const desktopNav = [
		{
			name: 'Hobby',
			href: '/',
			dropdownLinks: [
				{
					name: 'Badminton',
					href: '/#badminton',
				},
				{
					name: 'Piłka nożna',
					href: '/#pilka-nozna',
				},
				{
					name: 'Programowanie',
					href: '/#programowanie',
				},
			],
		},
		{
			name: 'Moje projekty',
			href: '/',
		},
		{
			name: 'Zadania',
			href: '/',
		},
		{
			name: 'Kontakt',
			href: '/#kontakt',
		},
	]
	return (
		<nav className={`${styles.nav} ${navShadow ? styles.navShadow : ''}`}>
			<Wrapper>
				<div className={styles.nav__inner}>
					<Logo />
					{/* <ul className={`${styles.navMobile} ${activeMobileMenu ? styles.navActive : ''}`}>
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
					</ul> */}
					<ul className={`${styles.navMobile} ${activeMobileMenu ? styles.navActive : ''}`}>
						{mobileNav.map((link, i) => {
							return (
								<li key={link.name}>
									<Link
										className={link.dropdownLinks ? styles.navDropdownLink : ''}
										onClick={link.dropdownLinks ? () => toggleDropdown(i) : link.onClick}
										href={link.href}
										title={link.name}
									>
										{link.name} {link.dropdownLinks && <RiArrowDropDownLine size='2em' />}
									</Link>
									{activeDropDownMobile === i && link.dropdownLinks && (
										<ul>
											{link.dropdownLinks?.map(linkDropdown => {
												return (
													<li key={linkDropdown.name}>
														<Link title={linkDropdown.name} onClick={linkDropdown.onClick} href={linkDropdown.href}>
															{linkDropdown.name}
														</Link>
													</li>
												)
											})}
										</ul>
									)}
								</li>
							)
						})}
					</ul>
					{/* <ul className={styles.navDesktop}>
						<li className={styles.navDesktopDropdownLi}>
							<Link className={styles.navDropdownLink} href={'#'} onClick={e => e.preventDefault()}>
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
					</ul> */}
					<ul className={styles.navDesktop}>
						{desktopNav.map(link => {
							return (
								<li key={link.name} className={link.dropdownLinks ? styles.navDesktopDropdownLi : ''}>
									<Link className={link.dropdownLinks ? styles.navDropdownLink : ''} title={link.name} href={link.href}>
										{link.name} {link.dropdownLinks && <RiArrowDropDownLine size='2em' />}
									</Link>
									{link.dropdownLinks && (
										<ul>
											{link.dropdownLinks?.map(linkDropdown => {
												return (
													<li key={linkDropdown.name}>
														<Link title={linkDropdown.name} href={linkDropdown.href}>
															{linkDropdown.name}
														</Link>
													</li>
												)
											})}
										</ul>
									)}
								</li>
							)
						})}
					</ul>
					<BurgerBtn onClick={handleNavMobile} />
				</div>
			</Wrapper>
		</nav>
	)
}
