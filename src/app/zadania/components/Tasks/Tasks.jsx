import Wrapper from '@/app/UI/Wrapper/Wrapper'
import Task from '../Task/Task'
import styles from './Tasks.module.scss'
import TASK_IMG from '@/app/assets/wlasny-wzorek.png'

const TASKS = [
	{
		title: 'Własny wzorek',
		href: 'https://wlasnywzorektk.zsti.me/',
		imgSrc: TASK_IMG,
        alt: ''
	},
	{
		title: 'Własny wzorek',
		href: 'https://wlasnywzorektk.zsti.me/',
		imgSrc: TASK_IMG,
        alt: ''
	},
	{
		title: 'Własny wzorek',
		href: 'https://wlasnywzorektk.zsti.me/',
		imgSrc: TASK_IMG,
        alt: ''
	},
]

export default function Tasks() {
	return (
		<section>
			<Wrapper>
				<div className={styles.tasks}>
					<h1 className={`${styles.line} ${styles.titleSection} ${styles.subpageTitle}`}>Zadania</h1>
					<div className={styles.tasks__body}>
						{TASKS.map(task => {
							return <Task key={task.href} href={task.href} imgSrc={task.imgSrc} title={task.title} alt={task.alt} />
						})}
					</div>
				</div>
			</Wrapper>
		</section>
	)
}
