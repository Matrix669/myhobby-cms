import Wrapper from '@/app/UI/Wrapper/Wrapper'
import Header from '../Header/Header'
import Projects from '../Projects/Projects'
import styles from './MyProjects.module.scss'

export default function MyProjects() {
	return (
		<section className={styles.myProjects}>
			<Wrapper style={'2560px'}>
				<Header />
				<Projects />
			</Wrapper>
		</section>
	)
}
