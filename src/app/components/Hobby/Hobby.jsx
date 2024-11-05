import Image from 'next/image'
import styles from './Hobby.module.scss'

export default function Hobby({ id, title, imgSrc, alt, subTitle, text }) {
	return (
		<div id={id} className={styles.hobby}>
			<h2 className={`${styles.titleSection} ${styles.line}`}>{title}</h2>
			<div className={styles.hobby__inner}>
				<Image src={imgSrc} alt={alt} />
				<div className={styles.hobby__TextBox}>
					<h3>{subTitle}</h3>
					<p>{text}</p>
				</div>
			</div>
		</div>
	)
}
