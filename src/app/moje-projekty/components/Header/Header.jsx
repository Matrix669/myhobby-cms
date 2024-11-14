import styles from './Header.module.scss'
export default function Header() {
	return (
		<header className={styles.header} 
		>
			<h1 className={`${styles.line} ${styles.titleSection} ${styles.subpageTitle}`}>Moje projekty</h1>
		</header>
	)
}
