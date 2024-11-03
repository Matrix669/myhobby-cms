import styles from './BurgerBtn.module.scss'
export default function BurgerBtn({ onClick }) {
	return (
		<button className={styles.burgerBtn} onClick={onClick}>
			<div className={styles.burgerBtn__Box}>
				<div className={styles.burgerBtn__Bars}></div>
			</div>
		</button>
	)
}
