import styles from './Wrapper.module.scss'

export default function Wrapper({ children, style }) {
	return <div style={{maxWidth: style}} className={styles.wrapper}>{children}</div>
}
