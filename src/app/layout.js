import Footer from './UI/Footer/Footer'
import Navigation from './UI/Navigation/Navigation'
import './globals.scss'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
	weight: ['400', '700'],
	style: ['normal'],
	subsets: ['latin'],
})

export const metadata = {
	title: 'myHobby',
	description: 'myHobby but it is connected to Wordpress cms',
}

export default function RootLayout({ children }) {
	return (
		<html lang='pl'>
			<body className={montserrat.className}>
				<Navigation />
				{children}
				<Footer />
			</body>
		</html>
	)
}
