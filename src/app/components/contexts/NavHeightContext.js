'use client'
const { createContext, useContext, useRef, useState, useEffect } = require('react')

const NavHeightContext = createContext(0)

export const useNavHeight = () => useContext(NavHeightContext)

export default function NavHeightProvider({ children }) {
	const navRef = useRef(null)
	const [navHeight, setNavHeight] = useState(0)

	useEffect(() => {
		if (navRef.current) {
			setNavHeight(navRef.current.offsetHeight)
		}

		const handleResize = () => {
			if (navRef.current) {
				setNavHeight(navRef.current.offsetHeight)
			}
		}

		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return <NavHeightContext.Provider value={{ navHeight, navRef }}>{children}</NavHeightContext.Provider>
}
