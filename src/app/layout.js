import Footer from './UI/Footer/Footer'
import Navigation from './UI/Navigation/Navigation'
import NavHeightProvider from './components/contexts/NavHeightContext'
import './globals.scss'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
	weight: ['300', '400', '700'],
	style: ['normal'],
	subsets: ['latin'],
	fallback: ['sans-serif']
})

export const metadata = {
	title: {
		template: '%s | myHobby',
		default: 'myHobby',
	},
	description: 'myHobby but it is connected to Wordpress cms',
}

export default function RootLayout({ children }) {
	return (
		<html lang='pl'>
			<body className={montserrat.className}>
				<NavHeightProvider>
					<Navigation />
					{children}
					<Footer />
				</NavHeightProvider>
			</body>
		</html>
	)
}
