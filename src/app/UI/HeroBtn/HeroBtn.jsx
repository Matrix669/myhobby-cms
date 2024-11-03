import Link from 'next/link'
import styles from './HeroBtn.module.scss'
export default function HeroBtn({ children, link }) {
	return (
		<Link href={link} className={styles.heroBtn}>
			{children}
		</Link>
	)
}
