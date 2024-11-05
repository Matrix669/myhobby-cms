import styles from './BurgerBtn.module.scss'
export default function BurgerBtn({ onClick }) {
	return (
		<button className={styles.burgerBtn} onClick={onClick} name='navigation button'>
			<div className={styles.burgerBtn__Box}>
				<div className={styles.burgerBtn__Bars}></div>
			</div>
		</button>
	)
}
