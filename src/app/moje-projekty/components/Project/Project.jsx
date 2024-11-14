import Link from 'next/link'
import Image from 'next/image'
import styles from './Project.module.scss'
export default function Project({ href, title, imgSrc }) {
	return (
		<Link href={href} target='_blank' className={styles.project}>
			<Image src={imgSrc}/>
			<h2>{title}</h2>
		</Link>
	)
}
