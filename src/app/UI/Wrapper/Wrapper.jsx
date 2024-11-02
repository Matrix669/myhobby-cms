import styles from './Wrapper.module.scss'

export default function Layout({ children }) {
	return <div className={styles.wrapper}>{children}</div>
}
