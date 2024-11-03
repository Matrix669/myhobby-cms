import Link from "next/link";
import styles from './Logo.module.scss'

export default function Logo() {
	return (
		<Link className={styles.logo} href={'/#'}>
			my<span>Hobby</span>
		</Link>
	)
}
