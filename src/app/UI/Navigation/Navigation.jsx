'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

import { RiArrowDropDownLine } from 'react-icons/ri'
import styles from './Navigation.module.scss'
import Wrapper from '../Wrapper/Wrapper'
import Logo from '../Logo/Logo'
import BurgerBtn from '../BurgerBtn/BurgerBtn'
import { useNavHeight } from '@/app/contexts/NavHeightContext'
import { usePathname } from 'next/navigation'
import { NAV_LINKS } from '@/app/constants/links'

export default function Navigation() {
	const [activeMobileMenu, setActiveMenu] = useState(false)
	const [activeDropDownMobile, setDropDownMobile] = useState(null)
	const [navShadow, setNavShadow] = useState(false)
	const { navRef } = useNavHeight()
	const pathname = usePathname()
	const isHomePage = pathname === '/'

	function handleNavMobile() {
		setActiveMenu(prev => !prev)
		setDropDownMobile(null)
	}

	function toggleDropdown(dropdownId) {
		setDropDownMobile(prev => (prev === dropdownId ? null : dropdownId))
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
		<nav
			ref={navRef}
			className={`${styles.nav} ${isHomePage && navShadow ? styles.navShadow : ''} ${!isHomePage ? styles.navSubpage : ''}`}
		>
			<Wrapper>
				<div className={styles.nav__inner}>
					<Logo />
					{/* mobile menu */}
					<ul className={`${styles.navMobile} ${activeMobileMenu ? styles.navActive : ''}`}>
						{NAV_LINKS.map((link, i) => {
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
					{/* desktop menu */}
					<ul className={styles.navDesktop}>
						{NAV_LINKS.map(link => {
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
