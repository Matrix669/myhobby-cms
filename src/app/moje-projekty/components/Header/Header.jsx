// 'use client'
// import { useNavHeight } from '@/app/components/contexts/NavHeightContext'
import styles from './Header.module.scss'
export default function Header() {
	// const { navHeight } = useNavHeight()
	return (
		<header className={styles.header} 
		// style={{ marginTop: `${(navHeight || 90) + 55}px` }}
		>
			<h1 className={`${styles.line} ${styles.titleSection} ${styles.subpageTitle}`}>Moje projekty</h1>
		</header>
	)
}
