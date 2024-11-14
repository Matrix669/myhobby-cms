import { marginBottom, navMarginTop } from '../constants/forStyles'
import MainContent from '../UI/MainContent/MainContent'
import Tasks from './components/Tasks/Tasks'

export const metadata = {
	title: 'Zadania',
}

export default function TasksPage() {
	return (
		<MainContent style={{ marginTop: navMarginTop, marginBottom: marginBottom}}>
			<Tasks />
		</MainContent>
	)
}
