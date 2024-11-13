import MainContent from '../UI/MainContent/MainContent'
import Tasks from './components/Tasks/Tasks'

export const metadata = {
	title: 'Zadania',
}
export const navMarginTop = 140 + 'px'
export const marginBottom = 20 + 'px'
export default function TasksPage() {
	return (
		<MainContent style={{ marginTop: `${navMarginTop}`, marginBottom: `${marginBottom}` }}>
			<Tasks />
		</MainContent>
	)
}
