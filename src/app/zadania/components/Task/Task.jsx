import Image from 'next/image'
import Link from 'next/link'
import styles from './Task.module.scss'

export default function Task({ title, href, imgSrc, alt }) {
	return (
		<Link className={styles.task} href={href} target='_blank'>
			<Image src={imgSrc} alt={alt} />
			<h2>{title}</h2>
		</Link>
	)
}
